import { Link } from "react-router-dom";
import "../styles/shared.scss";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hello, I am</p>
          <p className="name">Yingru Fang</p>
          <div className="person">
            <img
              className="photo"
              src={`${process.env.PUBLIC_URL}/yr-logo.png`}
              alt="person"
            />
          </div>
          <p>Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
    </div>
  )
};

export default Home;