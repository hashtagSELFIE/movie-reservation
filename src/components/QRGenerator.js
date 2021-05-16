import React from "react";
import QRCode from "qrcode.react";

const QRGenerator = () => {

  return (
    <div>
      <h1>QR Code payment</h1>
      <h4>Scan and pay with your preferred apps</h4>
      <QRCode value={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'} size='300'/>
    </div>
)

}

export default QRGenerator
