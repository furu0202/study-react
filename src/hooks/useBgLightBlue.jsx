import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const useBgLightBlue = () => {
  const router = useRouter();
  console.log(router);
  useEffect(() => {
    document.body.style.backgroundColor =
      router.pathname === '/' ? 'lightblue' : 'beige';
    return () => {
      document.body.style.backgroundColor = 'pink';
    };
  }, [router.pathname]);
};
