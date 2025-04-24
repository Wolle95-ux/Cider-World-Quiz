
'use client';
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const quizData = [
  {
    question: "Cider und Apfelwein sind genau dasselbe.",
    options: ["Wahr", "Falsch"],
    answer: "Falsch"
  },
  {
    question: "Welche Apfelsorte wird häufig für traditionellen französischen Cidre verwendet?",
    options: ["Granny Smith", "Dabinett", "Bohnapfel", "Kermerrien"],
    answer: "Kermerrien"
  }
];

export default function Page() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const next = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % quizData.length);
  };

  return (
    <div className="p-6 flex flex-col items-center justify-center gap-6 min-h-screen bg-gradient-to-br from-lime-100 to-yellow-50">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center"
      >
        🍏 Cider World Quiz 🍎
      </motion.div>

      <Card className="w-full max-w-xl">
        <CardContent className="p-6">
          <div className="text-lg font-semibold mb-4">
            {quizData[current].question}
          </div>
          <ul className="space-y-2 mb-4">
            {quizData[current].options.map((opt, i) => (
              <li
                key={i}
                className="bg-white rounded-xl px-4 py-2 shadow border hover:bg-yellow-100"
              >
                {opt}
              </li>
            ))}
          </ul>
          {showAnswer ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-600 text-center text-lg font-bold"
            >
              ✅ Richtige Antwort: {quizData[current].answer}
            </motion.div>
          ) : (
            <Button className="w-full" onClick={() => setShowAnswer(true)}>Antwort zeigen</Button>
          )}
        </CardContent>
      </Card>

      <Button variant="secondary" onClick={next}>
        Nächste Frage ➡️
      </Button>
    </div>
  );
}
