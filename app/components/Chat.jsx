"use client";

import { generateChatResponse } from "@/utils/actions";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";

const Chat = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isError, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        toast.error("Something went wrong");
        return;
      }
      setMessages([...messages, data]);
      console.log(messages);
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
        {messages.map(({ role, content }, index) => {
          const bgColor = role == "user" ? "bg-base-300" : "bg-base-100";
          const avatar = role == "user" ? "🦹‍♀️" : "🤖";
          return (
            <div
              className={`${bgColor} m-4 p-4 flex text-xl md:max-w-4xl leading-loose rounded-t-lg`}
              key={index}
            >
              <span className="mr-4">{avatar}</span>
              <p className="max-w-3xl           ">{content}</p>
            </div>
          );
        })}
        {isPending && <span className="loading"></span>}
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
            disabled={isPending}
          >
            Ask Question
          </button>
        </div>
      </form>
    </main>
  );
};
export default Chat;
