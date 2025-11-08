import "../index.css";
import type { Quest } from "../types";
import QuestCard from "./QuestCard";

interface QuestListProps {
  quests: Quest[];
  toggleComplete: (id: Quest["id"]) => void;
  deleteQuest: (id: Quest["id"]) => void;
}

export default function QuestList({
  quests,
  toggleComplete,
  deleteQuest,
}: QuestListProps) {
  return (
    <ul className="flex flex-col gap-2 list-width">
      {quests.map((quest) => (
        <QuestCard
          key={quest.id}
          quest={quest}
          toggleComplete={toggleComplete}
          deleteQuest={deleteQuest}
        />
      ))}
    </ul>
  );
}
