import { useMutation, useQuery } from "@tanstack/react-query";
import { orpc } from "./rpc";
import AddQuestForm from "./components/AddQuestForm";
import QuestList from "./components/QuestList";
import type {
  QuestCreateInput,
  QuestCompleteInput,
  QuestDeleteInput,
} from "./types";

function App() {
  const { data: quests = [], refetch } = useQuery(
    orpc.quest.list.queryOptions(),
  );
  const addQuestMutation = useMutation(
    orpc.quest.create.mutationOptions({
      onSuccess: () => {
        refetch();
      },
    }),
  );
  const toggleCompleteMutation = useMutation(
    orpc.quest.toggle.mutationOptions({
      onSuccess: () => {
        refetch();
      },
    }),
  );
  const deleteQuestMutation = useMutation(
    orpc.quest.delete.mutationOptions({
      onSuccess: () => {
        refetch();
      },
    }),
  );

  const addQuest = (title: QuestCreateInput) => addQuestMutation.mutate(title);
  const toggleComplete = (id: QuestCompleteInput) =>
    toggleCompleteMutation.mutate(id);
  const deleteQuest = (id: QuestDeleteInput) => deleteQuestMutation.mutate(id);

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
