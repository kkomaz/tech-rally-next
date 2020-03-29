import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: 767,
  });

  const isDesktop = useMediaQuery({
    minWidth: 768,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : true,
    isMobile: isClient ? isMobile : false,
  };
}

export default useResponsive;