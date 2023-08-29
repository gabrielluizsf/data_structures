class NodeBST<T> {
    value: T;
    left: NodeBST<T> | null;
    right: NodeBST<T> | null;
    constructor(value: T){
        this.value = value;
        this.left = null
        this.right = null
    }
}

export class BinaryTree<T> {
    root: NodeBST<T> | null;
    constructor(){
        this.root = null;
    }

    private getHeight(node: NodeBST<T> | null): number {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    private isBalanced(node: NodeBST<T> | null): boolean {
        if (node === null) {
            return true;
        }
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);
        const balanceFactor = Math.abs(leftHeight - rightHeight);
        return balanceFactor <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right);
    }

    private rotateRight(node: NodeBST<T>): NodeBST<T> {
        const newRoot = node.left!;
        node.left = newRoot.right;
        newRoot.right = node;
        return newRoot;
    }
    /**
     * Metódo de inserção de um novo valor na árvore binária
     * @param value o valor que vai ser inserido na árvore de procura binária
     * @returns  vazio nada void nil
     */
    insert(value: T){
        const newNode = new NodeBST<T>(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this.root = this.insertNode(this.root, newNode);
    }

    private insertNode(current: NodeBST<T> | null, newNode: NodeBST<T>): NodeBST<T> {
        if (current === null) {
            return newNode;
        }
        if (newNode.value <= current.value) {
            current.left = this.insertNode(current.left, newNode);
        } else {
            current.right = this.insertNode(current.right, newNode);
        }
        if (!this.isBalanced(current)) {
            if (newNode.value <= current.value) {
                if (newNode.value <= current.left!.value) {
                    current = this.rotateRight(current);
                } else {
                    current.left = this.rotateLeft(current.left!);
                    current = this.rotateRight(current);
                }
            } else {
                if (newNode.value > current.right!.value) {
                    current = this.rotateLeft(current);
                } else {
                    current.right = this.rotateRight(current.right!);
                    current = this.rotateLeft(current);
                }
            }
        }
        return current;
    }

    private rotateLeft(node: NodeBST<T>): NodeBST<T> {
        const newRoot = node.right!;
        node.right = newRoot.left;
        newRoot.left = node;
        return newRoot;
    }
/**
 * Metódo de procura na árvore binária
 * @param value valor que vai ser procurado na árvore
 * @returns valor encontrado na árvore ou null se não encontrar
 */
    search(value: T): T | null {
        let current = this.root;
        while (current !== null) {
            if (value === current.value) {
                return current.value;
            } else if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }
}
