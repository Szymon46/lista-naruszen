import { useState } from "react";
import { LItem } from "./types";

import "./styles/Form.css";
// TODO: change the any type to a proper interface

export default function Form({ setListOfItems }: any) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSaveListItem() {
    if (title !== "") {
      // TODO: give an alternative if crypto.randomUUID is not supported
      setListOfItems((t: LItem[]) => [
        ...t,
        {
          id: crypto.randomUUID(),
          title: title,
          description: description,
        },
      ]);

      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className="form">
      <input
        className="form-title"
        type="text"
        placeholder="Tytuł"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="form-description"
        placeholder="Opis"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button className="form-btn" onClick={handleSaveListItem}>
        Zapisz
      </button>
    </div>
  );
}
