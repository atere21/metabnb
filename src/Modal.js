import React from 'react';
import metamask from "../src/img/metamask.png";
import wallet from "../src/img/wallet.png";
import arrow1 from "../src/img/connect-arrow.png";
import arrow2 from "../src/img/connect-arrow.png";
import './index.css'

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
         
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <div className='connect'>
            <h3>Connect Wallet</h3>
            <div className='choose'>
            <p>Choose your preferred wallet:</p>
            </div>
            </div>
            <div className='wallet'>
              <img src={metamask} alt='./' id='metamask-img'/>
              <img src={arrow1} alt='./' id='connect-arrow1'/>
            <button>Metamask</button>
            <img src={wallet} alt='./' id='wallet-img'/>
            <img src={arrow2} alt='./' id='connect-arrow2'/>
            <button>WalletConnect</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Modal;