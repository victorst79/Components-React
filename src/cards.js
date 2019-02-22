import React, {Component} from 'react';
import './cards.css';

class Cards extends Component {
    render() {
        const { cardsData } = this.props;
        return(
            <section>
            <div class="card">
                <div class="c-header">
                    <img src={cardsData[0].imagen} alt="example"></img>
                    <div class="title">
                        <h3>{cardsData[0].nombre}</h3>
                        <small>{cardsData[0].fecha}</small>
                    </div>                    
                </div>      
                <div class="content">
                    <p>{cardsData[0].texto}</p>
                    <small><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png" alt="example" class="icono"></img>{cardsData[0].like}</small>
                </div>                
            </div>
            <div class="card">
                <div class="c-header">
                    <img src={cardsData[1].imagen} alt="example"></img>
                    <div class="title">
                        <h3>{cardsData[1].nombre}</h3>
                        <small>{cardsData[1].fecha}</small>
                    </div>                    
                </div>      
                <div class="content">
                    <p>{cardsData[1].texto}</p>
                    <small><img src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/512/heart-icon.png" alt="example" class="icono"></img>{cardsData[0].like}</small>
                </div>                
            </div>
            </section>            
        );
    }
}

export default Cards;