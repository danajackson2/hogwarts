import React, { Component } from "react";
import Hog from './Hog'

class HelloWorld extends Component {

  render() {
    return (
      <div>
        <div className={'ui grid container'}>
          {this.props.hogs.map(h => <Hog hog={h}/>)}
        </div>
      </div>
    );
  }
}

export default HelloWorld;
