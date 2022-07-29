import { useEffect, useRef, useState } from 'react';

export const useScroll = () => {
  const [active, setActive] = useState(false);
  // 과거의 scroll 값 저장 위해서
  const scrollRef = useRef(0);

  const throttle = (callback, delay) => {
    let timer = null;
    return () => {
      if (timer) return;
      timer = setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    };
  };
  const handleScroll = () => {
    const prevScroll = scrollRef.current;
    const currentScroll = window.scrollY;

    if (prevScroll > currentScroll) {
      setActive(() => false);
    } else {
      setActive(() => true);
    }
    // 현재 값을 넣어서 다음 scroll handle에서 이전 값으로 쓰게
    scrollRef.current = currentScroll;
  };
  const updateScroll = throttle(handleScroll, 100);
  // 현재 scrollTop 지정
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [updateScroll]);

  return active;
};
