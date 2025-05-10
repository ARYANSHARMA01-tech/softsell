import { useState } from "react";

export default function ChatWidget() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [isOpen, setIsOpen] = useState(false);  // State to control the side panel visibility

  // Hardcoded example questions
  const exampleQuestions = [
    "How do I sell my license?",
    "How do I track my order?",
    "what are your payment methods?",
    "what is the return policy?",
    "how can i contact support?",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("Thinking...");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await res.json();
    setResponse(data.reply || "No reply");
  };

  const toggleChatPanel = () => {
    setIsOpen(!isOpen);
  };

  const handleExampleClick = (example) => {
    setMessage(example);  // Set the message to the selected example question
  };

  return (
    <>
      {/* Button to toggle the side panel */}
      <button
        onClick={toggleChatPanel}
        className="fixed bottom-4 right-4 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800"
      >
        {isOpen ? "Close Chat" : "Open Chat"}
      </button>

      {/* Side Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Close Button Inside the Side Panel */}
        <button
          onClick={toggleChatPanel}
          className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
        >
          X
        </button>

        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">AI Assistant</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full border p-2 mb-2 rounded"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Send
            </button>
          </form>
          
          {/* Example Questions Section */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Choose from these example questions:</h4>
            <ul className="space-y-2">
              {exampleQuestions.map((example, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-blue-500 hover:underline"
                  onClick={() => handleExampleClick(example)} // Set the input field to the selected example
                >
                  {example}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Display Response */}
          {response && (
            <div className="mt-4 p-2 border rounded bg-gray-50">{response}</div>
          )}
        </div>
      </div>
    </>
  );
}
