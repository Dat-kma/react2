import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 
class Numbertwo extends Component{
  render(){
    return(
      <div className="col-4">
        <div className="card">
          <img src={this.props.linkanh} alt="" className="card-img-top"/>
          <div className="card-body">
            <h4 className="card-title">{this.props.tieude}</h4>
            <p className="card-text">{this.props.text}</p>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
        </header>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <div className="row">
            <Numbertwo tieude="khoi 1" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d" linkanh="http://kenh14cdn.com/zoom/460_289/2018/12/11/475806066071367597054331705342977062207488n-1544546453793704730971-crop-1544546475539185276518.jpg"/>
            <Numbertwo tieude="khoi 2" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d" linkanh="https://kenh14cdn.com/2018/12/12/483568994585218246737491137465781324349440n-15445534715681355024450.jpg"/>
            <Numbertwo tieude="khoi 2" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard d" linkanh="https://kenh14cdn.com/2018/12/12/483568994585218246737491137465781324349440n-15445534715681355024450.jpg"/>  
          </div>
        </div>
         
      </div>
    );
  }
}

export default App;
