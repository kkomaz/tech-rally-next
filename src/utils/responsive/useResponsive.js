import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isXs = useMediaQuery({
    minWidth: 0,
    maxWidth: 576,
  });

  const isSm = useMediaQuery({
    minWidth: 577,
    // maxWidth: 767,
  });

  const isMd = useMediaQuery({
    minWidth: 768,
    // maxWidth: 991,
  });

  const isLg = useMediaQuery({
    minWidth: 992,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isLg: isClient ? isLg : true,
    isXs: isClient ? isXs : false,
    isSm: isClient ? isSm : false,
    isMd: isClient ? isMd : false,
  };
}

export default useResponsive;