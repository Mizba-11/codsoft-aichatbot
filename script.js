const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    addMessage(message, "user");

    userInput.value = "";

    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.id = "typing";

    typing.innerHTML = `
        <div class="avatar">🤖</div>
        <div class="message">
            <i>Typing...</i>
        </div>
    `;

    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    try {

        const response = await fetch("/chat", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        const data = await response.json();

        document.getElementById("typing").remove();

        addMessage(data.reply, "bot");

    } catch (error) {

        document.getElementById("typing").remove();

        addMessage("⚠ Server Error. Please try again.", "bot");

    }

}

function addMessage(text, sender) {

    const wrapper = document.createElement("div");

    wrapper.className =
        sender === "user"
            ? "user-message"
            : "bot-message";

    const avatar =
        sender === "user"
            ? "😊"
            : "🤖";

    wrapper.innerHTML = `

        <div class="avatar">
            ${avatar}
        </div>

        <div class="message">

            ${text}

            <br><br>

            <small>${getTime()}</small>

        </div>

    `;

    chatBox.appendChild(wrapper);

    chatBox.scrollTop = chatBox.scrollHeight;

}

function getTime() {

    const now = new Date();

    return now.toLocaleTimeString([], {

        hour: "2-digit",

        minute: "2-digit"

    });

}