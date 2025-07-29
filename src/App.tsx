import { useState } from "react";
import { LItem } from "./types";
import Header from "./Header";
import List from "./List";
import Form from "./Form";
import Button from "./Button";

import "./styles/App.css";
import { useLocalStorage } from "./useLocalStorage";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const [listOfItems, setListOfItems] = useLocalStorage<LItem[]>([], "items");

  return (
    <div className="app">
      <Header />
      <List listOfItems={listOfItems} setListOfItems={setListOfItems} />
      {isFormOpen ? (
        <Form listOfItems={listOfItems} setListOfItems={setListOfItems} />
      ) : (
        ""
      )}
      <Button isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </div>
  );
}
