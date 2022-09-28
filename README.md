# nikie-clone-frontend

> 나이키 클론 프로젝트 </br> >https://nike-custom-store.netlify.app/

<br/>

## 1. 제작 기간 & 참여 인원

- 2022/07/14 ~ 현재
- Front-end: [KIM SAYONG](https://github.com/youss95)

<br/>

## 2. 사용 기술

- JavaScript
- React.js 18
- React-query 3
- Redux-toolkit 1.8
- styled-components 5
- TypeScript로 migration 중
  <br/>

## 3. 폴더 구조

- 도메인에 따라 페이지가 분리되고 그에 필요한 컴포넌트를 매핑

<br/>

```sh
├─src
│  ├─__test__
│  ├─api
│  ├─assets
│  ├─components
│  ├─constants
│  ├─features
│  ├─hooks
│  ├─pages
└─ └─util
```

## 4. 핵심 기능

- JWT 이용한 로그인,회원가입
- 회원/비회원 장바구니 , 결제
- 상품 색상/사이즈 별 재고 관리

<br/>

## 5. 핵심 트러블 슈팅

### 5.1 상품 색상, 사이즈별 수량 관리

- 색상 , 사이즈, 수량 컴포넌트에서 상태관리시의 어려움
  - 옵션의 checked 표시 유지, 컬러->사이즈 선택이 아닌 반대의 경우 잘못된 사이즈의 데이터가 사라지는 현상
    <br/>
    -> redux-toolkit으로 상품데이터를 전역관리 , 컴포넌트를 포함하고 있는 페이지에서 데이터 관리

### 5.2 중복 필터링시

- 여러개의 컬러 옵션과 사이즈 옵션을 선택할 때 마다 쿼리 스트링에 추가해서 요청시의 어려움

  - 쿼리 스트링을 필터 radio checkbox 버튼을 선택시 추가, 해제시 제외가 필요
    -> 커스텀 훅을 만들어서 사이즈와 컬러를 동시에 관리
    -> 기존 각각의 api 마다 쿼리 스트링을 넣어줘서 관리 -> axios 인터셉터에서 관리

  <br/>

<details>
<summary><b>해결 코드</b></summary>
<div markdown="1">

```javascript
//src/hooks/useFilter.js

const useFilter = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e) => {
      const selectedColor = e.target.value.replace('#', '');
      const index = value.color.indexOf(selectedColor);
      if (index >= 0) {
        value.color.splice(index, 1); //컬러 해제시 필터링 제외
        setValue(value);
      } else {
        value[e.target.name].push(selectedColor);
        const newValue = { ...value };
        setValue(newValue);
      }
    },
    [value]
  );

  return [value, onChange];
};
```

</div>
</details>

### 5.3 ios 바운스 스크롤

### 상황

- 스크롤 방향에 따라 헤더 고정 노출/비노출이 필요
- 그러나 ios 화면 바닥을 넘어 가면 의도치 않게 위아래로 고무줄 처럼 튕기는 현상 -> 위아래로 튕길때 헤더가 의도치 않게 노출/비노출이 됨
  - 가장 상위태그에 position:fixed -> 튕기는 현상은 막아주지만 스크롤 함수를 감지를 못함

### 해결

- 화면 바닥 근처에서의 스크롤위치에서는 헤더를 노출로 고정
<details>
<summary><b>해결 코드</b></summary>
<div markdown="1">

```javascript
//src/hooks/useScroll.js
import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const [active, setActive] = useState(false);
  // 과거의 scroll 값 저장 위해서
  const scrollRef = useRef(0);
  // 쓰로틀 함수
  const throttle = (callback, delay) => {
    let waiting = false;
    return () => {
      if (!waiting) {
        waiting = true;
        setTimeout(() => {
          callback();
          waiting = false;
        }, delay);
      }
    };
  };

  const handleScroll = () => {
    const prevScroll = scrollRef.current;
    const currentScroll = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    //화면 바닥에 근접할때 ios 스크롤 바운스에 대한 대응
    if (scrollTop + clientHeight + 100 >= scrollHeight) {
      setActive(() => true);
    } else {
      // 스크롤 방향에 따른 헤더 노출/비노출
      prevScroll > currentScroll ? setActive(() => false) : setActive(() => true);
    }
    // 현재 값을 넣어서 다음 scroll handle에서 이전 값으로 쓰기
    scrollRef.current = currentScroll;
  };
  const updateScroll = throttle(handleScroll, 50);

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [updateScroll]);

  return active;
};
```

</div>
</details>
