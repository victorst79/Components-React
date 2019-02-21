import React, {Component} from 'react';
import './cards.css';

class Cards extends Component {
    render() {
        const { cardsData } = this.props;
        return(
            <div class="card">
                {/* <img></img> */}
                <h3>Nombre: {cardsData.nombre}</h3>
                <small></small>
                <p></p>
                <small></small>
            </div>
        );
    }
}

export default Cards;