/**
 * Servicio para generar prefijos CSS únicos y evitar conflictos de estilos
 * entre diferentes proyectos que usen la librería Sanna UI
 */
export class CssPrefixService {
  // Generar un prefijo único basado en timestamp y hash aleatorio
  private static readonly prefix = `sanna-ui-${Date.now().toString(36)}-${Math.random().toString(36).substr(2, 6)}`;
  
  /**
   * Obtiene el prefijo único generado para esta instancia de la librería
   */
  static getPrefix(): string {
    return this.prefix;
  }
  
  /**
   * Genera una clase CSS con el prefijo único
   * @param className - Nombre de la clase base (sin prefijo)
   * @returns Clase CSS con prefijo único
   */
  static getClass(className: string): string {
    return `${this.prefix}-${className}`;
  }
  
  /**
   * Genera múltiples clases CSS con prefijos únicos
   * @param classNames - Array de nombres de clases base
   * @returns String con todas las clases prefijadas separadas por espacios
   */
  static getClasses(classNames: string[]): string {
    return classNames.map(className => this.getClass(className)).join(' ');
  }
  
  /**
   * Aplica prefijo a una cadena de clases CSS separadas por espacios
   * @param classString - String con clases separadas por espacios
   * @returns String con todas las clases prefijadas
   */
  static prefixClassString(classString: string): string {
    return classString
      .split(' ')
      .filter(cls => cls.trim())
      .map(cls => this.getClass(cls.trim()))
      .join(' ');
  }
}
