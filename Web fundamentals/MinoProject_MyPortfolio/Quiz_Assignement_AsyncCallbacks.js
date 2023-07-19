const MAX_CONCURRENTLY_EXECUTING = 2;
const MAX_QUEUE_SIZE = 5;
const LIFO = "LIFO";
const FIFO = "FIFO";

export default class QueueProcessingCallback {
  queue;
  order;
  isExecuting;
  executingCount;
  constructor(queueProcessingOrder = FIFO) {
    this.order = queueProcessingOrder;
    this.queue = [];
    this.isExecuting = false;
    this.executingCount = 0;
  }

  process(callback) {
    if (this.executingCount < MAX_CONCURRENTLY_EXECUTING) {
      this.execute(callback);
    } else if (this.queue.length < MAX_QUEUE_SIZE) {
      this.queue.push(callback);
    } else {
      console.log("Queue is full. Discarding incoming callback.");
    }
  }

  async execute(callback) {
    this.executingCount++;
    this.isExecuting = true;

    try {
      await callback();
    } catch (error) {
      console.error("Error executing callback:", error);
    }

    this.executingCount--;
    this.isExecuting = false;

    if (this.queue.length > 0) {
      const nextCallback =
        this.order === LIFO ? this.queue.pop() : this.queue.shift();
      this.execute(nextCallback);
    }
  }

  getNextCallback() {
    if (this.order === FIFO) {
      return this.queue.shift();
    } else if (this.order === LIFO) {
      return this.queue.pop();
    }
  }
}
