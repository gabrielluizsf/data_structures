class GraphNode<T> {
    data: T;
    children: GraphNode<T>[];
  
    constructor(data: T) {
      this.data = data;
      this.children = [];
    }
  
    addChild(child: GraphNode<T>): void {
      this.children.push(child);
    }
  }
  
export class GenealogyGraph<T> {
    private vertex: Map<T, GraphNode<T>>;
  
    constructor(rootData: T) {
      this.vertex = new Map();
      this.root = this.addNode(rootData);
    }

    root: GraphNode<T>;
  
    private addNode(data: T): GraphNode<T> {
      const node = new GraphNode(data);
      this.vertex.set(data, node);
      return node;
    }
  
    addMember(parentData: T, memberData: T): void {
      const parent = this.vertex.get(parentData);
  
      if (parent) {
        const newMember = this.addNode(memberData);
        parent.addChild(newMember);
      } else {
        throw new Error(`O nó com dados "${parentData}" não foi encontrado na árvore.`);
      }
    }
  
    find(data: T): GraphNode<T> | null {
      return this.vertex.get(data) || null;
    }
  }
  