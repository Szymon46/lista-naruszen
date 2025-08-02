import { Dispatch, SetStateAction } from "react";
import { Violation } from "./types";
import ViolationListItem from "./ViolationListItem";

import "./styles/ViolationList.css";

type ViolationListProps = {
  violations: Violation[];
  setViolations: Dispatch<SetStateAction<Violation[]>>;
};

export default function ViolationList({
  violations,
  setViolations,
}: ViolationListProps) {
  function handleRemoveViolation(id: String) {
    setViolations((violations: Violation[]) =>
      violations.filter((violation) => violation.id !== id)
    );
  }

  return (
    <ul className="violation-list">
      {[...violations].reverse().map((violation: Violation) => (
        <ViolationListItem
          key={violation.id}
          violation={violation}
          onRemoveViolation={handleRemoveViolation}
        />
      ))}
    </ul>
  );
}
