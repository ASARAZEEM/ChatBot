const socket = io();

socket.on('message', (message) => {
    appendMessage(message);
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('message', message);
        appendMessage(message);
        messageInput.value = '';
    }
}

function appendMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}
