'use client'
import { useState } from "react";

export default function useHoverHook() {
  const [active, setActive] = useState(false);

  const handleHover = {
    onMouseEnter: () => setActive(true),
    onMouseLeave: () => setActive(false),
    onTouchStart: () => setActive(true),
    onTouchEnd: () => setActive(false),
  };
  return { active, handleHover };
}
