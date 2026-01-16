# Event Loop Visualizer 🟢

**A CLI-based Node.js tool to visualize the execution order of tasks in the Node.js Event Loop.**

---

## Table of Contents

* [Overview](#overview)
* [Features](#features)
* [Installation](#installation)
* [Usage](#usage)
* [Demo](#demo)
* [Learning Outcomes](#learning-outcomes)
* [Future Improvements](#future-improvements)

---

## Overview

The **Event Loop Visualizer** is a lightweight **command-line tool** that helps developers understand how Node.js handles asynchronous operations.
It visually demonstrates the execution order of **timers, microtasks, I/O callbacks, `process.nextTick`, and `setImmediate`**, giving a clear picture of Node’s Event Loop phases.

This project is perfect for backend engineers, interview preparation, and anyone who wants to master Node.js internals.

---

## Features

* CLI interface to select tasks
* Supports:

  * `setTimeout` (Timers)
  * `setImmediate` (Check Phase)
  * `process.nextTick` (Next Tick Queue)
  * `Promise.then` (Microtasks)
  * I/O callbacks (`fs.readFile`)
* ASCII timeline visualization of task execution
* Modular, clean code structure
* Easy to extend with custom tasks

---

## Installation

Clone the repository:

```bash
git clone https://github.com/singhania0687/event-loop-visualizer.git
cd event-loop-visualizer/event-loop
```
---

## Usage

Run the CLI:

```bash
node index.js
```

You will see:

```
Select tasks to add to the event loop:
1. setTimeout 0ms
2. setImmediate
3. process.nextTick
4. Promise.then
5. I/O callback (fs.readFile)
Enter choices separated by comma:
```

Type your choices (example):

```
3,4,1,2
```

This will schedule:

* `process.nextTick`
* `Promise.then`
* `setTimeout 0ms`
* `setImmediate`

Then the Event Loop executes tasks and displays:

```
Phase: nextTick
-> Executing: process.nextTick

Phase: microtasks
-> Executing: Promise.then

Phase: timers
-> Executing: setTimeout 0ms

Phase: check
-> Executing: setImmediate
```

Optional ASCII timeline:

```
[nextTick] -> [Promise] -> [Timeout] -> [Immediate]
```

---

## Demo

Sample run:

```
$ node index.js
Select tasks to add to the event loop:
1. setTimeout 0ms
2. setImmediate
3. process.nextTick
4. Promise.then
5. I/O callback (fs.readFile)
Enter choices separated by comma:
> 3,4,1,2

Tasks scheduled:
- process.nextTick
- Promise.then
- setTimeout 0ms
- setImmediate

===== Event Loop Execution =====

Phase: nextTick
-> Executing: process.nextTick

Phase: microtasks
-> Executing: Promise.then

Phase: timers
-> Executing: setTimeout 0ms

Phase: check
-> Executing: setImmediate

===== End of Execution =====

ASCII Timeline:
[nextTick] -> [Promise] -> [Timeout] -> [Immediate]
```

---

## Learning Outcomes

By completing and using this project, you will:

* Understand the Node.js Event Loop **in depth**
* Learn the difference between **microtasks vs macrotasks**
* Understand **task priorities and execution phases**
* Practice **modular Node.js CLI development**
* Gain visual insights into **how asynchronous operations are scheduled**

---

## Future Improvements

* Support **custom task definitions**
* Display **nested tasks visually**
* Add **real-time memory usage while tasks execute**
* Export execution order to **JSON for automated testing**
* Combine with **Memory Inspector** for an integrated visualization tool

---

## Folder Structure

```
event-loop/
├── index.js         # CLI entry point
├── menu.js          # Display menu & parse input
├── scheduler.js     # Task scheduling logic
└── visualizer.js    # ASCII visualization
```

---

## License

MIT License © 
