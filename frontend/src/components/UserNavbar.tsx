import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useStore } from "../store/store";
import "../styles/navbar.css";
import "../styles/userNavbar.scss";
import { useState } from "react";

const UserNavbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { user, form } = useStore();

  const [show, setShow] = useState(false);

  let toggle = (e: any) => {
    setShow(!show);
  };

  let navigate = (path: string) => {
    nav(path);
  };

  return (
    <nav className="usernavbar">
      {show ? (
        <div id="mobile-nav" className="mobile-nav">
          <GrClose className="close" onClick={toggle} />
          <Link onClick={toggle} to={`/console/${user.user._id}`}>
            forms
          </Link>
          <Link onClick={toggle} to={`/console/${user.user._id}/form/edit`}>
            edit form
          </Link>
          <Link onClick={toggle} to={`/console/${user.user._id}/settings`}>
            settings
          </Link>
        </div>
      ) : null}
      <h1>SAYHELLO</h1>
      <div id="links" className="links">
        <Link to={`/console/${user.user._id}`}>forms</Link>
        <Link to={`/console/${user.user._id}/settings`}>settings</Link>
      </div>
      <BiMenu id="menu-icon" onClick={toggle} />
    </nav>
  );
};

export default UserNavbar;
