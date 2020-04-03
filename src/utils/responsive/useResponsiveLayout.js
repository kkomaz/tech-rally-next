import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsiveLayout() {
  const [isClient, setIsClient] = useState(false);

  const isXsLayout = useMediaQuery({
    minWidth: 0,
  });

  const isSmLayout = useMediaQuery({
    minWidth: 577,
  });

  const isMdLayout = useMediaQuery({
    minWidth: 768,
  });

  const isLgLayout = useMediaQuery({
    minWidth: 992,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isXsLayout: isClient ? isXsLayout : false,
    isSmLayout: isClient ? isSmLayout : false,
    isMdLayout: isClient ? isMdLayout : false,
    isLgLayout: isClient ? isLgLayout : true,
  };
}

export default useResponsiveLayout;