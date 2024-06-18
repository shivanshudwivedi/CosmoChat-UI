import { createContext, useState, useEffect } from "react";
import run from "../backend/server";

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompts, setPreviousPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    useEffect(() => {
        // Retrieve previous prompts from localStorage if they exist
        const storedPrompts = JSON.parse(localStorage.getItem('previousPrompts')) || [];
        setPreviousPrompts(storedPrompts);
    }, []);

    useEffect(() => {
        // Store previous prompts in localStorage
        localStorage.setItem('previousPrompts', JSON.stringify(previousPrompts));
    }, [previousPrompts]);

    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord);
        }, 75 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResult(false);
        setResultData("");
        setInput("");
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        let currentPrompt = prompt || input;

        // Update recentPrompt and add to previousPrompts if not already present
        if (currentPrompt) {
            setRecentPrompt(currentPrompt);
            if (!previousPrompts.includes(currentPrompt)) {
                setPreviousPrompts(prev => [...prev, currentPrompt]);
            }
        }

        response = await run(currentPrompt);

        if (response) {
            const responseParts = response.split("**");
            let formattedResponse = "";
            for (let i = 0; i < responseParts.length; i++) {
                if (i % 2 === 0) {
                    formattedResponse += responseParts[i];
                } else {
                    formattedResponse += `<b>${responseParts[i]}</b>`;
                }
            }

            let formattedResponse2 = formattedResponse.replace(/\*+/g, "<br/>");
            const words = formattedResponse2.split(" ");
            words.forEach((word, index) => {
                delayPara(index, word + " ");
            });
        } else {
            console.error("No response from API or response is undefined.");
        }

        setLoading(false);
        setInput("");
    };

    const contextValue = {
        previousPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        input,
        setInput,
        showResult,
        loading,
        resultData,
        recentPrompt,
        newChat
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
