import { useAnimatedStyle } from "react-native-reanimated";
import { useDndContext } from "..";
export const useDroppableStyle = (id, callback) => {
    const { droppableActiveId: activeId, droppableOptions: options } = useDndContext();
    return useAnimatedStyle(() => {
        const isActive = activeId.value === id;
        const isDisabled = !options.value[id]?.disabled;
        return callback({ isActive, isDisabled });
    }, []);
};
//# sourceMappingURL=useDroppableStyle.js.map