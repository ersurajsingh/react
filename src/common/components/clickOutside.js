import React, { useEffect, useRef } from "react";

/**
 * ClickOutside component to handle click outside of an element
 * @param {boolean} isOpen - Whether the element is open or not
 * @param {Function} onClickOutside - Callback when clicked outside
 * @param {ReactNode} children - Child elements
 */
function ClickOutside({ isOpen = true, onClickOutside, children, ...rest }) {
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        onClickOutside(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [onClickOutside, isOpen]);

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
}

export default ClickOutside;
