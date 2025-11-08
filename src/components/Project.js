import "../styles/project.scss";

const Project = () => {
  return (
    <div className="project">
      <h1>Side Projects</h1>

      <div className="container">
        <div className="project-card">
          <div
            className="coverphoto"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}/image/front-end-starter-photo.png)`
            }}></div>
          <h3>
            <a
              href="https://yrfang.github.io/frontend-starter/"
              target="_blank"
              rel="noreferrer"
            >
              Front-end's 50 Warm Up
            </a>
          </h3>
          <p>HTML | CSS | JavaScript | JQuery</p>
          <p>
            <a
              href="https://github.com/yrfang/frontend-starter"
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a>
          </p>
        </div>

        <div className="project-card">
          <div
            className="coverphoto"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}/image/vue-starter-project-photo.png)`
            }}></div>
          <h3>
            <a
              href="https://yrfang.github.io/Vue.js-projects/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Vue Starter
            </a>
          </h3>
          <p>Vue.js | Jade | Sass</p>
          <p>
            <a
              href="https://github.com/yrfang/Vue.js-projects"
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a>
          </p>
        </div>

        <div className="project-card">
          <div
            className="coverphoto"
            style={{ 
              backgroundImage: `url(${process.env.PUBLIC_URL}/image/vue-note-photo.png)`
            }}></div>
          <h3>
            <a
              href="https://yrfang.github.io/vuejs-localstorage-note"
              target="_blank"
              rel="noreferrer"
            >
              Take Notes
            </a>
          </h3>
          <p>Vue.js | Sass | Local Storage</p>
          <p>
            <a
              href="https://github.com/yrfang/vuejs-localstorage-note"
              target="_blank"
              rel="noreferrer"
            >
              View Github
            </a>
          </p>
        </div>
      </div>
    </div>
  )
};

export default Project;