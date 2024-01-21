import { Helmet, HelmetProvider } from "react-helmet-async";
import {useEffect} from 'react'
import { Link } from "react-router-dom";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>home | notes</title>
      </Helmet>
      <div>
        <div>
          <h1>Notes app</h1>
          <p>store your notes online</p>
          <Link to='/login'>get started</Link>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Home;
