import Card from './Card';

import './projects.css';

function Projects() {
  return (
    <section className='projects-section'>
        <h4>My Projects</h4>
        <p className='projects-subtitle'>Here are some of my most recent/best projects!</p>
        <div className='projects-container'>
            <Card />
        </div>
    </section>
  )
}

export default Projects