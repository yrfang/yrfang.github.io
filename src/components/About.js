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
          <h3>Vynca, Inc.</h3>
          <p>Role: Software Engineer</p>
          <p>Specialization: Front-end Development</p>
          <p>Date: Jul. 2018 – Sept. 2019</p>
          <p>Location: Palo Alto, California (Remote in Taiwan)</p>
          <br />
          <h3>AppMaster Co., Ltd.</h3>
          <p>Role: Software Engineer</p>
          <p>Specialization: Front-end Development</p>
          <p>Date: Sept. 2017 – Jun. 2018</p>
          <p>Location: Taipei, Taiwan</p>
          <br />
          <h3>USI Group Corp.</h3>
          <p>Role: Planning Coordinator</p>
          <p>Specialization: Marketing Data Analysis</p>
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
              href="https://www.ntu.edu.tw/english/index.html"
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
              href="https://www.ncku.edu.tw/index.php?Lang=en"
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