import { useState } from "react";
import type { Quest } from "./types";
import AddQuestForm from "./components/AddQuestForm";
import QuestCard from "./components/QuestCard";

function App() {
  const [quests, setQuests] = useState<Quest[]>([]);

  const addQuest = (title: Quest["id"]) => {
    setQuests([
      ...quests,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
    console.log(quests);
  };

  const toggleComplete = (id: Quest["id"]) => {
    setQuests(
      quests.map((quest) =>
        quest.id === id ? { ...quest, completed: !quest.completed } : quest
      )
    );
  };

  const deleteQuest = (id: Quest["id"]) => {
    setQuests(quests.filter((quest) => quest.id !== id));
  };

  return (
    <>
      <AddQuestForm addQuest={addQuest} />
      {quests.length > 0 && (
        <QuestCard
          key={quests.at(-1)!.id} // non-null assertion because length > 0
          quest={quests.at(-1)!} // same here
          toggleComplete={toggleComplete}
          deleteQuest={deleteQuest}
        />
      )}
    </>
  );
}

export default App;
