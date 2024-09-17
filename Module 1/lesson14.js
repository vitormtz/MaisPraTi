// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
    
//     add(data) {
//         let newNode = new Node(data)

//         if(this.head === null){
//             this.head = newNode
//         }else {
//             let current = this.head
//             while(current.next !== null){
//                 current = current.next
//             }
//             current.next = newNode
//         }
//         this.size++
//     }

//     insertAt(data, index) {
//         if(index < 0 || index > this.size){
//             return false
//         }

//         let newNode = new Node(data)
//         let current = this.head
//         let previus

//         if(index === 0) {
//             newNode.next = this.head
//             this.head = newNode
//         }else {
//             for (let i = 0; i < index; i++) {
//                 previus = current
//                 current = current.next                
//             }
//             newNode.next = current
//             previus.next = newNode
//         }
//         this.size++
//     }

//     removeFrom(index){
//         if(index < 0 || index > this.size){
//             return -1
//         }

//         let current = this.head
//         let previus

//         if(index === 0){
//             this.head = current.next
//         }else {
//             for (let i = 0; i < index; i++) {
//                 previus = current
//                 current = current.next                
//             }

//             previus.next = current.next
//         }
//         this.size--
//         return current.data
//     }
    
//     isEmpty() {
//         return this.size === 0
//     }

//     indexOf(data) {
//         let current = this.head
//         let index = 0

//         while(current !== null) {
//             if(current.data === data){
//                 return index
//             }
//             index++
//             current = current.next
//         }
//         return -1
//     }

//     printList() {
//         let current = this.head
//         while(current !== null){
//             console.log(current.data)
//             current = current.next
//         }
//     }
// }

// let list = new LinkedList()

// list.add('Elemento 0')
// list.add('Elemento 1')
// list.add('Elemento 2')
// list.add('Elemento 3')

// console.log(list.indexOf('Elemento 3'))
// list.removeFrom(1)
// list.printList()