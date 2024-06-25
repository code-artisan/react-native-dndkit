import { useCallback, useRef } from "react";
import { useEvent } from "./useEvent";
/**
 * Hook to receive a stable ref setter with an optional onChange handler
 */
export const useNodeRef = (onChange) => {
    const onChangeHandler = useEvent(onChange);
    const nodeRef = useRef(null);
    const setNodeRef = useCallback((element) => {
        if (element !== nodeRef.current) {
            onChangeHandler?.(element, nodeRef.current);
        }
        nodeRef.current = element;
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return [nodeRef, setNodeRef];
};
//# sourceMappingURL=useNodeRef.js.map