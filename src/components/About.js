import "../styles/about.scss";

const About = () => {
  return (
      <div className="about">
        <div className="container">
          <h1>Bio</h1>
          <p>
          Hello, I am Yingru Fang.
          </p>
          <br/>
          <p>
          A Software Development Engineer.
          </p>
        </div>

        <div className="container experience">
          <h1>Experience</h1>
          <h3>Advantech</h3>
          <p>Role: Fullstack Software Developer</p>
          <p>Date: Apr. 2023 – Present</p>
          <p>Location: Milpitas, California</p>
          <br />
          <h3>Amazon</h3>
          <p>Role: Software Development Engineer Intern</p>
          <p>Date: Jun. 2022 – Sept. 2022</p>
          <p>Location: San Diego, California</p>
          <br />
          <h3>Vynca</h3>
          <p>Role: Software Engineer</p>
          <p>Date: Jul. 2018 – Sept. 2019</p>
          <p>Location: Palo Alto, California (Remote in Taiwan)</p>
          <br />
          <h3>AppMaster</h3>
          <p>Role: Software Engineer</p>
          <p>Date: Sept. 2017 – Jun. 2018</p>
          <p>Location: Taipei, Taiwan</p>
          <br />
          <h3>USI Group</h3>
          <p>Role: Planning Specialist</p>
          <p>Date: Aug. 2016 – Jul. 2017</p>
          <p>Location: Taipei, Taiwan</p>
        </div>

        <div className="container education">
          <h1>Education</h1>
          <h3>
            <a
              href="https://uci.edu/"
              target="_blank"
              rel="noreferrer"
            >
              University of California, Irvine
            </a>
          </h3>
          <p>Master of Software Engineering</p>
          <br />
          <h3>
            <a
              href="https://www.ntu.edu.tw/english/"
              target="_blank"
              rel="noreferrer"
            >
              National Taiwan University
            </a>
          </h3>
          <p>Master of Science in Chemical Engineering</p>
          <br />
          <h3>
            <a
              href="https://web.ncku.edu.tw/index.php?Lang=en"
              target="_blank"
              rel="noreferrer"
            >
              National Cheng Kung University
            </a>
          </h3>
          <p>Bachelor of Science in Chemical Engineering</p>
        </div>
      </div>
  )
}

export default About;
