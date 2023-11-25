import React from "react";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { closeModal } from "../../slices/ballotSlice";

const CloseButton = () => {
  const dispatch = useDispatch();

  return (
    <Button type="close" onClick={() => dispatch(closeModal())}>
      Close
    </Button>
  );
};

export default CloseButton;
