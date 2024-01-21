import "../styles/footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footerlinks">
        <h1>SAYHELLO</h1>
        <p>Koyeb is a developer-friendly serverless platform to deploy apps globally. No-ops, servers, or infrastructure management.</p>
        <p>git repo</p>
        <p>technologies i used</p>
      </div>
      <div className="footerlinks">
        <h1>sitemap</h1>
        <Link to="/">home</Link>
        <Link to="/">dashboard</Link>
        <Link to="/">get started</Link>
        <Link to="/">demo</Link>
        <Link to="/forgotpassword/email">forgot password</Link>
        <Link to="/docs">docs</Link>
      </div>
      <div className="footerlinks">
        <h1>resources</h1>
        <Link to="/">docs</Link>
        <Link to="/">app</Link>
      </div>
      <div className="footerlinks">
        <h1>developer</h1>
        <Link to="/">website</Link>
        <Link to="/">github</Link>
        <Link to="/">blog</Link>
      </div>
    </footer>
  );
};

export default Footer;
