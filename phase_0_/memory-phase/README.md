# Node Memory Monitor CLI

A **Node.js command-line tool** to simulate memory allocation and visualize memory usage in real time. It monitors **RSS, JavaScript heap, and external (Buffer) memory**, providing dynamic bar visualization for easy understanding of memory behavior in Node.js processes.

---

## Features

* **Simulate memory allocation** using Buffers.
* **Real-time memory monitoring**:

  * RSS (Resident Set Size)
  * Heap Used
  * External memory (Buffers / native allocations)
* **Dynamic bar scaling** for accurate visualization.
* **Customizable intervals and durations** via CLI input.
* **Async CLI input handling** with proper validation.
* **Safe memory cleanup** after monitoring.

---

## Installation

> Requires **Node.js v18+** for ES module support.

1. Clone the repository:

```bash
git clone https://github.com/singhania0687/node-memory-monitor.git
cd node-memory-monitor
```

> This project uses only Node.js built-ins, so no external dependencies are required.

---

## Usage

Run the CLI:

```bash
node main.js
```

### Step 1: Enter Memory Allocation Size

```text
Enter the size of buffer in MB: 10
```

* Allocates **10MB Buffers** every second.
* Memory will grow dynamically.

---

### Step 2: Enter Monitoring Interval and Duration

```text
Enter the interval in milliseconds and duration in seconds: 1000 10
```

* Interval: Time between memory checks (ms)
* Duration: Total monitoring time (s)

---

### Sample Output

```
Time elapsed: 1.0s | RSS: 48MB | Heap Used: 5MB | External: 10MB
Heap Used: [####                ] 5MB (max: 5MB)
Time elapsed: 2.0s | RSS: 58MB | Heap Used: 5MB | External: 20MB
Heap Used: [########            ] 5MB (max: 5MB)
...
```

* **Heap Used bar** dynamically scales based on observed max.
* **RSS** and **External** memory are displayed to reflect true memory usage.

---

## Technical Details

* **Node.js Internals Explored:**

  * `process.memoryUsage()` (RSS, heapUsed, external)
  * Timers (`setInterval`, `setTimeout`)
  * Async CLI input (`readline`, Promises)
* **Dynamic scaling:** The bar chart automatically adjusts according to maximum observed heap usage.
* **Memory allocation simulation:** Buffers allocated outside the V8 heap to simulate native memory consumption.
* **Safe cleanup:** Stops allocation after monitoring ends and frees memory.

---

## Project Structure

```
.
├── main.js          # CLI entry point
├── allocator.js     # Memory allocation logic
├── monitor.js       # Memory monitoring logic
├── choices.js       # CLI input prompts
├── visualizer.js    # Dynamic memory bar rendering
└── README.md        # Project documentation
```

---

## Skills Demonstrated

* Node.js runtime introspection (RSS, heap, external memory)
* Async CLI input handling
* Timers and interval management
* Memory visualization and dynamic scaling
* Debugging Node memory behavior
* Modular ES6 project structure

---

## Future Enhancements

* Color-coded bars based on memory usage.
* Export memory logs to CSV/JSON for analysis.
* Compare Buffer vs JS object allocations.
* Demonstrate GC events and memory leak detection.

---

## License

MIT License © 2026 – Your Name

---
