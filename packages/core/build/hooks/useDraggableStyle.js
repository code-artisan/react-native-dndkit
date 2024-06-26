import { useAnimatedStyle } from "react-native-reanimated";
import { useDndContext } from "..";
export const useDraggableStyle = (id, callback) => {
    const { draggableStates: states, draggableActiveId: activeId, draggableOptions: options } = useDndContext();
    const state = states.value[id];
    return useAnimatedStyle(() => {
        const isActive = activeId.value === id;
        const isActing = state?.value === "acting";
        const isDisabled = !options.value[id]?.disabled;
        return callback({ isActive, isActing, isDisabled });
    }, [id, state]);
};
//# sourceMappingURL=useDraggableStyle.js.map