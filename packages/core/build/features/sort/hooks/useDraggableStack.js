import { useMemo } from "react";
import { useAnimatedReaction } from "react-native-reanimated";
import { useDndContext } from "../../../DndContext";
import { swapByItemHorizontalAxis, swapByItemVerticalAxis } from "../../../utils";
import { useDraggableSort } from "./useDraggableSort";
export const useDraggableStack = ({ initialOrder, onOrderChange, onOrderUpdate, gap = 0, horizontal = false, shouldSwapWorklet, }) => {
    const { draggableActiveId, draggableOffsets, draggableRestingOffsets, draggableLayouts } = useDndContext();
    const axis = horizontal ? "x" : "y";
    const size = horizontal ? "width" : "height";
    const worklet = useMemo(() => shouldSwapWorklet ? shouldSwapWorklet : horizontal ? swapByItemHorizontalAxis : swapByItemVerticalAxis, [horizontal, shouldSwapWorklet]);
    const { draggablePlaceholderIndex, draggableSortOrder } = useDraggableSort({
        horizontal,
        initialOrder,
        onOrderChange,
        onOrderUpdate,
        shouldSwapWorklet: worklet,
    });
    // Track sort order changes and update the offsets
    useAnimatedReaction(() => draggableSortOrder.value, (nextOrder, prevOrder) => {
        // Ignore initial reaction
        if (prevOrder === null) {
            return;
        }
        const { value: activeId } = draggableActiveId;
        const { value: layouts } = draggableLayouts;
        const { value: offsets } = draggableOffsets;
        const { value: restingOffsets } = draggableRestingOffsets;
        if (!activeId) {
            return;
        }
        const activeLayout = layouts[activeId].value;
        const prevActiveIndex = prevOrder.findIndex((id) => id === activeId);
        const nextActiveIndex = nextOrder.findIndex((id) => id === activeId);
        const nextActiveOffset = { x: 0, y: 0 };
        const restingOffset = restingOffsets[activeId];
        // return;
        for (let nextIndex = 0; nextIndex < nextOrder.length; nextIndex++) {
            const itemId = nextOrder[nextIndex];
            // Skip the active item
            if (itemId === activeId) {
                continue;
            }
            // @TODO grid x,y
            // Skip items that haven't changed position
            const prevIndex = prevOrder.findIndex((id) => id === itemId);
            if (nextIndex === prevIndex) {
                continue;
            }
            // Calculate the directional offset
            const moveCol = nextIndex - prevIndex;
            // Apply the offset to the item from its resting position
            offsets[itemId][axis].value =
                restingOffsets[itemId][axis].value + moveCol * (activeLayout[size] + gap);
            // Reset resting offsets to new updated position
            restingOffsets[itemId][axis].value = offsets[itemId][axis].value;
            // Accummulate the directional offset for the active item
            if (nextIndex < nextActiveIndex && prevIndex > prevActiveIndex) {
                nextActiveOffset[axis] += layouts[itemId].value[size] + gap;
            }
            else if (nextIndex > nextActiveIndex && prevIndex < prevActiveIndex) {
                nextActiveOffset[axis] -= layouts[itemId].value[size] + gap;
            }
        }
        // Update the active item offset
        restingOffset[axis].value += nextActiveOffset[axis];
    }, [
        horizontal,
        axis,
        size,
        worklet,
        draggableSortOrder,
        draggableLayouts,
        draggableRestingOffsets,
        draggableActiveId,
        draggableOffsets,
    ]);
    return { draggablePlaceholderIndex, draggableSortOrder };
};
//# sourceMappingURL=useDraggableStack.js.map