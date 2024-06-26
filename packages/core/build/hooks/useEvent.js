import { useCallback, useLayoutEffect, useRef } from "react";
/**
 * Hook to define an event handler with a function identity that is always stable
 * {@link https://blog.logrocket.com/what-you-need-know-react-useevent-hook-rfc/}
 */
export const useEvent = (handler) => {
    const handlerRef = useRef(handler);
    useLayoutEffect(() => {
        handlerRef.current = handler;
    });
    return useCallback((...args) => {
        return handlerRef.current?.(...args);
    }, []);
};
//# sourceMappingURL=useEvent.js.map