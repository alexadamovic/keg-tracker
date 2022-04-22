import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import kegImage from "./../img/keg.jpg";

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingPourPint } = props;

  const kegCardStyles = {
    backgroundColor: '#dfebf5',
    width: '18rem',
    border: 'solid 1px'
  }

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <Col>
        <Card style={kegCardStyles}>
          <Card.Img variant="top" src={kegImage} />
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
    return ({name: "Test", brand: keg.brand.value, style: keg.style.value, price: keg.price.value, abv: keg.abv.value, pintsLeft: keg.pintsLeft.value - 1, id: keg.id.value})
  }
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingPourPint: PropTypes.func
}

export default KegDetail;