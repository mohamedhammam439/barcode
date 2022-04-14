import QRCode from "qrcode.react";
import { useState } from "react";

const QrCode = () => {
  const [qrcode, setQrcode] = useState(["1", "hqwhqgwhq", "poj321","12547","ali545e", "ed54we"]);

  return (
    <div className="App">
      <h3>QR code Generator</h3>
      <ul>
        {qrcode.map((ls) => (
          <li className="kk" key={ls}>
            <h2> {ls}</h2>
            <QRCode value={ls} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QrCode;
