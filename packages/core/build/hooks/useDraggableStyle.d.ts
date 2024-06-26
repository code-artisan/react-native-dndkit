import type { AnimatedStyle, UniqueIdentifier } from "../types";
export type UseDraggableStyleCallback<StyleT extends AnimatedStyle> = (_: {
    isActive: boolean;
    isDisabled: boolean;
    isActing: boolean;
}) => StyleT;
export declare const useDraggableStyle: <StyleT extends AnimatedStyle>(id: UniqueIdentifier, callback: UseDraggableStyleCallback<StyleT>) => StyleT;
//# sourceMappingURL=useDraggableStyle.d.ts.map