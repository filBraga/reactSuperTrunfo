import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="cardClass">
        <h3 data-testid="name-card">
          {cardName}
        </h3>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          width="150px"
        />
        <h4 data-testid="description-card">
          {cardDescription}
        </h4>
        <h4 data-testid="attr1-card">
          Att 1:
          {cardAttr1}
        </h4>
        <h4 data-testid="attr2-card">
          Att 2:
          {cardAttr2}
        </h4>
        <h4 data-testid="attr3-card">
          Att 3:
          {cardAttr3}
        </h4>

        <h4 data-testid="rare-card">{cardRare}</h4>

        {cardTrunfo ? <h5 data-testid="trunfo-card">Super Trunfo</h5> : ''}

      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
