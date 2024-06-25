type NodeChangeHandler<T> = (nextElement: T | null, prevElement: T | null) => void;
/**
 * Hook to receive a stable ref setter with an optional onChange handler
 */
export declare const useNodeRef: <T, U = T>(onChange?: NodeChangeHandler<T>) => readonly [import("react").MutableRefObject<T | null>, (element: U | null) => void];
export {};
//# sourceMappingURL=useNodeRef.d.ts.map