import { Link } from "react-router-dom";
import "../styles/shared.scss";
import "../styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi, I am</p>
          <p>Yingru Fang</p>
          <p>Software developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/image/yr-photo.png`}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Home;
