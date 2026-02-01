const ws = new WebSocket("ws://localhost:8080"); // Replace with public server if online
const logDiv = document.getElementById("log");
const distanceSpan = document.getElementById("distance");

// On receiving messages
ws.onmessage = e => {
  // Expect JSON like { type: "distance", value: 123 }
  try {
    const msg = JSON.parse(e.data);

    if (msg.type === "distance") {
      distanceSpan.textContent = msg.value;
    }
  } catch (err) {
    console.error("Invalid message:", e.data);
  }
};

// Send a test signal to server
function sendSignal() {
  const msg = JSON.stringify({ type: "signal", from: 2 });
  ws.send(msg);
}
