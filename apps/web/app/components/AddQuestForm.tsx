import "../index.css";
import type { Quest } from "../types";
import { useState } from "react";

interface AddQuestFormProps {
  addQuest: (title: Quest["id"]) => void;
}

export default function AddQuestForm({ addQuest }: AddQuestFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!title.trim()) return;
    addQuest(title);
    setTitle("");
  };

  return (
    <form
      className="max-w-md min-w-xs w-1/3 text-center"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center h-12">
        <input
          className="input-primary h-full"
          name="title"
          id="quest-first"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="btn-primary h-full p-2 text-lg"
          name="submit"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
