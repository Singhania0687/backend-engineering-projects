// pool.js
const { Worker } = require("worker_threads");
const EventEmitter = require("events");
const os = require("os");

class WorkerPool extends EventEmitter {
  constructor(workerFile, size = os.cpus().length) {
    super();
    this.workerFile = workerFile;
    this.size = size;

    this.workers = [];
    this.idleWorkers = [];
    this.taskQueue = [];
    this.taskId = 0;

    this._init();
  }

  _init() {
    for (let i = 0; i < this.size; i++) {
      const worker = new Worker(this.workerFile);

      worker.on("message", (msg) => {
        this.emit("task:completed", msg);
        this.idleWorkers.push(worker);
        this._processQueue();
      });

      worker.on("error", (err) => {
        this.emit("task:error", err);
      });

      this.workers.push(worker);
      this.idleWorkers.push(worker);
    }
  }

  submit(data) {
    return new Promise((resolve, reject) => {
      const task = {
        id: ++this.taskId,
        data,
        resolve,
        reject
      };

      this.taskQueue.push(task);
      this.emit("task:submitted", task.id);
      this._processQueue();
    });
  }

  _processQueue() {
    if (this.taskQueue.length === 0) return;
    if (this.idleWorkers.length === 0) return;

    const worker = this.idleWorkers.pop();
    const task = this.taskQueue.shift();

    worker.postMessage({
      taskId: task.id,
      data: task.data
    });

    worker.once("message", (msg) => {
      task.resolve(msg.result);
    });
  }
}

module.exports = WorkerPool;
