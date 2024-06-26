import { useAnimatedReaction } from "react-native-reanimated";
import { useDndContext } from "../DndContext";
export const useActiveDropReaction = (id, callback) => {
    const { droppableActiveId: activeId } = useDndContext();
    useAnimatedReaction(() => activeId.value === id, (next, prev) => {
        if (next !== prev) {
            callback(next);
        }
    }, []);
};
//# sourceMappingURL=useActiveDropReaction.js.map