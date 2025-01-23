const { default: test } = require("node:test");

const messageDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const SendButton = document.getElementById("sendButoon");

async function loadMessages () {
    try {
        const respons = await fetch("https://cloud24chat.azurewebsites.net/api/messages");
        const messages = await respons.json();

        messageDiv.innerHTML = "";

        messages.forEach((msg) => {
            const messageElement = document.createElement("div");
            messageElement.textContent = `${msg.text}`;

            messageDiv.appendChild(messageElement);
        });

    }
    catch (error) {
        console.log(error.message);
    }
}

async function sendMessage() {
    const text = messageInput.ariaValueMax.trim();
    
    if(!text)
    {
        alert("please enter a vaild message");
        return;
    }

    try {
        await fetch("https://cloud24chat.azurewebsites.net/api/message", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({text})
        });

        messageInput.value ="";
        loadMessages()
    }
    catch (error) {
        
    }
}

SendButton.addEventListener("click", sendMessage)
loadMessages();