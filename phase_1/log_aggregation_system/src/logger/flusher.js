const LOG_FILE = path.join(__dirname, '../logs/app.log');
const MAX_SIZE = 1024 * 1024 * 5; // 5MB

function flushLogs() {
  const stats = fs.existsSync(LOG_FILE) && fs.statSync(LOG_FILE);
  if (stats && stats.size >= MAX_SIZE) {
    const newName = LOG_FILE.replace('.log', `-${Date.now()}.log`);
    fs.renameSync(LOG_FILE, newName);
  }

  const logsToWrite = logBuffer.join('');
  fs.appendFileSync(LOG_FILE, logsToWrite);
  logBuffer.length = 0;
}
