import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function ChatPage() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState("");

    const RASA_API_URL = "http://localhost:5005/webhooks/rest/webhook"; // Rasa API URL
    const API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJkMDZlZTFlNC0yNThlLTRkNDQtOTE4MC1kNzAxMzJiNmQyNjAiLCJpYXQiOjE3NDEyNDE5NjcsIm5iZiI6MTc0MTI0MTk2Nywic2NvcGUiOiJyYXNhOnBybyByYXNhOnBybzpjaGFtcGlvbiByYXNhOnZvaWNlIiwiZXhwIjoxODM1OTM2MzY3LCJlbWFpbCI6ImRlbGVwZXk0MTNAYm5zdGVwcy5jb20iLCJjb21wYW55IjoiUmFzYSBDaGFtcGlvbnMifQ.jUT0fF7FVGLIk_eWAQNkkLyizBCEGUUEAVtdRgu8dXyRG3W8VyL2RDeBNDL5BfSrjzr4Qxfqo8nMNJIQ9-RQ8iPBidx8JTOjlbuLjb4ZaeJTEUQC811J5k3yBcKV2QV0nniO49LeS8mYI5FDyLsXdhZtAwDSty_t7Cgw3jzJW9SCSUE9QyrxJCCtgtJUvTeiRQr6pJD5wbLC_ib1xo0r854KsLOLQbMIyuP-CUH3YDvzWa-GAU9KSiBbmzQeyKLfQU8RtJd8JdKyjVZat4V7kfUpsPfFxffSErgipPwm5taPf3ZzLV4ZcprUALfe8nTSufg2rZjmt84L8-fwXuqY2g"; // Replace with your token

    const sendMessage = async () => {
        if (inputMessage.trim() === "") return;

        // Add user's message to chat
        setMessages([...messages, { role: "user", content: inputMessage }]);
        setInputMessage("");

        try {
            const response = await axios.post(
                RASA_API_URL, // Rasa API URL
                {
                    message: inputMessage, // Send user message
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${API_TOKEN}`, // Authorization header with token
                    },
                }
            );

            // Check if Rasa's response contains a message and handle accordingly
            if (response.data && response.data.length > 0) {
                setMessages([
                    ...messages,
                    { role: "user", content: inputMessage },
                    { role: "assistant", content: response.data[0].text }, // Use the response message from Rasa
                ]);
            } else {
                setMessages([
                    ...messages,
                    { role: "user", content: inputMessage },
                    { role: "assistant", content: "Sorry, I didn't get that!" }, // Default response in case of empty response
                ]);
            }
        } catch (error) {
            console.error("Error sending message:", error.response ? error.response.data : error.message);
            setMessages([
                ...messages,
                { role: "user", content: inputMessage },
                { role: "assistant", content: "There was an error connecting to the server." }, // Error handling response
            ]);
        }
    };

    return (
        <div className="App bg-black d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="chat-container bg-white p-4 rounded shadow-lg w-100" style={{ maxWidth: "600px" }}>
                <h1 className="text-center mb-4">Chat with Rasa</h1>
                <div className="messages mb-4" style={{ maxHeight: "400px", overflowY: "auto" }}>
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message p-2 mb-3 rounded-3 ${msg.role === "user" ? "bg-success text-white ms-auto" : "bg-light"}`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>
                <div className="input-area d-flex">
                    <input
                        type="text"
                        className="form-control me-2"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        placeholder="Type a message..."
                    />
                    <button className="btn btn-primary" onClick={sendMessage}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
