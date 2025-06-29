import { MemoryStorage } from "./memorystorage";

export class LocalStorage {
    private clientID: string;
    private memoryStorage: MemoryStorage<string>;
    constructor(clientID: string) {
        this.clientID = clientID;
        this.memoryStorage = new MemoryStorage<string>();
    }

    getItem(key: string) {
        return localStorage.getItem(`${this.clientID}-${key}`);
    }

    setItem(key: string, value: string) {
        return localStorage.setItem(`${this.clientID}-${key}`, value);
    }

    removeItem(key: string) {
        return localStorage.removeItem(`${this.clientID}-${key}`);
    }

    clear() {
        this.memoryStorage.clear();
        Object.keys(localStorage).forEach((key) => {
            if (key.startsWith(this.clientID)) {
                localStorage.removeItem(key);
            }
        });
    }
}