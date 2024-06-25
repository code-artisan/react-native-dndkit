import React, { Children, useMemo } from "react";
import { View } from "react-native";
import { useDraggableStack } from "../hooks/useDraggableStack";
export const DraggableStack = ({ children, direction = "row", gap = 0, onOrderChange, onOrderUpdate, shouldSwapWorklet, style: styleProp, }) => {
    const initialOrder = useMemo(() => Children.map(children, (child) => {
        // console.log("in");
        if (React.isValidElement(child)) {
            return child.props.id;
        }
        return null;
    })?.filter(Boolean), [children]);
    const style = useMemo(() => Object.assign({
        flexDirection: direction,
        gap,
    }, styleProp), [gap, direction, styleProp]);
    const horizontal = ["row", "row-reverse"].includes(style.flexDirection);
    useDraggableStack({
        gap: style.gap,
        horizontal,
        initialOrder,
        onOrderChange,
        onOrderUpdate,
        shouldSwapWorklet,
    });
    return React.createElement(View, { style: style }, children);
};
//# sourceMappingURL=DraggableStack.js.map