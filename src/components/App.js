import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HelloWorld from "./HelloWorld";

class App extends Component {
  state={
    filtered: false,
    hogList: hogs 
  }

  filterHogs = () => {
    if (this.state.filtered){
      this.setState({
        filtered: false,
        hogList: hogs
      })
    } else{
      let filteredHogs = hogs.filter(h => h.greased === true)
      this.setState({
        filtered: true,
        hogList: filteredHogs
      })
    }
  }

  sortByName = () => {
    let sortedN = this.state.hogList.sort((p1, p2) => p1.name.localeCompare(p2.name))
    this.setState({
      hogList: sortedN
    })
  }

  sortByWeight = () => {
    let sortedW = this.state.hogList.sort((p1, p2) => p2.weight - p1.weight)
    this.setState({
      hogList: sortedW
    })
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <div><button onClick={this.sortByName}>Sort by Name</button></div><br />
        <div><button onClick={this.sortByWeight}>Sort by Weight</button></div><br />
        <div><button onClick={this.filterHogs}>{this.state.filtered ? 'See all da piggies': 'See dem greasy piggies'}</button></div><br />
        <HelloWorld hogs={this.state.hogList}/>
      </div>
    );
  }
}

export default App;
