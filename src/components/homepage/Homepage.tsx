import './homepage.css';

import Avatar from '../../images/avatar.png';

function Homepage() {
  return (
    <div className="homepage">
        <h1>Front-end Developer and Student</h1>
        <h2>Constantly learning, passionate about technology.</h2>
        <img className='avatar-img' src={Avatar} alt='Avatar of myself.'/>
    </div>
  )
}

export default Homepage