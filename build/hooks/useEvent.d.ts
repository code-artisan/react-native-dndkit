type EventHandler = (...args: any[]) => void;
/**
 * Hook to define an event handler with a function identity that is always stable
 * {@link https://blog.logrocket.com/what-you-need-know-react-useevent-hook-rfc/}
 */
export declare const useEvent: <T extends EventHandler>(handler: T | undefined) => (...args: unknown[]) => void | undefined;
export {};
//# sourceMappingURL=useEvent.d.ts.map