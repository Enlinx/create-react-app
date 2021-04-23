import logo from './logo.svg';
import { Form, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Update Checklist:</p>
        <ListGroup style={{ color: '#303030' }}>
          <ListGroup.Item>
            Crate a{' '}
            <a
              className='App-link'
              href='https://app.logrocket.com/'
              target='_blank'
              rel='noopener noreferrer'>
              LogRocket
            </a>{' '}
            project
          </ListGroup.Item>
          <ListGroup.Item>
            Update Package.json: Scripts, Homepage, Name
          </ListGroup.Item>
          <ListGroup.Item>Update Readme</ListGroup.Item>
          <ListGroup.Item>Add .env files</ListGroup.Item>
          <ListGroup.Item>Add 

          <a className='App-link'
              href='https://fontawesome.com/how-to-use/on-the-web/using-with/react'
              target='_blank'
              rel='noopener noreferrer'>Font Awesome React</a>
              </ListGroup.Item>
          <ListGroup.Item>
            Grab the{' '}
            <a
              className='App-link'
              href='https://bitbucket.org/enlinx/workspace/snippets/7XyXGe/font-awesome-npmrc'
              target='_blank'
              rel='noopener noreferrer'>
              .npmrc
            </a>{' '}
            from BitBucket
          </ListGroup.Item>
          <ListGroup.Item>
            <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'>
              Learn React
            </a>
          </ListGroup.Item>
        </ListGroup>
      </header>
    </div>
  );
}

export default App;
