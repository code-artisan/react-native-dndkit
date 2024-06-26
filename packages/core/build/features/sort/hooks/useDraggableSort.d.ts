import type { UniqueIdentifier } from "../../../types";
import { type Rectangle } from "../../../utils";
export type ShouldSwapWorklet = (activeLayout: Rectangle, itemLayout: Rectangle) => boolean;
export type UseDraggableSortOptions = {
    initialOrder?: UniqueIdentifier[];
    horizontal?: boolean;
    onOrderChange?: (order: UniqueIdentifier[]) => void;
    onOrderUpdate?: (nextOrder: UniqueIdentifier[], prevOrder: UniqueIdentifier[]) => void;
    shouldSwapWorklet?: ShouldSwapWorklet;
};
export declare const useDraggableSort: ({ horizontal, initialOrder, onOrderChange, onOrderUpdate, shouldSwapWorklet, }: UseDraggableSortOptions) => {
    draggablePlaceholderIndex: import("react-native-reanimated").SharedValue<number>;
    draggableSortOrder: import("react-native-reanimated").SharedValue<UniqueIdentifier[]>;
};
//# sourceMappingURL=useDraggableSort.d.ts.map