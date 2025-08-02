import { useState, Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Violation } from "./types";

import "./styles/Form.css";

const titleCharsNum = 50;
const descriptionCharsNum = 100;

type FormProps = {
  setViolations: Dispatch<SetStateAction<Violation[]>>;
};

export default function Form({ setViolations }: FormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleSaveViolation() {
    if (title.trim() !== "") {
      setViolations((violations: Violation[]) => [
        ...violations,
        {
          id: crypto.randomUUID(),
          title: title,
          description: description.trim() ? description : "",
        },
      ]);

      setTitle("");
      setDescription("");
    }
  }

  function handleChangeTitle(e: SyntheticEvent<HTMLInputElement>) {
    if (e.currentTarget.value.length <= titleCharsNum) {
      setTitle(e.currentTarget.value);
    }
  }

  function handleChangeDescription(e: SyntheticEvent<HTMLTextAreaElement>) {
    if (e.currentTarget.value.length <= descriptionCharsNum) {
      setDescription(e.currentTarget.value);
    }
  }

  return (
    <div className="form">
      <input
        className="form__title"
        type="text"
        id="form__title"
        placeholder="Tytuł"
        value={title}
        onChange={handleChangeTitle}
      />
      <label className="form__label" htmlFor="form__title">
        Pozostało {titleCharsNum - title.length} znaków
      </label>
      <textarea
        className="form__description"
        id="form__description"
        placeholder="Opis (opcjonalny)"
        value={description}
        onChange={handleChangeDescription}
      ></textarea>
      <label className="form__label" htmlFor="form__description">
        Pozostało {descriptionCharsNum - description.length} znaków
      </label>
      <button className="form__btn" onClick={handleSaveViolation}>
        Zapisz
      </button>
    </div>
  );
}

//added event types
