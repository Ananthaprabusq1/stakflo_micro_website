import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <div
        className="fixed top-0
    left-0
    z-[999]
    w-full
      "
      >
        <DesktopNavbar />
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
