/**
 * 📍 EJERCICIO 3: Tabla Hash con Linear Probing
 *
 * CONTEXTO: En lugar de listas, cuando hay colisión, busca el
 * siguiente espacio libre en la tabla.
 *
 * Si index 2 está ocupado, intenta 3, luego 4, etc.
 * Al llegar al final, vuelve al inicio.
 *
 * Delete es tricky: no puedes solo borrar, necesitas marcar o reorganizar.
 * Por simplicidad, implementa solo insert y search.
 */

class HashTableProbing {
  constructor(capacity = 5) {
    this.capacity = capacity;
    this.table = new Array(capacity).fill(null); // null = vacío
  }

  hash(key) {
    return key % this.capacity;
  }

  set(key, value) {
    // TODO: Calcula hash inicial
    // Si ocupado, ve al siguiente (index + 1) % capacity
    // Continúa hasta encontrar espacio vacío
  }

  get(key) {
    // TODO: Busca la key
    // Comienza en hash inicial
    // Si no es la key, sigue al siguiente
    // Se detiene si encuentra null (no existe)
  }
}

// Testing
const ht = new HashTableProbing(5);
ht.set(1, 'A');
ht.set(6, 'B'); // 6 % 5 = 1, pero 1 está ocupado, va a 2
ht.set(11, 'C'); // 11 % 5 = 1, ocupado, va a 3

console.log('📍 get(1):', ht.get(1));
// Expected: A

console.log('📍 get(6):', ht.get(6));
// Expected: B

console.log('📍 get(11):', ht.get(11));
// Expected: C

console.log('✅ Linear Probing funcionando');