import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Deck extends React.Component {
  render() {
    const { cards, removeCardInCards } = this.props;

    return (
      <section>
        <h1> Cartas Registradas</h1>
        {cards.map((card, index) => (
          <div key={ card.cardName }>
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
            <button
              type="button"
              selector={ card }
              onClick={ removeCardInCards(index) }
            >
              Remover
            </button>
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
  removeCardInCards: PropTypes.func.isRequired,
};

export default Deck;
