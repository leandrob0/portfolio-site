import "./homepage.css";

import Avatar from "../../images/avatar.png";

function Homepage() {
  return (
    <div className="homepage">
      <h1>Front-end Developer and Student</h1>
      <h2>Constantly learning, passionate about technology.</h2>
      <img className="avatar-img" src={Avatar} alt="Avatar of myself." />
      <svg className="waves-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,192L40,165.3C80,139,160,85,240,80C320,75,400,117,480,154.7C560,192,640,224,720,224C800,224,880,192,960,154.7C1040,117,1120,75,1200,80C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Homepage;
