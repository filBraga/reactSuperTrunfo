import React from 'react';
// import PropTypes from 'prop-types';

class RemoveBtn extends React.Component {
  render() {
    return (
      <button
        type="button"
        onClick={ this.creatingNewArray(card) }
      >
        Remover
      </button>
    );
  }
}

// Deck.propTypes = {
//   cards: PropTypes.arrayOf({
//     cardName: PropTypes.string,
//     cardRare: PropTypes.string,
//     cardTrunfo: PropTypes.bool,
//   }).isRequired,
// };

export default RemoveBtn;
