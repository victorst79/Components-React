import React, { Component } from 'react';
import './App.css';
import './cards'
import Cards from './cards';

class App extends Component {

  render() {
    const cards = [
      {
        'nombre': 'Example Card',
        'fecha': new Date().toLocaleString(),
        'texto': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores in ut, deleniti aperiam facere dicta repudiandae fuga? Sequi sunt amet aspernatur suscipit atque architecto tempore eveniet vitae libero exercitationem!',
        'imagen': 'https://99116.cmstrial.net/images/285626/strawberry.jpg',
        'like': 10
      }
    ]    
    return (
      <div className="App">
        <h1>Victor Santaella - React Test</h1>
        <Cards cardsData={cards}/>
      </div>
    );
  }
}

export default App;
