/**
 * 📱 EJERCICIO 5: Autocompletado de Contactos
 *
 * CONTEXTO: Cuando el usuario escribe un mensaje, el sistema
 * sugiere contactos que empiezan con lo que escribe.
 *
 * Implementa un autocompletado similar al de contactos de celular.
 *
 * Input: Contactos ["Juan", "Jorge", "Juan Carlos", "José", "Julián"]
 * Usuario escribe "Jua" -> Sugiere ["Juan", "Juan Carlos"]
 * Usuario escribe "Jo" -> Sugiere ["Jorge", "José"]
 *
 * @param {string[]} contacts - Lista de contactos
 * @param {string} prefix - Lo que el usuario ha escrito
 * @returns {string[]} - Contactos sugeridos
 */
class ContactAutocomplete {
  constructor() {
    this.root = { children: {}, isEnd: false, data: null };
  }

  addContact(name) {
    // TODO: Agrega contacto al trie
  }

  autocomplete(prefix) {
    // TODO: Encuentra todos los contactos que empiezan con prefix
    return [];
  }
}

// Testing
const contacts = new ContactAutocomplete();
['Juan', 'Jorge', 'Juan Carlos', 'José', 'Julián'].forEach(c => contacts.addContact(c));

console.log('📱 Escribe "Jua":', contacts.autocomplete('Jua'));
// Expected: ["Juan", "Juan Carlos"]

console.log('📱 Escribe "Jo":', contacts.autocomplete('Jo'));
// Expected: ["Jorge", "José"]

console.log('📱 Escribe "Jul":', contacts.autocomplete('Jul'));
// Expected: ["Julián"]

console.log('✅ Autocompletado funcionando');