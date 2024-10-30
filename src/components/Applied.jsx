import React, { useContext } from 'react';
import "../scss/Applied.scss";
import { FileContext } from './FileContext';
import yes from '../images/icon-complete.svg';

const Applied = () => {
    const {handleContinue} = useContext(FileContext);
  return (
    <div className='applied'>
        <img src={yes} alt="" />
        <h2>thank you</h2>
        <p>We have added your card detail</p>
        <button onClick={handleContinue}>continue</button>
    </div>
  )
}

export default Applied;