import type { Quest } from "./types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { trpc } from "./trpc";
import AddQuestForm from "./components/AddQuestForm";
import QuestList from "./components/QuestList";

function App() {
  const { data: quests = [], refetch } = useQuery(
    trpc.quest.list.queryOptions()
  );
  const addQuestMutation = useMutation(
    trpc.quest.create.mutationOptions({
      onSuccess: () => {
        refetch();
      },
    })
  );
  const toggleCompleteMutation = useMutation(
    trpc.quest.toggle.mutationOptions({
      onSuccess: () => {
        refetch();
      },
    })
  );
  const deleteQuestMutation = useMutation(
    trpc.quest.delete.mutationOptions({
      onSuccess: () => {
        refetch();
      },
    })
  );

  const addQuest = (title: Quest["title"]) =>
    addQuestMutation.mutate({ title });
  const toggleComplete = (id: Quest["id"]) => toggleCompleteMutation.mutate(id);
  const deleteQuest = (id: Quest["id"]) => deleteQuestMutation.mutate(id);

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
