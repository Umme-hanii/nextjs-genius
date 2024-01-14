"use client";

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong");
        return;
      }
      setMessages([...messages, data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = { role: "user", content: text };
    setMessages([...messages, query]);
    mutate(query);
  };

  return (
    <main className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <section>
        <h2 className="text-5xl">messages</h2>
      </section>
      <form onSubmit={(e) => handleSubmit(e)} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            className="input input-bordered join-item w-full"
            placeholder="Type Message"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            type="submit"
            className="btn join-item bg-secondary text-white"
          >
            Ask Question
          </button>
        </div>
      </form>
    </main>
  );
};
export default Chat;
