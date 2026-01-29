import { useEffect, useState } from "react";

/**
 * Custom hook for triggering animations on mount
 */
export const useScrollAnimation = (delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

export default useScrollAnimation;
