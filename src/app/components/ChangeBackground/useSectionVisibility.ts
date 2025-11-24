import { useEffect, useRef } from "react";
import { useBackgroundColor } from "./index";

export const useSectionVisibility = (
  backgroundColor: string,
  threshold: number = 0.5
) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { setBackgroundColor } = useBackgroundColor();

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBackgroundColor(backgroundColor);
          }
        });
      },
      { threshold }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [backgroundColor, setBackgroundColor, threshold]);

  return sectionRef;
};
