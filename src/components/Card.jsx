import React,{useContext} from 'react';
import { FileContext } from './FileContext';
import '../scss/Card.scss';
import cardLogo from '../images/card-logo.svg';
import frontBg from '../images/bg-card-front.png';
import backBg from '../images/bg-card-back.png';


const Card = () => {
    const {cardName,
        cardNumber,
        month,
        year,
        cvv} = useContext(FileContext);
  return (
    <div className='CardDiv'>
        <div className="front">
          <img className='bg-card' src={frontBg} alt="" />
          <div className="cardItem">
            <img src={cardLogo} alt="" />
          </div>
          <div className="cardInfo">
            <div className="number">
              <p>{cardNumber || '000 0000 0000 0000'}</p>
            </div>
            <div className="info">
            <h2>{cardName || 'Alex Mason'}</h2>
            <div className="expInps">
              <p>{month || '00'}</p>
              <p>/</p>
              <p>{year || '00'}</p>
            </div>
            </div>
          </div>
        </div>
        <div className="back">
          <img className='bg-card' src={backBg} alt="" />
          <p>{cvv || '000'}</p>
        </div>
    </div>
  )
}

export default Card