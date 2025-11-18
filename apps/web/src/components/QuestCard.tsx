import { useState } from "react";
import type {
  QuestCompleteInput,
  QuestDeleteInput,
  QuestOutput,
} from "../types";

interface QuestCardProps {
  quest: QuestOutput;
  toggleComplete: (id: QuestCompleteInput) => void;
  deleteQuest: (id: QuestDeleteInput) => void;
}

export default function QuestCard({
  quest,
  toggleComplete,
  deleteQuest,
}: QuestCardProps) {
  if (!quest) return;
  const [checked, setChecked] = useState<boolean>(quest.completed ?? false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleComplete(quest.id);
  };

  return (
    <div
      className={
        (checked ? "border-success " : "border-base-300 ") + "card-primary"
      }
    >
      <h2 className="text-2xl mb-2">{quest.title}</h2>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <input
            className="cursor-pointer mr-2 w-5 h-5 accent-success"
            name="completed"
            id={quest.id}
            type="checkbox"
            checked={checked ?? false}
            onChange={handleChange}
          />
          <label className="text-lg" htmlFor={quest.id}>
            Completed
          </label>
        </div>
        <button
          className="btn-primary py-1 px-2"
          onClick={() => deleteQuest(quest.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
