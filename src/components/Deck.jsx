import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export class Deck extends Component {
  render() {
    const { cards } = this.props;
    // console.log(cards);

    const removeParent = () => {
    };

    return (
      <section>
        <h1> Cartas Registradas</h1>
        {cards.map((card) => (
          <div key={ card.cardAttr1 }>
            <Card
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
            <button type="button" onClick={ removeParent() }>Remover</button>
          </div>
        ))}
      </section>
    );
  }
}

Deck.propTypes = {
  cards: PropTypes.arrayOf({
    cardName: PropTypes.string,
    cardDescription: PropTypes.string,
    cardAttr1: PropTypes.string,
    cardAttr2: PropTypes.string,
    cardAttr3: PropTypes.string,
    cardImage: PropTypes.string,
    cardRare: PropTypes.string,
    cardTrunfo: PropTypes.bool,
  }).isRequired,
};

export default Deck;
