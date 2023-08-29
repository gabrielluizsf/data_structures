# O que é uma Lista Ligada?

#### Uma lista ligada é uma estrutura de dados linear composta por nós, onde cada nó contém dados e uma referência (ou link) para o próximo nó na sequência. Listas ligadas são usadas para armazenar e gerenciar coleções de itens, permitindo alocação dinâmica de memória e inserções e exclusões eficientes.

#### Ao contrário de arrays, listas ligadas não armazenam elementos em locais contíguos de memória. Em vez disso, elas usam nós que estão dispersos pela memória e são conectados por referências, o que as torna flexíveis para armazenamento dinâmico de dados.

# Como Funciona Este Código ? 

## Classe `NodeLL`

### A classe NodeLL representa um único nó na lista ligada. Ela possui duas propriedades:
- `data`: Armazena o valor real ou dados que o nó contém.
- `next`: Aponta para o próximo nó na sequência, ou é null se este nó for o último na lista.

## Classe `LinkedList`

### A classe LinkedList é usada para gerenciar a lista ligada. Ela possui as seguintes propriedades e métodos:

#### Propriedades:
- `head`: Aponta para o primeiro nó na lista.
- `size`: Armazena o número de nós na lista.

#### Métodos:
- `constructor()`: Inicializa uma lista ligada vazia, com head configurado como null e size configurado para 0.
- `append(data: T)`: Adiciona um novo nó com os dados fornecidos ao final da lista ligada. Se a lista estiver vazia, o novo nó se torna a cabeça. Caso contrário, ele percorre a lista para encontrar o último nó e adiciona o novo nó como next desse último nó.
- `display(): T[]`: Retorna um array contendo os dados de todos os nós na lista ligada. Ele percorre a lista, adicionando os dados de cada nó ao array.