"use client";

import { useState } from "react";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
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
