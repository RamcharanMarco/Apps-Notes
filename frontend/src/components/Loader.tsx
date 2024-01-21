import { Orbit } from "@uiball/loaders";
import "../styles/loader.css";

const Loader = () => {
  return (
    <div className="loader">
      <Orbit size={100} color="#231F20" />
    </div>
  );
};

export default Loader;
