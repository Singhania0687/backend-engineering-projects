# 🧠 CPU vs Memory — Node.js Internals Notes

**Understanding the difference between computation (CPU) and memory usage (RAM) in Node.js**

---

## 1. Core Principle

> **Computation uses CPU.
> Allocation uses RAM.**

They are related but not the same.

---

## 2. Computation (CPU Usage)

Example:

```js
let sum = 0;
for (let i = 0; i < 1e9; i++) {
  sum += i;
}
```

* CPU usage → very high
* Execution time → increases
* Memory → almost unchanged
* Event loop → may be blocked
* Latency → increases

---

## 3. Memory Usage (RAM / Heap)

Example:

```js
let arr = [];
for (let i = 0; i < 1e6; i++) {
  arr.push({ a: i });
}
```

* Heap grows
* RAM usage increases
* GC may run
* CPU usage mostly stable (except when GC triggers)

---

## 4. Buffers / External Memory

```js
Buffer.alloc(50 * 1024 * 1024);
```

* RSS (Resident Set Size) increases
* Heap may not change
* Useful to visualize memory outside JS objects

---

## 5. Memory Leaks

```js
setInterval(() => {
  global.cache = global.cache || [];
  global.cache.push(new Array(1e6));
}, 1000);
```

* Memory grows continuously
* GC cannot reclaim
* Eventually crashes process (OOM)

---

## 6. CPU vs Memory Table

| Resource | Effect                                       |
| -------- | -------------------------------------------- |
| CPU      | spikes during computation, blocks event loop |
| Memory   | grows during allocations, may trigger GC     |

---

## 7. Key Insight

* **High CPU ≠ High Memory**
* **Memory grows only when objects are allocated and retained**
* Senior engineers isolate CPU vs memory for debugging

---