export type UseSessionStorage<T> = [
    () => T | undefined,
    (value: T) => void,
    () => void
];

export function useSessionStorage<T>(key: string): UseSessionStorage<T> {
    const setSessionStorageItem = (value: T): void => {
        try {
            window.sessionStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log(error);
        };
    };

    const getSessionStorageItem = (): T | undefined => {
        try {
            const item = window.sessionStorage.getItem(key);
            if (item === null) return undefined;
            return JSON.parse(item);
        } catch (error) {
            console.log(error);
        };
    };

    const deleteSessionStorageItem = (): void => {
        try {
            window.sessionStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        };
    };

    return [getSessionStorageItem, setSessionStorageItem, deleteSessionStorageItem]
}