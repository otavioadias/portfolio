import React from 'react';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import About from './Components/About';
import Header from './Components/Header';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    );
  }
}

export default App;
