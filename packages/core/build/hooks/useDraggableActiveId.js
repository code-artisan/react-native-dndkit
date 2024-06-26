import { useState } from "react";
import { runOnJS, useAnimatedReaction } from "react-native-reanimated";
import { useDndContext } from "../DndContext";
export const useDraggableActiveId = () => {
    const [activeId, setActiveId] = useState(null);
    const { draggableActiveId } = useDndContext();
    useAnimatedReaction(() => draggableActiveId.value, (next, prev) => {
        if (next !== prev) {
            runOnJS(setActiveId)(next);
        }
    }, [draggableActiveId]);
    return activeId;
};
//# sourceMappingURL=useDraggableActiveId.js.map