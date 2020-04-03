import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsiveClass() {
  const [isClient, setIsClient] = useState(false);

  const isXsClass = useMediaQuery({
    minWidth: 0,
    maxWidth: 576,
  });

  const isSmClass = useMediaQuery({
    // minWidth: 577,
    maxWidth: 767,
  });

  const isMdClass = useMediaQuery({
    minWidth: 768,
    // maxWidth: 991,
  });

  const isLgClass = useMediaQuery({
    minWidth: 992,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isXsClass: isClient ? isXsClass : false,
    isSmClass: isClient ? isSmClass : false,
    isMdClass: isClient ? isMdClass : false,
    isLgClass: isClient ? isLgClass : true,
  };
}

export default useResponsiveClass;