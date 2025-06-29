export class MemoryStorage<T> {
    private cache: Map<string, T>;
    constructor() {
        this.cache = new Map<string, T>();
    }

    getItem(key: string) {
        return this.cache.get(key) || null;
    }

    setItem(key: string, value: T) {
        this.cache.set(key, value);
    }

    removeItem(key: string) {
        this.cache.delete(key);
    }

    getKeys() {
        return Array.from(this.cache.keys());
    }

    hasKey(key: string) {
        return this.cache.has(key);
    }

    clear() {
        this.cache.clear();
    }
}