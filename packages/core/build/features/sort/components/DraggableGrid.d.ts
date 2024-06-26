import { type FunctionComponent, type PropsWithChildren } from "react";
import { LayoutChangeEvent, type FlexStyle, type ViewProps } from "react-native";
import { type UseDraggableGridOptions } from "../hooks/useDraggableGrid";
export type DraggableGridProps = Pick<ViewProps, "style"> & Pick<UseDraggableGridOptions, "onOrderChange" | "onOrderUpdate" | "shouldSwapWorklet"> & {
    direction?: FlexStyle["flexDirection"];
    size: number;
    gap?: number;
    onLayout?: (e: LayoutChangeEvent) => void;
};
export declare const DraggableGrid: FunctionComponent<PropsWithChildren<DraggableGridProps>>;
//# sourceMappingURL=DraggableGrid.d.ts.map