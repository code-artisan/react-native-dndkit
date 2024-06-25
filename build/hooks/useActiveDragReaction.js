import { State } from "react-native-gesture-handler";
import { useAnimatedReaction } from "react-native-reanimated";
import { useDndContext } from "../DndContext";
export const useActiveDragReaction = (id, callback) => {
    const { draggableActiveId: activeId, panGestureState } = useDndContext();
    useAnimatedReaction(() => activeId.value === id && [State.BEGAN, State.ACTIVE].includes(panGestureState.value), (next, prev) => {
        if (next !== prev) {
            callback(next);
        }
    }, []);
};
//# sourceMappingURL=useActiveDragReaction.js.map