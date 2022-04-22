import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row';

function KegList(props){
  return (
    <React.Fragment>
      <Row>
        {props.kegList.map((keg) =>
            <Keg 
              whenKegClicked={props.onKegSelection}
              name={keg.name}
              brand={keg.brand}
              style={keg.style}
              price={keg.price}
              abv={keg.abv}
              pintsLeft={keg.pintsLeft}
              id={keg.id}
              key={keg.id}/>
        )}
      </Row>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;