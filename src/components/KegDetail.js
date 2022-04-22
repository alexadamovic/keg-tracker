import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import full from "./../img/full.png";
import threeQuarters from "./../img/three-quarters.png";
import half from "./../img/half.png";
import oneQuarter from "./../img/one-quarter.png";
import empty from "./../img/empty.png";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingPourPint } = props;
  console.log(keg);

  const kegCardStyles = {
    backgroundColor: '#dfebf5',
    width: '16rem',
    border: 'solid 1px',
    margin: '2%'
  }

  function howMuchLeft() {
    if (keg.pintsLeft > 100) {
      return full;
    } else if (keg.pintsLeft > 70) {
      return threeQuarters;
    } else if (keg.pintsLeft > 40) {
      return half;
    } else if (keg.pintsLeft > 10) {
      return oneQuarter;
    } else {
      return empty;
    }
  }

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <Col>
        <Card style={kegCardStyles}>
          <Card.Img variant="top" src={howMuchLeft()} />
          <Card.Body>
            <Card.Title>{keg.name} - {keg.brand}</Card.Title>
            <Card.Text>
              <p>{keg.style} - <em>{keg.abv}% abv</em></p>
              <p><em>${keg.price}</em></p>
              <h5>Pints Left: {keg.pintsLeft}</h5>
            </Card.Text>
          </Card.Body>
        </Card>
        <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
        <button onClick={() => onClickingPourPint(takeAPint(keg))}>Pour Pint</button>
      </Col>
    </React.Fragment>
  );

  function takeAPint(keg) {
    if (keg.pintsLeft > 0) {
      return ({name: keg.name, brand: keg.brand, style: keg.style, price: keg.price, abv: keg.abv, pintsLeft: keg.pintsLeft - 1, id: keg.id});
    } else {
      return (keg);
    }
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPourPint: PropTypes.func
}

export default KegDetail;