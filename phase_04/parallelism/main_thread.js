// main.js
const WorkerPool = require("./thread_pool");

const pool = new WorkerPool("./worker_thread.js", 4);

pool.on("task:submitted", (id) => {
  console.log("Task submitted:", id);
});

pool.on("task:completed", ({ taskId }) => {
  console.log("Task completed:", taskId);
});

(async () => {
  console.log("Submitting tasks...");

  const tasks = [
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7),
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7),
   
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7),
   
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7),
  
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7),
   
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7),
   
    pool.submit(1e9),
    pool.submit(42e7),
    pool.submit(3e7)
   
  ];

  const results = await Promise.all(tasks);
  console.log("Results:", results);
})();
