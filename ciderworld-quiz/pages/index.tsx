import { useState } from "react";
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

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const next = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % quizData.length);
  };

  return (
    <div style={{
      padding: "2rem", minHeight: "100vh", background: "linear-gradient(to bottom right, #f7fee7, #fef9c3)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
    }}>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ fontSize: "1.75rem", fontWeight: "bold", textAlign: "center", marginBottom: "1rem" }}
      >
        🍏 Cider World Quiz 🍎
      </motion.div>

      <div style={{
        width: "100%", maxWidth: "600px", background: "white", borderRadius: "1rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: "1.5rem"
      }}>
        <div style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "1rem" }}>
          {quizData[current].question}
        </div>
        <ul style={{ listStyle: "none", padding: 0, marginBottom: "1rem" }}>
          {quizData[current].options.map((opt, i) => (
            <li key={i} style={{
              padding: "0.5rem 1rem", borderRadius: "0.75rem", background: "#fff", border: "1px solid #ccc",
              marginBottom: "0.5rem", cursor: "pointer"
            }}>
              {opt}
            </li>
          ))}
        </ul>
        {showAnswer ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: "#15803d", fontWeight: "bold", textAlign: "center" }}
          >
            ✅ Richtige Antwort: {quizData[current].answer}
          </motion.div>
        ) : (
          <button style={{
            backgroundColor: "#fde047", borderRadius: "0.75rem", padding: "0.5rem 1rem", fontWeight: "600", width: "100%"
          }} onClick={() => setShowAnswer(true)}>Antwort zeigen</button>
        )}
      </div>

      <button style={{ marginTop: "1rem", textDecoration: "underline", fontSize: "0.875rem" }} onClick={next}>
        Nächste Frage ➡️
      </button>
    </div>
  );
}
