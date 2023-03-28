import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/Bootstrap5.jpg";
import Frontend from "./images/frontend.jpg";
import Website from "./images/website.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">My Courses</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus arcu, dictum ut finibus placerat, facilisis eget mi. Aenean rhoncus quam eros, eu sagittis lorem tincidunt in. Vestibulum ac enim elit. Fusce volutpat efficitur tortor, eu aliquam turpis consectetur pretium. Vestibulum ut dolor aliquam, convallis arcu non, dictum lacus"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus arcu, dictum ut finibus placerat, facilisis eget mi. Aenean rhoncus quam eros, eu sagittis lorem tincidunt in. Vestibulum ac enim elit. Fusce volutpat efficitur tortor, eu aliquam turpis consectetur pretium. Vestibulum ut dolor aliquam, convallis arcu non, dictum lacus"
              />
            </div>
            <div className="column">
              <Course
                image={Website}
                title="Web"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus arcu, dictum ut finibus placerat, facilisis eget mi. Aenean rhoncus quam eros, eu sagittis lorem tincidunt in. Vestibulum ac enim elit. Fusce volutpat efficitur tortor, eu aliquam turpis consectetur pretium. Vestibulum ut dolor aliquam, convallis arcu non, dictum lacus"
              />
            </div>
            <div className="column">
              <Course
                image={Frontend}
                title="Front-End"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus arcu, dictum ut finibus placerat, facilisis eget mi. Aenean rhoncus quam eros, eu sagittis lorem tincidunt in. Vestibulum ac enim elit. Fusce volutpat efficitur tortor, eu aliquam turpis consectetur pretium. Vestibulum ut dolor aliquam, convallis arcu non, dictum lacus"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
