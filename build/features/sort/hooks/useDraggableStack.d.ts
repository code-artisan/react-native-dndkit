import { type UseDraggableSortOptions } from "./useDraggableSort";
export type UseDraggableStackOptions = Pick<UseDraggableSortOptions, "initialOrder" | "onOrderChange" | "onOrderUpdate" | "shouldSwapWorklet"> & {
    gap?: number;
    horizontal?: boolean;
};
export declare const useDraggableStack: ({ initialOrder, onOrderChange, onOrderUpdate, gap, horizontal, shouldSwapWorklet, }: UseDraggableStackOptions) => {
    draggablePlaceholderIndex: import("react-native-reanimated").SharedValue<number>;
    draggableSortOrder: import("react-native-reanimated").SharedValue<import("../../..").UniqueIdentifier[]>;
};
//# sourceMappingURL=useDraggableStack.d.ts.map