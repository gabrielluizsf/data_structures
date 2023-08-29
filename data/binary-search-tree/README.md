# O que é uma Árvore de Busca Binária (BST)?

#### Uma Árvore de Busca Binária (BST) é uma estrutura de dados usada para organizar e armazenar elementos de maneira que permita operações eficientes de busca, inserção e exclusão. Ela segue uma propriedade específica onde cada nó possui um valor, e todos os valores na subárvore esquerda de um nó são menores ou iguais ao valor do nó, enquanto todos os valores na subárvore direita são maiores que o valor do nó. Essa propriedade permite operações de busca e outras operações mais rápidas em comparação com estruturas de dados lineares.

## Como Funciona o Código ?

O código implementa uma Árvore de Busca Binária genérica em TypeScript. Vamos entender os principais componentes e métodos no código:

### Classe `NodeBST<T>`

Essa classe representa um nó na Árvore de Busca Binária. Ela contém três propriedades:
- `value`: O valor armazenado no nó.
- `left`: Uma referência ao nó filho esquerdo (ou null se não houver filho esquerdo).
- `right`: Uma referência ao nó filho direito (ou null se não houver filho direito).

### Classe `BinaryTree<T>`

Essa classe representa a própria Árvore de Busca Binária. Ela contém os seguintes métodos:

#### `constructor()`
- Inicializa uma Árvore de Busca Binária vazia com uma raiz nula.

#### `insert(value: T)`
- Insere um novo valor na Árvore de Busca Binária, mantendo a propriedade da BST.
- Se a árvore estiver vazia (sem raiz), o novo valor se torna a raiz.
- Caso contrário, o método privado `insertNode` é chamado para inserir o valor de forma recursiva.

#### `search(value: T): T | null`
- Procura por um valor na Árvore de Busca Binária.
- Começa pela raiz e percorre a árvore com base em comparações do valor alvo com os valores dos nós.
- Retorna o valor se encontrado, ou null se não for encontrado.

#### `private insertNode(current: NodeBST<T> | null, newNode: NodeBST<T>): NodeBST<T>`
- Um método privado e recursivo usado para inserir um novo nó na árvore, mantendo a propriedade da BST.
- Insere o nó na subárvore esquerda se o novo valor for menor ou igual ao valor do nó atual; caso contrário, insere na subárvore direita.
- Também verifica e realiza rotações se a árvore ficar desbalanceada após a inserção.

#### `private rotateRight(node: NodeBST<T>): NodeBST<T>`
- Realiza uma rotação à direita em um nó dado para balancear a árvore.
- Atualiza as referências e retorna a nova raiz da subárvore rotacionada.

#### `private rotateLeft(node: NodeBST<T>): NodeBST<T>`
- Realiza uma rotação à esquerda em um nó dado para balancear a árvore.
- Atualiza as referências e retorna a nova raiz da subárvore rotacionada.

#### `private getHeight(node: NodeBST<T> | null): number`
- Calcula a altura de um nó na árvore (o caminho mais longo do nó até uma folha).
- Retorna 0 se o nó for nulo (ou seja, sem altura).

#### `private isBalanced(node: NodeBST<T> | null): boolean`
- Verifica se uma subárvore enraizada no nó dado está balanceada.
- Uma subárvore está balanceada se a diferença absoluta entre as alturas de suas subárvores esquerda e direita for no máximo 1.

O código garante que a propriedade da BST seja mantida durante as inserções e verifica e realiza rotações para balancear a árvore quando necessário.