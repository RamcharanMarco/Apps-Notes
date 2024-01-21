import pic from "../assets/icon-9.png";
import "../styles/easyintegration.css";

const EasyIntegration = () => {
  return (
    <div className="easyintergration">
      <div>
        <h1>easy integration</h1>
        <p>paste a script in your website</p>
        <p>all configuration done in user console</p>
        <p>
          NO/LOW-CODE. Design pixel-perfect interfaces and custom workflows on
          top of your data without having to code.
        </p>
      </div>
      <div>
        <img src={pic} alt="picture" />
      </div>
    </div>
  );
};

export default EasyIntegration;
