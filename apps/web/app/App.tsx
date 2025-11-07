import { useState } from "react";
import type { Quest } from "./types";
import AddQuestForm from "./components/AddQuestForm";

function App() {
  const [quests, setQuests] = useState<Quest[]>([]);

  const addQuest = (title: Quest["id"]) => {
    setQuests([
      ...quests,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
    console.log(quests);
  };

  return (
    <>
      <AddQuestForm addQuest={addQuest} />
    </>
  );
}

export default App;
