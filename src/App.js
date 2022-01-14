import React from 'react';
import './index.css';
import Form from './components/Form';
import Card from './components/Card';
import Deck from './components/Deck';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      hasTrunfo: false,
    };
    // const newArray = [...this.state.cards, 'terceira'];
    // newArray = ...this.state.cards + 'terceira'

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.removeCardInCards = this.removeCardInCards.bind(this);
  }

  // handleBlank Texts VALIDATION
  handleBlank() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    let textBlank = false;
    if (cardName === ''
    || cardDescription === ''
    || cardImage === ''
    || cardRare === '') {
      textBlank = true;
    } else textBlank = false;
    return textBlank;
  }

  // handleAtt VALIDATION
  handleAtt() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;

    const maxAtribute = 90;
    const minAtribute = 0;
    let maxAttNums = false;
    let minAttNums = false;

    if (cardAttr1 > maxAtribute
      || cardAttr2 > maxAtribute
      || cardAttr3 > maxAtribute) {
      maxAttNums = true;
    } else maxAttNums = false;

    if (cardAttr1 < minAtribute
    || minAtribute > cardAttr2
    || minAtribute > cardAttr3) {
      minAttNums = true;
    } else minAttNums = false;

    if (maxAttNums === true || minAttNums === true) { return true; } return false;
  }

  // handleMaxTotal VALIDATION
  handleMaxTotal() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAttTotal = 210;
    const sum = parseFloat(cardAttr1) + parseFloat(cardAttr2) + parseFloat(cardAttr3);
    // console.log(sum);
    if (sum > maxAttTotal) { return true; } return false;
  }

  // handleValidation
  handleValidation() {
    const textBlank = this.handleBlank();
    const attNums = this.handleAtt();
    const maxTotal = this.handleMaxTotal();
    // console.log(maxTotal);

    if (textBlank === true
    || attNums === true
    || maxTotal === true
    ) {
      this.setState({ isSaveButtonDisabled: true });
    } else this.setState({ isSaveButtonDisabled: false });
  }

  // handleChange
  onInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    }, function check() { this.handleValidation(); });
    // https://stackoverflow.com/questions/42038590/when-to-use-react-setstate-callback
  }

  // handleSaveButton handleSubmit
  onSaveButtonClick(e) {
    e.preventDefault();

    // console.log(this.state);

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newObject = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({ cards: [...prevState.cards, newObject] }));
    // estudar aqui no prevState e nos Arrays. Sem modificar o array anterior

    this.hasTrunfoFunc();

    this.clearForm();
  }

  // clearForm
  clearForm() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    });
  }

  // removeCardInCards NAO FUNCIONA AINDA
  removeCardInCards() {
  //   const cards = this.state;
  //   const newCards = cards.splice(i);
  //   console.log(i);
  //   this.setState({ cards: [newCards] });
  }

  // hasTrunfo
  hasTrunfoFunc() {
    const { cards } = this.state;
    // console.log(cards);
    const trunfo = cards.find((card) => card.cardTrunfo === true);
    // console.log(trunfo);

    if (trunfo !== undefined) {
      this.setState({ hasTrunfo: false });
    } this.setState({ hasTrunfo: true });
  }

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
      cards,
      hasTrunfo,
    } = this.state;

    return (
      <div>
        <h1 className="titleClass">Tryunfo by Fil</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          hasTrunfo={ hasTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <Deck
          cards={ cards }
          removeCardInCards={ this.removeCardInCards }
        />
      </div>
    );
  }
}

export default App;
