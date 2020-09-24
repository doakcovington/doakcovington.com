import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <div className="App">
      <h1>
        <span>Hi, I'm Doak! </span>
      </h1>
      <p>I'm a Software Engineer</p>
      <p>I have a passion for building, learning, and coaching </p>
      <p>I'm experienced in HTML/CSS | Java | JavaScript | Node.js | Rails | React | Redux | and Ruby</p>

      <h2>What I've Built:</h2>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Storm Center</Card.Title>
            <Card.Text>
              Event Management Web Application for Bellingham Public Schools
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>myERH</Card.Title>
            <Card.Text>
             Vital Signs Reporting Web Application
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>PulseOx</Card.Title>
            <Card.Text>
              Pulse Oxygen Tracking Web Application
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <h2>Find Me Here:</h2>
      <span><a href="https://github.com/doakcovington">Github</a> | </span>
      <span><a href="https://www.linkedin.com/in/doakcovington/">LinkedIn</a> | </span>
      <span><a href="https://twitter.com/Dr_Doak">Twitter</a> | </span>
      <span><a href="https://www.mtbaker.us/snow-report">On A Mountain</a>  </span>
    </div>
  );
}

export default App;
