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
      <input
        className="input-primary"
        name="title"
        id="quest-first"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn-primary p-1" name="submit" type="submit">
        Add
      </button>
    </form>
  );
}
