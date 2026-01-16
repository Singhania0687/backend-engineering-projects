// export default function drawBar(value) {
//   const blocks = Math.min(20, Math.floor(value / 2));
//   console.log('Heap Used: [' + '#'.repeat(blocks) + ' '.repeat(20 - blocks) + ']');
// }


let maxHeapUsed = 1; // avoid division by zero

export default function drawBar(currentHeap) {
  const BAR_WIDTH = 20;

  // Update max observed heap
  if (currentHeap > maxHeapUsed) {
    maxHeapUsed = currentHeap;
  }

  const filledBlocks = Math.round(
    (currentHeap / maxHeapUsed) * BAR_WIDTH
  );

  const bar =
    '#'.repeat(filledBlocks) +
    ' '.repeat(BAR_WIDTH - filledBlocks);

  console.log(
    `Heap Used: [${bar}] ${currentHeap}MB (max: ${maxHeapUsed}MB)`
  );
}


