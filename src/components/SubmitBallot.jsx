import React from "react";
import Button from "./common/Button";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../slices/ballotSlice";

const SubmitBallot = () => {
  const { selectionNominees } = useSelector((state) => state.ballot);

  const dispatch = useDispatch();

  return (
    <Button
      type="submit"
      onClick={() => dispatch(openModal())}
      disabled={selectionNominees.length === 0}
    >
      Submit Ballot
    </Button>
  );
};

export default SubmitBallot;
