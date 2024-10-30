import React, { useContext } from 'react';
import '../scss/Form.scss'
import { FileContext } from './FileContext';
import Applied from './Applied';

const Form = () => {
    const {setcardName,
        cardNumber,
        formatNumber,
        setMonth,
        setYear,
        setCvv,
        show,
        handleConfirm,
        errorMsg} = useContext(FileContext);
    
  return (
    <div className='formPage'>
        {show ? <Applied /> : (
            <form>
            <div className="item">
                <label htmlFor="cardname">cardholder name</label>
                <input
                placeholder='e.g. Alex Mason'
                type="text"
                required
                id='cardname'
                name='cardname'
                onChange={e=> setcardName(e.target.value)} />
                {
                    errorMsg && <div className="error">
                        this field is required
                    </div>
                }
            </div>
            <div className="item">
                <label htmlFor="cardnumber">card number</label>
                <input
                placeholder='e.g. 1234 5678 9123 0000'
                type="text"
                required
                id='cardnumber'
                name='cardnumber'
                value={cardNumber}
                onChange={formatNumber} />
                {
                    errorMsg && <div className="error">
                        this field is required
                    </div>
                }
            </div>
            <div className="bottomForm">
                <div className="expDate">
                    <label htmlFor="moYe">exp. date (mm/yy)</label>
                    <div className="expInps">
                        <input placeholder='MM' name='moYe' required type="number" onChange={e=> setMonth(e.target.value)}/>
                        {
                            errorMsg && <div className="error">
                                this field is required
                            </div>
                        }
                        <input placeholder='YY' name='moYe' required type="number" onChange={e=> setYear(e.target.value)}/>
                        {
                            errorMsg && <div className="error">
                                this field is required
                            </div>
                        }
                    </div>
                </div>
                <div className="cvv">
                    <label htmlFor="cvv">cvv</label>
                    <input placeholder='e.g 123' required id='cvv' type="number" onChange={e=> setCvv(e.target.value)}/>
                    {
                        errorMsg && <div className="error">
                            this field is required
                         </div>
                    }
                </div>
            </div>
            <input onClick={handleConfirm} className='btn' type="submit" value='confirm'/>
        </form>
        )}
    </div>
  )
}

export default Form;