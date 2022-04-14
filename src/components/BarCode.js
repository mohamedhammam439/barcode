import { useState } from "react";
import Barcode from "react-barcode";
import { Table } from "react-bootstrap";

const BarCode = () => {
  const [barcode, setBarcode] = useState([]);
  var start = 0;
  var end = 10;
  while (start < end + 1) {
    barcode.push(
      405 +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 10) +
        start++
    );
  }
  return (
    <Table className="table">
      <thead>
        <tr>
          <th className="center">BarNumber</th>
          <th className="center">Barcode</th>
        </tr>
      </thead>
      <tbody>
        {barcode.map((ls) => (
          <tr className="kk" key={ls}>
            <td className="center"> {ls}</td>
            <td className="center">
              <Barcode value={ls} displayValue={false} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BarCode;
