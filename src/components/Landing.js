import React, { Component } from 'react';
import Row from './primary-components/Row';
import Column from './primary-components/Column';

class Landing extends Component {
  render() {
    return (
      <div className="container">
        <Row>
          <Column className='align-center' size="12">
            <h1>Hello World</h1>
          </Column>
        </Row>
      </div>
    )
  }
}

export default Landing;
