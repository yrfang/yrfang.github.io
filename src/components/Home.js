import { Link } from "react-router-dom";
import "../styles/shared.scss";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>Hello, I am</h1>
        <div className="person">
          <h1 className="name">Yingru Fang</h1>
          <img
            src={`${process.env.PUBLIC_URL}/yr-logo.png`}
            alt="person"
          />
        </div>
        <h1>Software developer</h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;