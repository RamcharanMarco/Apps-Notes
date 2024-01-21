import { Link } from "react-router-dom"
import '../styles/banner.css'

const Banner = () => {
  return (
    <div className="banner">
        <h1>SAYHELLO</h1>
        <div className="banner-links">
        <Link to="/">get started</Link>
          <Link to="/">request a demo</Link>
        </div>
    </div>
  )
}

export default Banner