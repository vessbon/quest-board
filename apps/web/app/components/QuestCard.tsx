import { useState } from "react";
import type { Quest } from "../types";

interface QuestCardProps {
  quest: Quest;
  toggleComplete: (id: Quest["id"]) => void;
  deleteQuest: (id: Quest["id"]) => void;
}

export default function QuestCard({
  quest,
  toggleComplete,
  deleteQuest,
}: QuestCardProps) {
  const [checked, setChecked] = useState<Quest["completed"]>(quest.completed);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    toggleComplete(quest.id);
  };

  return (
    <div>
      <h2>{quest.title}</h2>
      <label htmlFor={quest.id}>Completed</label>
      <input
        className=""
        name="completed"
        id={quest.id}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <button onClick={() => deleteQuest(quest.id)}>Delete</button>
    </div>
  );
}
