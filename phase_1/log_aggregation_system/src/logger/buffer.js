const logBuffer = [];
const BUFFER_LIMIT = 10; // flush every 10 logs

function flushLogs() {
  if (!logBuffer.length) return;
  const logsToWrite = logBuffer.join('');
  fs.appendFile(path.join(__dirname, '../logs/app.log'), logsToWrite, err => {
    if (err) console.error('Flush error:', err);
  });
  logBuffer.length = 0; // clear buffer
}

// Custom logger
function logInfo(msg) {
  logBuffer.push(new Date().toISOString() + ' [INFO] ' + msg + '\n');
  if (logBuffer.length >= BUFFER_LIMIT) flushLogs();
}

// Test
logInfo("Buffered log 1");
logInfo("Buffered log 2");
