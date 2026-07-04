const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {

    const message = req.body.message.toLowerCase().trim();

    let reply = "";

    if (message.includes("hello") || message.includes("hi")) {

        reply = "👋 Hello! Welcome to Cortex AI Chatbot. How can I help you today?";

    } else if (message.includes("how are you")) {

        reply = "😊 I'm doing great! Thanks for asking.";

    } else if (message.includes("your name")) {

        reply = "🤖 My name is Cortex AI. I am a Rule-Based Chatbot.";

    } else if (message.includes("bye")) {

        reply = "👋 Goodbye! Have a wonderful day.";

    } else if (message.includes("thank")) {

        reply = "💚 You're welcome! Happy to help.";

    } else if (message.includes("html")) {

        reply = "HTML (HyperText Markup Language) is used to create the structure of web pages.";

    } else if (message.includes("css")) {

        reply = "CSS (Cascading Style Sheets) is used to style and design web pages.";

    } else if (message.includes("javascript")) {

        reply = "JavaScript adds interactivity and dynamic behavior to websites.";

    } else if (message.includes("node")) {

        reply = "Node.js is a JavaScript runtime that allows JavaScript to run on the server.";

    } else if (message.includes("express")) {

        reply = "Express.js is a fast and lightweight framework for building web applications with Node.js.";

    } else if (message.includes("ai")) {

        reply = "Artificial Intelligence enables machines to learn, solve problems, and make decisions.";

    } else if (message.includes("chatbot")) {

        reply = "A chatbot is a program that interacts with users through text or voice conversations.";

    } else if (message.includes("internship")) {

        reply = "This chatbot project is suitable for an AI Internship Task 1 submission.";

    } else if (message.includes("project")) {

        reply = "This project uses HTML, CSS, JavaScript, Node.js, and Express.js to create a Rule-Based AI Chatbot.";

    } else if (message.includes("who made you")) {

        reply = "I was created using JavaScript, Node.js, Express.js, HTML, and CSS.";

    } else if (message.includes("help")) {

        reply = "You can ask me about HTML, CSS, JavaScript, Node.js, Express.js, AI, Chatbots, or Internship projects.";

    } else if (message.includes("time")) {

        reply = `🕒 Current Time: ${new Date().toLocaleTimeString()}`;

    } else if (message.includes("date")) {

        reply = `📅 Today's Date: ${new Date().toLocaleDateString()}`;

    } else if (message.includes("good morning")) {

        reply = "☀️ Good Morning! Hope you have a productive day.";

    } else if (message.includes("good night")) {

        reply = "🌙 Good Night! Sleep well and take care.";

    } else {

        reply = "🤔 Sorry, I don't understand that yet. Please ask about HTML, CSS, JavaScript, Node.js, Express.js, AI, Chatbots, or Internships.";

    }

    res.json({
        reply: reply
    });

});

module.exports = router;