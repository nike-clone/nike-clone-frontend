import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const [active, setActive] = useState(false);
  // 과거의 scroll 값 저장 위해서
  const scrollRef = useRef(0);

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
    if (scrollTop + clientHeight + 100 >= scrollHeight) {
      setActive(() => true); //ios 스크롤 바운스 막기
    } else {
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
