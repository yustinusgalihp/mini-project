import React, { useState, useEffect } from "react";
import OpenAI from "openai";
import clsx from "clsx";

import Navbar from "@/components/navbar";
import Button from "@/components/button";
import PuffLoader from "react-spinners/PuffLoader";
import { useTitle } from "@/utils/hook/hooks";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEYS,
  dangerouslyAllowBrowser: true,
});

export default function PageOpenAi() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useTitle("Q&A");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: "user",
            content:
              "Kamu adalah seorang konsultan kopi yang handal. Dengan pengetahuan mendalam tentang dunia kopi, kamu siap memberikan saran dan panduan terbaik dalam hal kopi, mulai dari pemilihan biji hingga teknik penyeduhan yang sempurna. Jika kamu memiliki pertanyaan atau butuh bantuan terkait kopi, jangan ragu untuk menghubungi saya. Saya bersemangat untuk berbagi pengetahuan dan pengalaman saya dalam industri kopi dengan kamu." +
              prompt,
          },
        ],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center w-full h-full my-96">
          <PuffLoader color="#36d7b7" size={100} />
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="py-16">
            <h1 className="text-2xl font-bold text-center py-6">Q&A</h1>
          </div>
          <div className="container">
            <div className="grow flex flex-col overflow-auto">
              {results.map((result) => (
                <p
                  className={clsx(
                    "border rounded-xl p-3 mb-4 w-fit",
                    result.message.role === "assistant"
                      ? "self-start"
                      : "self-end"
                  )}
                  key={result.message.content}
                >
                  {result.message.content}
                </p>
              ))}
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex items-center h-screen mx-auto"
            >
              <input
                className="border-2 rounded-md w-full p-4"
                placeholder="Insert prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
              <Button
                className="border-2 rounded-md p-4 bg-[#99B080]"
                label={isLoading ? "Loading" : "Submit"}
                type="submit"
                disabled={isLoading}
                aria-disabled={isLoading}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
