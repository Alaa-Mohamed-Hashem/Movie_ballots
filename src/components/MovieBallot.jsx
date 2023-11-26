import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBallot } from "../slices/ballotSlice";
import Category from "./category/Category";
import { Alert, Spinner } from "react-bootstrap";
import SubmitBallot from "./SubmitBallot";

const MovieBallot = () => {
  const dispatch = useDispatch();
  const { categories, isLoading, error } = useSelector((state) => state.ballot);

  useEffect(() => {
    dispatch(fetchBallot());
  }, [dispatch]);

  if (isLoading) return <Spinner animation="border" />;

  if (!categories || categories.length === 0) <p>There is no categories</p>;

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <>
      {categories.map((category) => (
        <Category key={category.category_id} category={category} />
      ))}
      <SubmitBallot />
    </>
  );
};

export default MovieBallot;
