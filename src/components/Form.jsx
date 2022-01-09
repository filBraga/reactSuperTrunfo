import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
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
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="formClass">
        <form onSubmit={ onSaveButtonClick }>

          <label htmlFor="name-input">
            Name:
            <input
              type="text"
              id="name-input"
              value={ cardName }
              name="cardName"
              data-testid="name-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description-input">
            Description:
            <input
              type="textarea"
              id="description-input"
              value={ cardDescription }
              name="cardDescription"
              data-testid="description-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1-input">
            attr1-input:
            <input
              type="number"
              id="attr1-input"
              value={ cardAttr1 }
              name="cardAttr1"
              data-testid="attr1-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2-input">
            attr2-input:
            <input
              type="number"
              id="attr2-input"
              value={ cardAttr2 }
              name="cardAttr2"
              data-testid="attr2-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3-input">
            attr3-input:
            <input
              type="number"
              id="attr3-input"
              value={ cardAttr3 }
              name="cardAttr3"
              data-testid="attr3-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image-input">
            image-input:
            <input
              type="text"
              id="image-input"
              value={ cardImage }
              name="cardImage"
              data-testid="image-input"
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare-input">
            Raridade:
            <select
              id="rare-input"
              value={ cardRare }
              name="cardRare"
              data-testid="rare-input"
              onChange={ onInputChange }
            >
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo-input">
            Super Trunfo:
            <input
              type="checkbox"
              id="trunfo-input"
              checked={ cardTrunfo }
              name="cardTrunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
