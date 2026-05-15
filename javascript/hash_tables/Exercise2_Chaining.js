/**
 * 🔗 EJERCICIO 2: Tabla Hash con Chaining (Encadenamiento)
 *
 * CONTEXTO: Dos usuarios diferentes pueden tener keys que dan el mismo hash.
 * Usa listas enlazadas (o arrays) para manejar colisiones.
 *
 * Estructura:
 * Index 0: [Key1:Val1] -> [Key5:Val5]
 * Index 1: [Key2:Val2]
 * Index 2: empty
 * ...
 */

class HashTableChaining {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.table = new Array(capacity).fill(null).map(() => []);
  }

  hash(key) {
    return key % this.capacity;
  }

  set(key, value) {
    // TODO: Agrega a la lista en el índice del hash
    // Si la key ya existe, actualiza el valor
    // Si no existe, agrega al final de la lista
  }

  get(key) {
    // TODO: Busca en la lista del índice
    // Recorre la lista buscando la key
  }

  // Método helper para debugging
  print() {
    this.table.forEach((bucket, i) => {
      console.log(`Index ${i}:`, bucket.map(x => `${x.key}:${x.value}`).join(' -> '));
    });
  }
}

// Testing - Colisiones intentional
const ht = new HashTableChaining(3);
ht.set(1, 'A');  // hash = 1
ht.set(4, 'B');  // hash = 1 (colisión!)
ht.set(2, 'C');  // hash = 2

console.log('🔗 Tabla con chaining:');
ht.print();
// Index 0: (vacío)
// Index 1: 1:A -> 4:B
// Index 2: 2:C

console.log('🔗 get(1):', ht.get(1));
// Expected: A

console.log('🔗 get(4):', ht.get(4));
// Expected: B

console.log('✅ Chaining funcionando');