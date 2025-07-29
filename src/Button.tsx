import "./styles/Button.css";

export default function Button({ isFormOpen, setIsFormOpen }: any) {
  function handleToggleForm() {
    setIsFormOpen((isOpen: boolean) => !isOpen);
  }

  // if the form is open then rotate the button (add the css class .clicked)

  return (
    <button
      className={isFormOpen ? "button clicked" : "button"}
      onClick={handleToggleForm}
    ></button>
  );
}
