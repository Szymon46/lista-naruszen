import ListItem from "./ListItem";

import "./styles/List.css";
import { LItem } from "./types";

export default function List({ listOfItems, setListOfItems }: any) {
  function handleRemoveListItem(id: String) {
    setListOfItems((listOfItems: LItem[]) =>
      listOfItems.filter((item) => item.id !== id)
    );
  }

  return (
    <ul className="list">
      {listOfItems.map((i: LItem) => (
        <ListItem key={i.id} item={i} onRemoveListItem={handleRemoveListItem} />
      ))}
    </ul>
  );
}
