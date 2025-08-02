import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./styles/Button.css";
import { Dispatch, SetStateAction } from "react";

type ButtonProps = {
  isFormOpen: boolean;
  setIsFormOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Button({ isFormOpen, setIsFormOpen }: ButtonProps) {
  function handleToggleForm() {
    setIsFormOpen((isOpen: boolean) => !isOpen);
  }

  return (
    <button
      className={
        isFormOpen ? "form-open-btn form-open-btn--clicked" : "form-open-btn"
      }
      onClick={handleToggleForm}
    >
      <FontAwesomeIcon className="form-open-btn__icon" icon={faPlus} />
    </button>
  );
}
