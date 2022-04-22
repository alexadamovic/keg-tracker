import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function KegDetail(props){
  const { keg, onClickingDelete } = props;

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
          <Card.Img variant="top" src="../img/keg.jpg" />
          <Card.Body>
            <Card.Title>{keg.name} - {keg.brand}</Card.Title>
            <Card.Text>
              <p>{keg.style} - <em>{keg.abv}% abv</em></p>
              <p><em>${keg.price}</em></p>
            </Card.Text>
          </Card.Body>
        </Card>
        <button onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
      </Col>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
}

export default KegDetail;