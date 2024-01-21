import "../styles/getstarted.css";
import mobile from "../assets/mobile.png";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="getstarted">
      <p>{`<>`}</p>
      <h1>Ready to try <br></br>SayHello?</h1>
      <Link to="/signup">get started for free</Link>
  </div>  )
}

export default GetStarted