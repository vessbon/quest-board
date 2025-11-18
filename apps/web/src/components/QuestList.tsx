import type {
  QuestListOutput,
  QuestCompleteInput,
  QuestDeleteInput,
} from "../types";
import QuestCard from "./QuestCard";
import EmptyCard from "./EmptyCard";

interface QuestListProps {
  quests: QuestListOutput;
  toggleComplete: (id: QuestCompleteInput) => void;
  deleteQuest: (id: QuestDeleteInput) => void;
}

export default function QuestList({
  quests,
  toggleComplete,
  deleteQuest,
}: QuestListProps) {
  const sortedTasks = [...quests].sort((a, b) => {
    return (b.completed ? 1 : 0) - (a.completed ? 1 : 0);
  });

  return (
    <ul className="flex flex-col gap-2 list-width">
      {sortedTasks.length > 0 ? (
        sortedTasks.map((quest) => (
          <QuestCard
            key={quest.id}
            quest={quest}
            toggleComplete={toggleComplete}
            deleteQuest={deleteQuest}
          />
        ))
      ) : (
        <EmptyCard />
      )}
    </ul>
  );
}
