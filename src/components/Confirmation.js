import React from 'react';
import {Button} from "react-bootstrap";
import '../confirmation.css';
import 'reactjs-popup/dist/index.css';


const Confirmation = () => {
  return (
    <div>
      <Button type="button" className="button" href="/">
        Pay with Credit card here 💳
      </Button>
    </div>
  );
}


export default Confirmation;
