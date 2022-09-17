# nikie-clone-frontend

> 나이키 클론 프로젝트 </br> >https://nike-custom-store.netlify.app/

<br/>

## 1. 제작 기간 & 참여 인원

- 2022/07/14 ~ 현재
- Front-end: [KIM SAYONG](https://github.com/youss95)

<br/>

## 2. 사용 기술

- Javascript
- React.js 18
- React-query 3
- Redux-toolkit 1.8
- styled-components 5

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

- 로그인,회원가입
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
