import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import classes from "./allSelectedNominess.module.css";

const AllSelectedNominess = () => {
  const { selectionNominees } = useSelector((state) => state.ballot);

  return (
    <Container>
      <Row>
        {selectionNominees?.map((nominee) => (
          <Col lg={6} key={nominee.name}>
            <div className={classes.selectedImg_container}>
              <h3>{nominee.name}</h3>
              <img src={nominee.img} alt="" />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllSelectedNominess;
