import React, { Component } from 'react';
import Row from './primary-components/Row';
import Column from './primary-components/Column';

class Landing extends Component {
  state = {
    titles: ["Full Stack Developer", "Programmer", "Composer", "Technical Analyst"],
    currentTitle: "Full Stack Developer"
  };


  componentDidMount() {
    const titleChanger = () => {
      setTimeout(() => {
        let randTitle = this.state.titles[Math.floor(Math.random() * this.state.titles.length)];
        this.setState({ currentTitle: randTitle });
        titleChanger();
      }, 2000);
    };
    titleChanger();
  };

  render() {
    return (
      <div className="container">
        <Row className='center-align'>
          <Column className='align-center' size="12">
            <h1>Joseph Schefer</h1>
          </Column>
        </Row>
        <Row className='center-align'>
          <Column size="12">
            <h2>I am a {this.state.currentTitle}</h2>
          </Column>
        </Row>
      </div>
    )
  }
}

export default Landing;
