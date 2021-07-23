import "../styles/about.scss";

const About = () => {
  return (
      <div className="about">
        <div className="container">
          <h1>Bio</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br/>
          <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
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