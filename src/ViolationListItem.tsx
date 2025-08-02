import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Violation } from "./types";

import "./styles/ViolationListItem.css";

type ViolationListItemProps = {
  violation: Violation;
  onRemoveViolation: (id: string) => void;
};

export default function ViolationListItem({
  violation,
  onRemoveViolation,
}: ViolationListItemProps) {
  const { title, description, id } = violation;

  return (
    <li
      className={
        description
          ? "violation-li violation-li--with-description"
          : "violation-li"
      }
    >
      <p
        className={
          title.length >= 35
            ? "violation-li__title violation-li__title--long"
            : "violation-li__title"
        }
      >
        {title}
      </p>
      <button
        className="violation-li__delete-btn"
        onClick={() => onRemoveViolation(id)}
      >
        <FontAwesomeIcon
          className="violation-li__delete-btn-icon"
          icon={faPlus}
        />
      </button>
      {description ? (
        <div className="violation-li__description">
          <hr className="violation-li__underline" />{" "}
          <p className="violation-li__description-text">{description}</p>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}
