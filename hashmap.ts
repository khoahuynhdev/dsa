interface HashNode<K extends String, V> {
  key: K;
  value: V;
  next?: HashNode<K, V>;
}

// https://stackoverflow.com/questions/13897659/extending-functionality-in-typescript

const POSITIVE = 0x7fffffff;
interface Object {
  hashCode(): number;
}

String.prototype.hashCode = function () {
  return Array.from(this.toLowerCase()).reduce((s, c) => Math.imul(31, s) + c.charCodeAt(0) | 0, 0);
}

type NullableNode<K extends String,V> = HashNode<K,V> | null;

class HashMap<K extends String,V> {
  bucketArray: HashNode<K,V>[]
  bucketCapacity: number;
  bucketSize: number;

  constructor() {
    this.bucketArray = [];
    this.bucketCapacity = 10;
    this.bucketSize = 0;

  }

  getBucketIndex(key: K): number {
    return (key.hashCode() & POSITIVE) % this.bucketCapacity;
  }

  // get (key: K)
  getValue(key: K): V | undefined {
    const index = this.getBucketIndex(key);
    let head: HashNode<K,V> | undefined = this.bucketArray[index];
    while (head) {
      if (head.key === key) return head.value;
      head = head.next;
    }
    return undefined;
  }

  // add (key: K, value: V)
  add(key: K, value: V): void {
    const index = this.getBucketIndex(key);
    let head: HashNode<K, V> | undefined = this.bucketArray[index];

    while (head) {
      if (head.key === key) {
        head.value = value;
        return;
      }
      head = head.next;
    }

    this.bucketSize++;
    head = this.bucketArray[index]
    const newNode: NullableNode<K,V> = { key, value, next: head };
    this.bucketArray[index] = newNode;

    // If load factor goes beyond threehold, then double hashtable size
    // we need to double hashtable capacity to calculate hash
    if (this.bucketSize / this.bucketCapacity >= 0.7) {
      this.extendCapacity();
    }
  }

  extendCapacity(): void {
    const temp: HashNode<K,V>[] = this.bucketArray;
    this.bucketArray = [];
    this.bucketCapacity = 2 * this.bucketCapacity;
    this.bucketSize = 0;
    temp.forEach((node: HashNode<K,V> | undefined) => {
      while (node) {
        this.add(node.key, node.value);
        node = node.next;
      }
    });
  }

  // remove (key: K)
}

const hashtable = new HashMap<String, Number>();
hashtable.add('hello', 100);
hashtable.add('world', 1000);
console.log(hashtable.getValue('hello'))
console.log(hashtable.getValue('world'))
console.log(hashtable.getValue('none'))
