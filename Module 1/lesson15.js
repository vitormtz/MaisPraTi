// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//         this.previus = null
//     }
// }

// class DoublyLinkedList {
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     add(data){
//         let newNode = new Node(data)

//         if(this.head === null){
//             this.head = newNode
//             this.tail = newNode
//         }else {
//             this.tail.next = newNode
//             newNode.previus = this.tail
//             this.tail = newNode
//         }
//         this.size++
//     }

//     insertAt(data, index){
//         if(index < 0 || index > this.size){
//             return -1
//         }

//         let newNode = new Node(data)
//         let current = this.head

//         if(index === 0){
//             if(this.head === null){
//                 this.head = newNode
//                 this.tail = newNode
//             }else {
//                 newNode.next = this.head
//                 this.head.previus = newNode
//                 this.head = newNode
//             }
//         } else if(index === this.size){
//             this.tail.next = newNode
//             newNode.previus = this.tail
//             this.tail = newNode
//         }else {
//             for (let i = 0; i < index; i++) {
//                 current = current.next                
//             }

//             newNode.next = current
//             newNode.previus = current.previus

//             current.previus.next = newNode
//             current.previus = newNode
//         }
//         this.size++
//     }

//     removeAt(index) {
//         if(index < 0 || index >= this.size) {
//             return -1
//         }

//         let current = this.head

//         if(index === 0){
//             this.head = this.head.next

//             if(this.head !== null) {
//                 this.head.previus = null
//             }else {
//                 this.tail = null
//             }
//         }else if(index === this.size - 1){
//             this.tail = this.tail.previus
//             this.tail.next = null
//         }else {
//             for (let i = 0; i < index; i++) {
//                 current = current.next                
//             }

//             current.previus.next = current.next
//             current.next.previus = current.previus
//         }

//         this.size--
//     }

//     getData(index){
//         if(index < 0 || index >= this.size){
//             return -1
//         }

//         let current = this.head

//         for (let i = 0; i < index; i++) {
//             current = current.next            
//         }

//         return current.data
//     }

//     print(){
//         let current = this.head
//         let result = []

//         while(current !== null){
//             result.push(current.data)
//             current = current.next
//         }

//         console.log(result.join(' <=> '))
//     }

//     getSize(){
//         return this.size
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     //Implementar um método que apague toda a lista
//     clearAll(){
//         this.head = null
//         this.tail = null
//         this.size = 0

//         console.log('Lista limpa!')
//     }

//     //Inverter a ordem dos elementos da lista
//     reverse() {
//         let current = this.head;
//         let temp = null;

//         while (current !== null) {
//             temp = current.previus;
//             current.previus = current.next;
//             current.next = temp;
//             current = current.previus;
//         }

//         if (temp !== null) {
//             this.tail = this.head;
//             this.head = temp.previus;
//         }
//     }
// }

// let lista = new DoublyLinkedList()

// lista.add(10)
// lista.add(20)
// lista.add(30)
// lista.add(40)
// lista.add(50)

// lista.print()

// lista.insertAt(5, 0)
// lista.insertAt(15, 3)
// lista.insertAt(55, lista.getSize())
// lista.print()

// lista.removeAt(0)
// lista.removeAt(3)
// lista.removeAt(lista.getSize() - 1)
// lista.print()

// console.log('Elemento na posição 2: ', lista.getData(2))
// console.log('A lista está vazia? ', lista.isEmpty())
// console.log('Tamanho da lista: ', lista.getSize())