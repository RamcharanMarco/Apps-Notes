import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import "../styles/navbar.css";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {

  const [show, setShow] = useState(false);

  let toggle = (e: any) => {
    setShow(!show);
  };

  return (
    <nav className="navbar">

      {/* the mobile nav */}
      {show ? (
        <div id="mobile-nav" className="mobile-nav">
          <GrClose className="close" onClick={toggle} />

          <Link onClick={toggle} to="/">
            home
          </Link>
          <Link onClick={toggle} to="/login">
            login
          </Link>
          <Link onClick={toggle} to="/signup">
            signup
          </Link>
        </div>
      ) : null}

      {/* the desktop nav */}
      <Link to="/">
        <h1>notes</h1>
      </Link>
      <div id="links" className="links">
        <Link onClick={toggle} to="/login">
          login
        </Link>
        <Link onClick={toggle} to="/signup">
          signup
        </Link>
      </div>
      <BiMenu id="menu-icon" onClick={toggle} />
      
    </nav>
  );
};

export default Navbar;
