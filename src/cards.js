import React, {Component} from 'react';
import './cards.css';

class Cards extends Component {
    render() {
        const { cardsData } = this.props;
        return(
            <div class="card">
                <div class="image">
                <img src={cardsData[0].imagen} alt="example"></img>
                </div>
                <div class="dimportant">
                    <h3>Nombre: {cardsData[0].nombre}</h3>
                    <small>{cardsData[0].fecha}</small>
                </div>      
                <div class="content">
                    <p>{cardsData[0].texto}</p>
                    <small>{cardsData[0].like}</small>
                </div>                
            </div>
        );
    }
}

export default Cards;