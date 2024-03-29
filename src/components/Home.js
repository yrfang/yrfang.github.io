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
        <a href="https://drive.google.com/file/d/1AWF68RH7JRmFpmJHbpFEEiwLb1WcR5i5/view?usp=share_link" target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
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
