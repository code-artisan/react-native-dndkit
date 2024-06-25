import React, { Children, useMemo } from "react";
import { View } from "react-native";
import { useDraggableGrid } from "../hooks/useDraggableGrid";
export const DraggableGrid = ({ children, direction = "row", gap = 0, onLayout, onOrderChange, onOrderUpdate, shouldSwapWorklet, size, style: styleProp, }) => {
    const initialOrder = useMemo(() => Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return child.props.id;
        }
        return null;
    })?.filter(Boolean), [children]);
    const style = useMemo(() => Object.assign({
        flexDirection: direction,
        gap,
        flexWrap: "wrap",
    }, styleProp), [gap, direction, styleProp]);
    useDraggableGrid({
        direction: style.flexDirection,
        gap: style.gap,
        initialOrder,
        onOrderChange,
        onOrderUpdate,
        shouldSwapWorklet,
        size,
    });
    return <View style={style} onLayout={onLayout}>{children}</View>;
};
//# sourceMappingURL=DraggableGrid.js.map