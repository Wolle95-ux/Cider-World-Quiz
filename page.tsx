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
  },
  {
    question: "Was passiert beim sogenannten \"Keeving\"-Verfahren?",
    options: [
      "Es wird zusätzlicher Zucker zugesetzt.",
      "Es wird ein Gel aus Pektin entfernt, um Gärung zu verlangsamen.",
      "Die Äpfel werden karamellisiert.",
      "Es wird Hopfen zur Gärung gegeben."
    ],
    answer: "Es wird ein Gel aus Pektin entfernt, um Gärung zu verlangsamen."
  },
  {
    question: "Welche Institution ist an der Bewertung der Produkte für die Cider World Awards beteiligt?",
    options: [
      "Universität Frankfurt",
      "Hochschule Geisenheim",
      "Technische Universität München",
      "Universität Wien"
    ],
    answer: "Hochschule Geisenheim"
  },
  {
    question: "Cider World Frankfurt wurde früher unter dem Namen 'Apfelwein Weltweit' veranstaltet.",
    options: ["Wahr", "Falsch"],
    answer: "Wahr"
  },
  {
    question: "Welcher dieser Begriffe stammt aus der traditionellen englischen Cider-Herstellung?",
    options: ["Racking", "Degorgieren", "Klarieren", "Maischen"],
    answer: "Racking"
  },
  {
    question: "Wie viele Aussteller werden 2025 auf der Cider World erwartet?",
    options: ["Über 50", "Über 70", "Über 90", "Über 110"],
    answer: "Über 90"
  },
  {
    question: "Welches Land ist 2025 Ehrengast der Cider World?",
    options: ["Spanien", "Frankreich", "Österreich (Steiermark)", "England"],
    answer: "Österreich (Steiermark)"
  },
  {
    question: "Welche dieser Regionen ist bekannt für ihre traditionelle Cider-Produktion und ist auf der Cider World vertreten?",
    options: ["Asturien (Spanien)", "Toskana (Italien)", "Alberta (Kanada)", "Provence (Frankreich)"],
    answer: "Asturien (Spanien)"
  },
  {
    question: "Welche dieser Cider-Stile werden bei der Cider World typischerweise NICHT vorgestellt?",
    options: ["Pét-Nat Cider", "Hopfen-Cider", "Ice Cider", "Apple Mead (Met)"],
    answer: "Apple Mead (Met)"
  },
  {
    question: "Besucher:innen können auf der Messe Cider direkt kaufen.",
    options: ["Wahr", "Falsch"],
    answer: "Wahr"
  }
];

export default function CiderQuizApp() {
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
            <button className="w-full bg-yellow-200 px-4 py-2 rounded-xl font-semibold" onClick={() => setShowAnswer(true)}>Antwort zeigen</button>
          )}
        </CardContent>
      </Card>

      <button className="mt-4 text-sm underline" onClick={next}>
        Nächste Frage ➡️
      </button>
    </div>
  );
}
