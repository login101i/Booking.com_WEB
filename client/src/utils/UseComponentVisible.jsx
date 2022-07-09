import { useState, useEffect, useRef } from "react";

export const UseComponentVisible = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  console.log(
    "%cMyProject%cline:4%cisComponentVisible",
    "color:#fff;background:#ee6f57;padding:3px;border-radius:2px",
    "color:#fff;background:#1f3c88;padding:3px;border-radius:2px",
    "color:#fff;background:rgb(23, 44, 60);padding:3px;border-radius:2px",
    isComponentVisible
  );

  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    } else {
      setIsComponentVisible(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};
