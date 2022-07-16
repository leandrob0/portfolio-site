import './tools.css';

import Single from './Single';
import { faCode } from '@fortawesome/free-solid-svg-icons';

function Tools() {
  return (
    <section>
        <Single icon={faCode} title="Front-end Development" tools={['hola']}/>
    </section>
  )
}

export default Tools