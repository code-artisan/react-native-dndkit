import { type FunctionComponent, type PropsWithChildren } from "react";
import { type FlexStyle, type ViewProps } from "react-native";
import { type UseDraggableStackOptions } from "../hooks/useDraggableStack";
export type DraggableStackProps = Pick<ViewProps, "style"> & Pick<UseDraggableStackOptions, "onOrderChange" | "onOrderUpdate" | "shouldSwapWorklet"> & {
    direction?: FlexStyle["flexDirection"];
    gap?: number;
};
export declare const DraggableStack: FunctionComponent<PropsWithChildren<DraggableStackProps>>;
//# sourceMappingURL=DraggableStack.d.ts.map