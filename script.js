function toggleChat() {
  document.getElementById('chat-widget').classList.toggle('hidden');
}

function sendMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text) return;

  appendMessage('user', text);
  input.value = '';

  // Simulated bot response
  setTimeout(() => {
    appendMessage('bot', 'Thanks for your message! We will get back shortly.');
  }, 600);
}

function appendMessage(type, text) {
  const chatBody = document.getElementById('chat-body');
  const message = document.createElement('div');
  message.classList.add('message', type);
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Enter key handler
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});
