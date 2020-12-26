interface LinkedListNode {
  data: number;
  next: LinkedListNode | null;
}

class LinkedList {
  head: LinkedListNode | null;
  constructor (head: LinkedListNode) {
    this.head = head;
  }

  print(): void {
    let print = this.head || null;
    while (print) {
      console.log(print.data);
      print = print.next;
    }
  }
}

let ll = new LinkedList({ data: 1, next: null });

ll.print();
