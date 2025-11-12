import { useState } from "react";
import type { Quest } from "./types";
import AddQuestForm from "./components/AddQuestForm";
import QuestList from "./components/QuestList";

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
        quest.id === id ? { ...quest, completed: !quest.completed } : quest,
      ),
    );
  };

  const deleteQuest = (id: Quest["id"]) => {
    setQuests(quests.filter((quest) => quest.id !== id));
  };

  return (
    <main className="mt-20 flex flex-col gap-4 min-h-screen items-center">
      <h1 className="font-bold text-4xl block">Quest Board</h1>

      <div className="flex flex-col items-center list-width">
        <div className="divider-primary"></div>
        <AddQuestForm addQuest={addQuest} />
        <div className="divider-primary"></div>
      </div>

      <QuestList
        quests={quests}
        toggleComplete={toggleComplete}
        deleteQuest={deleteQuest}
      />
    </main>
  );
}

export default App;
