import React from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/ballotSlice";
import CloseButton from "./CloseButton";
import { Modal } from "react-bootstrap";

import classes from "./results.module.css";

const ResultsModal = ({ children }) => {
  const { isModalOpen } = useSelector((state) => state.ballot);
  const dispatch = useDispatch();

  return createPortal(
    <Modal show={isModalOpen} onHide={() => dispatch(closeModal())}>
      <div className={classes.result_modal}>
        {children}
        <CloseButton onClick={() => dispatch(closeModal())}>
          Close Modal
        </CloseButton>
      </div>
    </Modal>,
    document.getElementById("modal")
  );
};

export default ResultsModal;
