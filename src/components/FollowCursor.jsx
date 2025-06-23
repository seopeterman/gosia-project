import React, { useEffect, useRef, useState } from "react";

const FollowCursor = () => {
  const cursorRef = useRef(null);
  const [hoveringButton, setHoveringButton] = useState(false);
  const [hoveredButtonType, setHoveredButtonType] = useState(null); // 'custom', 'special' lub null

  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      cursorX.current += (mouseX.current - cursorX.current) * 0.1;
      cursorY.current += (mouseY.current - cursorY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX.current}px`;
        cursorRef.current.style.top = `${cursorY.current}px`;
      }

      const hovered = document.elementFromPoint(mouseX.current, mouseY.current);

      if (!hovered) {
        setHoveredButtonType(null);
        setHoveringButton(false);
      } else {
        const customBtn = hovered.closest(".btn-custom");
        const specialBtn = hovered.closest(".btn-custom-second");

        if (customBtn) {
          setHoveredButtonType("custom");
          setHoveringButton(true);
        } else if (specialBtn) {
          setHoveredButtonType("special");
          setHoveringButton(true);
        } else {
          setHoveredButtonType(null);
          setHoveringButton(false);
        }
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${
          hoveringButton ? "cursor-hover" : ""
        } ${
          hoveredButtonType === "custom"
            ? "cursor-custom"
            : hoveredButtonType === "special"
            ? "cursor-special"
            : ""
        }`}
      />
    </>
  );
};

export default FollowCursor;
