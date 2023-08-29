class NodeLL<T> {
    data: T;
    next: NodeLL<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList<T> {
    head: NodeLL<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data: T): void {
        const newNode = new NodeLL(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    display(): T[] {
        let current = this.head;
        let data = []
        while (current) {
            data.push(current.data)
            current = current.next;
        }
        return data
    }
}