import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Violation } from "./types";
import Header from "./Header";
import ViolationList from "./ViolationList";
import Form from "./Form";
import Button from "./Button";

import "./styles/App.css";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);
  const { value: violations, setValue: setViolations } = useLocalStorage<
    Violation[]
  >([], "violations");

  return (
    <div className="app">
      <Header />
      <ViolationList violations={violations} setViolations={setViolations} />
      {isFormOpen ? <Form setViolations={setViolations} /> : ""}
      <Button isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
    </div>
  );
}
