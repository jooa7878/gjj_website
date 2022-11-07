import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import { getAuth } from '../../utils/auth';

interface WrapperProps {
  children?: ReactNode;
}

const PageWrapper = ({ children }: WrapperProps) => {
  const router = useRouter();
  const isAuth = !!getAuth()?.accessToken;

  useEffect(() => {
    console.log(isAuth);
    if (isAuth && router.pathname === '/') {
      // 로그인을 한 상태
      const fallback = router.query.fallback as string;
      router.push(fallback ?? '/list');
    } else if (!isAuth && router.pathname !== '/') {
      router.push('/');
    }
  }, [isAuth]);
  return <>{children}</>;
};

export default PageWrapper;
