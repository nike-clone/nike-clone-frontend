import { useEffect, useRef, useState } from 'react';

export const useScroll = (): boolean => {
  const [active, setActive] = useState<boolean>(false);
  // 과거의 scroll 값 저장 위해서
  const scrollRef = useRef<number>(0);

  const throttle = (callback: () => void, delay: number): (() => void) => {
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

  const handleScroll = (): void => {
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
