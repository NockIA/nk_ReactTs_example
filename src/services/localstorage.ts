export class Store {
    private storageKey: string;
  
    constructor(storageKey: string) {
      this.storageKey = storageKey;
    }
  
    // --------------------------- //
    // -----------Set------------- //
    // --------------------------- //
    save(data: string): void {
      localStorage.setItem(this.storageKey, JSON.stringify(data));
    }
  
    // --------------------------- //
    // -----------Get------------- //
    // --------------------------- //
    load(): string | null {
      const data = localStorage.getItem(this.storageKey);
      if (data) {
        return JSON.parse(data);
      }
      return null;
    }
  
    // --------------------------- //
    // ----------Reset------------ //
    // --------------------------- //
    clear(): void {
      localStorage.removeItem(this.storageKey);
    }
  }