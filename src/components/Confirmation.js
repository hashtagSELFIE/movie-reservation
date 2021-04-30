import React from 'react';
import {Button} from "react-bootstrap";
import Popup from 'reactjs-popup';
import '../confirmation.css';
import 'reactjs-popup/dist/index.css';


const Confirmation = () => (
  <Popup
    trigger={<Button className="button" style={{fontSize: '2em'}}> Pay with Credit card here 💳 </Button>}
    modal
    nested
  >
    {close => (
      <div className="modal" style={{fontSize: '10em', color: 'black'}}>
        <Button className="close" onClick={close}>
          &times;
        </Button>
        <div className="header"> Modal Title </div>
        <div className="content">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">

          <Button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            close modal
          </Button>
        </div>
      </div>
    )}
  </Popup>
);


export default Confirmation;
