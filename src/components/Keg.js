import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import kegImage from "./../img/keg.jpg";

function Keg(props){

  const kegCardStyles = {
    backgroundColor: '#dfebf5',
    width: '18rem',
    border: 'solid 1px'
  }

  return (
    <React.Fragment>
      <Col>
        <div onClick = {() => props.whenKegClicked(props.id)}>
          <Card style={kegCardStyles}>
            <Card.Img variant="top" src={kegImage} />
            <Card.Body>
              <Card.Title>{props.name} - {props.brand}</Card.Title>
              <Card.Text>
                <p>{props.style} - <em>{props.abv}% abv</em></p>
                <p><em>${props.price}</em></p>
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
  whenKegClicked: PropTypes.func
};

export default Keg;