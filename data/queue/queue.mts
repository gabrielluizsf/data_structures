export class Queue<T> {
  private queue: T[] = [];
  enqueue(item: T): Queue<T> {
    this.queue = [...this.queue, item];
    return this;
  }
  dequeue(): T {
    const item = this.queue[0];
    this.queue = this.queue.slice(1);
    return item;
  }
  isEmpty(): boolean {
    return this.getLength() === 0;
  }
  getLength(): number {
    return this.queue.length;
  }
}
