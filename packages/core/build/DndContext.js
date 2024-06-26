import { createContext, useContext } from "react";
// @ts-expect-error ignore detached state
export const DndContext = createContext(null);
export const useDndContext = () => {
    return useContext(DndContext);
};
//# sourceMappingURL=DndContext.js.map