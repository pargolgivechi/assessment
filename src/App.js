import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

import MainContainer from './components/main-container.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      paragraphs: []
    }
  }

  componentDidMount () {
    axios.get('data.json').then(response => response.data).then(data => this.setState({paragraphs: data.data.node.paragraphs}))
  }

  render() {
    const { paragraphs } = this.state;
    return (
      <MainContainer paragraphs={paragraphs}/>
    )
  }
}

export default App;

 
