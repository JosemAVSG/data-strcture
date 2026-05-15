/**
 * 👤 EJERCICIO 1: Tabla Hash de Usuarios
 *
 * CONTEXTO: DataStore guarda usuarios en una tabla hash.
 * Cada usuario tiene un ID único que sirve como key.
 *
 * Implementa:
 * - set(id, user): guardar usuario
 * - get(id): obtener usuario
 * - has(id): verificar si existe
 * - delete(id): eliminar usuario
 */

class UserTable {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.table = new Array(capacity).fill(null);
  }

  // Función hash simple
  hash(key) {
    // TODO: Implementa función hash (key % capacity)
    return 0;
  }

  set(key, value) {
    // TODO: Guarda el valor en la posición del hash
  }

  get(key) {
    // TODO: Obtiene el valor por key
  }

  has(key) {
    // TODO: Verifica si existe
  }

  delete(key) {
    // TODO: Elimina el usuario
  }
}

// Testing
const users = new UserTable(5);

users.set('user1', { name: 'Alice', age: 25 });
users.set('user2', { name: 'Bob', age: 30 });

console.log('👤 user1:', users.get('user1'));
// Expected: { name: 'Alice', age: 25 }

console.log('👤 user2 existe:', users.has('user2'));
// Expected: true

users.delete('user1');
console.log('👤 user1 existe después de borrar:', users.has('user1'));
// Expected: false

console.log('✅ Tabla de usuarios funcionando');