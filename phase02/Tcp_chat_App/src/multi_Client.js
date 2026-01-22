const net = require('net');

const PORT = 4000;

// Store all connected clients
const clients = new Set();

const server = net.createServer((socket) => {
  console.log('Client connected');
  clients.add(socket);

  // Notify others
  broadcast(`A client joined. Total clients: ${clients.size}\n`, socket);

  socket.on('data', (chunk) => {
    const message = chunk.toString().trim();
    console.log('Received:', message);

    broadcast(`Client says: ${message}\n`, socket);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
    clients.delete(socket);
    broadcast(`A client left. Total clients: ${clients.size}\n`);
  });

  socket.on('error', (err) => {
    console.error('Socket error:', err.message);
    clients.delete(socket);
  });
});

function broadcast(message, senderSocket = null) {
  for (const client of clients) {
    if (client !== senderSocket) {
      client.write(message);
    }
  }
}

server.listen(PORT, () => {
  console.log(`TCP chat server running on port ${PORT}`);
});
