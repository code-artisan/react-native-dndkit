import { useLayoutEffect } from "react";
import { runOnUI, useAnimatedReaction, useSharedValue } from "react-native-reanimated";
import { useDndContext } from "../DndContext";
import { useLatestSharedValue, useNodeRef } from "../hooks";
import { assert, isReanimatedSharedValue } from "../utils";
/**
 * useDroppable is a custom hook that provides functionality for making a component droppable within a drag and drop context.
 *
 * @function
 * @example
 * const { setNodeRef, setNodeLayout, activeId, panGestureState } = useDroppable({ id: 'droppable-1' });
 *
 * @param {object} options - The options that define the behavior of the droppable component.
 * @param {string} options.id - A unique identifier for the droppable component.
 * @param {object} [options.data={}] - Optional data associated with the droppable component.
 * @param {boolean} [options.disabled=false] - A flag that indicates whether the droppable component is disabled.
 *
 * @returns {object} Returns an object with properties and methods related to the droppable component.
 * @property {Function} setNodeRef - A function that can be used to set the ref of the droppable component.
 * @property {Function} setNodeLayout - A function that handles the layout event of the droppable component.
 * @property {string} activeId - The unique identifier of the currently active droppable component.
 * @property {object} panGestureState - An object representing the current state of the draggable component within the context.
 */
export const useDroppable = ({ id, data = {}, disabled = false }) => {
    const { droppableLayouts, droppableOptions, droppableActiveId, containerRef, panGestureState } = useDndContext();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [node, setNodeRef] = useNodeRef();
    //            ^?
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const sharedData = isReanimatedSharedValue(data) ? data : useLatestSharedValue(data);
    const layout = useSharedValue({
        x: 0,
        y: 0,
        width: 0,
        height: 0,
    });
    useAnimatedReaction(() => disabled, (next, prev) => {
        if (next !== prev) {
            droppableOptions.value[id].disabled = disabled;
        }
    }, [disabled, droppableOptions]);
    useLayoutEffect(() => {
        const runLayoutEffect = () => {
            "worklet";
            droppableLayouts.value[id] = layout;
            droppableOptions.value[id] = { id, data: sharedData, disabled };
        };
        runOnUI(runLayoutEffect)();
        return () => {
            const runLayoutEffect = () => {
                "worklet";
                delete droppableLayouts.value[id];
                delete droppableOptions.value[id];
            };
            // if(node && node.key === key)
            runOnUI(runLayoutEffect)();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const onLayout = () => {
        assert(containerRef.current);
        node.current?.measureLayout(containerRef.current, (x, y, width, height) => {
            layout.value = { x, y, width, height };
        });
    };
    return { setNodeRef, setNodeLayout: onLayout, activeId: droppableActiveId, panGestureState };
};
//# sourceMappingURL=useDroppable.js.map