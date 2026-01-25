// worker.js
const { parentPort } = require("worker_threads");

function heavyTask(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) sum += i;
  return sum;
}

parentPort.on("message", ({ taskId, data }) => {
  const result = heavyTask(data);
  parentPort.postMessage({ taskId, result });
});
