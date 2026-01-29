import { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/**
 * Custom hook for smooth scrolling to sections with cross-page navigation support
 */
export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback(
    (sectionId: string, onBeforeScroll?: () => void) => {
      onBeforeScroll?.();

      // If we're not on the home page, navigate there first with the hash
      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    [navigate, location.pathname]
  );

  return { scrollToSection };
};

export default useScrollToSection;
