import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./category.module.css";
import Nominee from "../nominee/Nominee";

const Category = ({ category }) => {
  return (
    <div className={classes.nominees_container}>
      <Container>
        <h3 className={classes.category_name}>
          Category {category.category_id}
        </h3>
        <Row>
          {category.nominess?.map((nominee) => (
            <Col lg={4} key={nominee.id}>
              <Nominee nominee={nominee} category={category} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Category;
