import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import full from "./../img/full.png";
import threeQuarters from "./../img/three-quarters.png";
import half from "./../img/half.png";
import oneQuarter from "./../img/one-quarter.png";
import empty from "./../img/empty.png";

function Keg(props){

  const kegCardStyles = {
    backgroundColor: '#dfebf5',
    width: '16rem',
    border: 'solid 1px',
    margin: '2%'
  }

  function howMuchLeft() {
    if (props.pintsLeft > 100) {
      return full;
    } else if (props.pintsLeft > 70) {
      return threeQuarters;
    } else if (props.pintsLeft > 40) {
      return half;
    } else if (props.pintsLeft > 10) {
      return oneQuarter;
    } else {
      return empty;
    }
  }
  
  const stock = () => {
    if (props.pintsLeft == 0) {
      return "***OUT OF STOCK***";
    } else if (props.pintsLeft <= 10) {
      return "***LOW STOCK***";
    } else {
      return "Pints Left: " + props.pintsLeft;
    }
  }

  return (
    <React.Fragment>
      <Col>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <Card style={kegCardStyles}>
            <Card.Img variant="top" src={howMuchLeft()} />
            <Card.Body>
              <Card.Title>{props.name} - {props.brand}</Card.Title>
              <Card.Text>
                <p>{props.style} - <em>{props.abv}% abv</em></p>
                <p><em>${props.price}</em></p>
                <h5>{stock()}</h5>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>  
      </Col>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  abv: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  whenKegClicked: PropTypes.func
};

export default Keg;