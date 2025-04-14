class HashTable {
  constructor(size = 7) {
    // assign a prime number as required length of hashtable
    this.datamap = new Array(size);
  }

  // Private method
  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.datamap.length; // multiply with a prime-number
    }

    return hash;
  }

  // Public method
  set(key, value) {
    const hash = this._hash(key);
    if (!this.datamap[hash]) {
      this.datamap[hash] = [];
    }
    this.datamap[hash].push([key, value]);

    return this;
  }

  get(key) {
    const hash = this._hash(key);

    if (!this.datamap[hash]) {
      return undefined;
    }

    for (let i = 0; i < this.datamap[hash].length; i++) {
      if (this.datamap[hash][i][0] === key) {
        return this.datamap[hash][i][1];
      }
    }
    return undefined;
  }

  keys() {
    const dataMapKeys = []; // push all keys from <key,value> pairs into this array

    for (let i = 0; i < this.datamap.length; ++i) {
      if (this.datamap[i]) {
        const keyIndex = 0;
        for (let j = 0; j < this.datamap[i].length; ++j) {
          dataMapKeys.push(this.datamap[i][j][keyIndex]);
        }
      }
    }

    return dataMapKeys;
  }
}

const myHT = new HashTable(7);
myHT.set("latte", "50");
myHT.set("Cappuchino", "100");
myHT.set("Filter coffee", "25");

console.log(myHT.get("latte"));
console.log(myHT.get("cows"));
console.log(myHT.datamap);

console.log(myHT.keys());
