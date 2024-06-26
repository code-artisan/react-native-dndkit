import { useLayoutEffect, useRef } from "react";
export function useLatestValue(value, dependencies = [value]) {
    const valueRef = useRef(value);
    useLayoutEffect(() => {
        if (valueRef.current !== value) {
            valueRef.current = value;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
    return valueRef;
}
//# sourceMappingURL=useLatestValue.js.map