import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNominee } from "../../slices/ballotSlice";
import Button from "../common/Button";

import classes from "./nominee.module.css";

const Nominee = ({ category, nominee }) => {
  const { selectionNominees } = useSelector((state) => state.ballot);

  const dispatch = useDispatch();

  const handleNomineeClick = () => {
    // Dispatch selectNominee action
    dispatch(
      selectNominee({
        categoryId: category.category_id,
        nomineeId: nominee.id,
        name: nominee.name,
        img: nominee.img,
      })
    );
  };

  const specificNominee = selectionNominees.find(
    (el) => el.categoryId === category.category_id
  );

  return (
    <div
      className={`${classes.nomineCard} ${
        specificNominee?.nomineeId === nominee.id && classes.selectedNominee
      }`}
    >
      <h3>{nominee.name}</h3>
      <img src={nominee.img} alt="img here" />
      <Button
        type="selectBtn"
        disabled={specificNominee?.nomineeId === nominee.id}
        onClick={handleNomineeClick}
      >
        Select Button
      </Button>
    </div>
  );
};

export default Nominee;
