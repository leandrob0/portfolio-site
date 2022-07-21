import Card from './Card';
import Odinbook from "../../images/odinbook-img.png";

import './projects.css';

function Projects() {
  return (
    <section className='projects-section'>
        <h4>My Projects</h4>
        <p className='projects-subtitle'>Here are some of my most recent/best projects!</p>
        <div className='projects-container'>
            <Card src={Odinbook}/>
            <Card src={Odinbook}/>
            <Card src={Odinbook}/>
            <Card src={Odinbook}/>
            <Card src={Odinbook}/>
        </div>
    </section>
  )
}

export default Projects