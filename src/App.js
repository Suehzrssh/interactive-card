import Card from './components/Card';
import Form from './components/Form';
import { FileContext } from './components/FileContext';
import { useState } from 'react';
import './App.scss';

function App() {
  const [cardName, setcardName] = useState('');
  const [cardNumber, setcardNumber] = useState('');
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [cvv, setCvv] = useState();
  const [show, setShow] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const formatNumber = e => {
    const inputVal = e.target.value.replace(/ /g, "");
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" ");
    }

    setcardNumber(spacedNumber);
  };

  const handleConfirm = () => {
    if(cardName && cardNumber && month && year && cvv) {
      setShow(true);
    } else {
      setErrorMsg(true)
    }
  }
  const handleContinue = () => {
    window.location.reload();
  }
  return (
    <div className="App">
      <FileContext.Provider value={{
        cardName, setcardName,
        cardNumber, setcardNumber,
        month, setMonth,
        year, setYear,
        cvv, setCvv,
        formatNumber,
        show, setShow,
        handleConfirm,
        handleContinue,
        errorMsg, setErrorMsg
        }}>
        <div className="container">
          <img className='bgImage' src="/images/bg-main-desktop.png" alt="" />
          <Form />
          <Card />
        </div>
      </FileContext.Provider>
    </div>
  );
}

export default App;
