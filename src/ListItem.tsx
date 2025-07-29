import "./styles/ListItem.css";

export default function ListItem({ item, onRemoveListItem }: any) {
  return (
    <li className="list-item">
      <p className="title">{item.title}</p>
      <button className="delete-btn" onClick={() => onRemoveListItem(item.id)}>
        X
      </button>
    </li>
  );
}
