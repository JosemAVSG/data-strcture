/**
 * 📦 EJERCICIO 1: Sistema de Seguimiento de Paquetes
 *
 * CONTEXTO: Trabajas en RapidBox, una empresa de mensajería.
 * Cada paquete recibe un ID único. El sistema debe permitir:
 * - Agregar paquetes urgentes al INICIO (prioridad máxima)
 * - Agregar paquetes regulares al FINAL
 * - Eliminar paquetes cuando se entrega
 *
 * @description Implementa una LinkedList con los métodos requeridos
 */

class PackageNode {
  constructor(packageId) {
    this.packageId = packageId;
    this.next = null;
  }
}

class PackageTracker {
  constructor() {
    this.head = null;
  }

  // Agregar paquete urgente al INICIO
  addUrgent(packageId) {
    // TODO: Crea un nuevo nodo y agrégalo al inicio
    // Un paquete urgente se entrega primero
  }

  // Agregar paquete regular al FINAL
  addRegular(packageId) {
    // TODO: Recorre hasta el final y agrega el nuevo paquete
  }

  // Eliminar paquete entregado
  delivered(packageId) {
    // TODO: Elimina el nodo con ese ID de paquete
  }

  // Mostrar ruta actual
  printRoute() {
    let current = this.head;
    const route = [];
    while (current) {
      route.push(current.packageId);
      current = current.next;
    }
    console.log('📦 Ruta:', route.join(' -> '));
  }
}

// Testing
const tracker = new PackageTracker();
tracker.addRegular('PKG-001');
tracker.addRegular('PKG-002');
tracker.addUrgent('PKG-URGENT'); // Este debe ir primero
tracker.printRoute();
// Expected: PKG-URGENT -> PKG-001 -> PKG-002

tracker.delivered('PKG-001');
tracker.printRoute();
// Expected: PKG-URGENT -> PKG-002

console.log('✅ Sistema de seguimiento funcionando');