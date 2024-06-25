import { type FlexStyle } from "react-native";
import { type UseDraggableSortOptions } from "./useDraggableSort";
export type UseDraggableGridOptions = Pick<UseDraggableSortOptions, "initialOrder" | "onOrderChange" | "onOrderUpdate" | "shouldSwapWorklet"> & {
    gap?: number;
    size: number;
    direction: FlexStyle["flexDirection"];
};
export declare const useDraggableGrid: ({ initialOrder, onOrderChange, onOrderUpdate, gap, size, direction, shouldSwapWorklet, }: UseDraggableGridOptions) => {
    draggablePlaceholderIndex: import("react-native-reanimated").SharedValue<number>;
    draggableSortOrder: import("react-native-reanimated").SharedValue<import("../../..").UniqueIdentifier[]>;
};
//# sourceMappingURL=useDraggableGrid.d.ts.map