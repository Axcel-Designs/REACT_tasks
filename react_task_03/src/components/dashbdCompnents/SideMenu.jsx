import { useEffect, useState } from "react";
import MiniMenu from "./MiniMenu";
import MaxMenu from "./MaxMenu";

export default function SideMenu() {
  const [hideMenubar, setHideMenubar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function tgglMenu() {
    setHideMenubar(!hideMenubar);
  }

  return (
    <>
      {windowWidth > 960 && hideMenubar ? (
        <MaxMenu onToggle={tgglMenu} />
      ) : (
        <MiniMenu onToggle={tgglMenu} />
      )}

      {/*
      {hideMenubar ? (
        <MaxMenu onToggle={tgglMenu} />
      ) : (
        <MiniMenu onToggle={tgglMenu} />
      )} */}
    </>
  );
}
