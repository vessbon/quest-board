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
      <label className="font-bold mb-4 text-4xl block" htmlFor="quest-first">
        Quest
      </label>
      <input
        className="border p-2 w-full text-center text-lg outline-none mb-2"
        name="title"
        id="quest-first"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button className="btn-primary p-1 w-full" name="submit" type="submit">
        Add
      </button>
    </form>
  );
}
