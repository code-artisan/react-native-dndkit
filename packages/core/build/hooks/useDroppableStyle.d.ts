import type { AnimatedStyle, UniqueIdentifier } from "../types";
export type UseDroppableStyleCallback<StyleT extends AnimatedStyle> = (_: {
    isActive: boolean;
    isDisabled: boolean;
}) => StyleT;
export declare const useDroppableStyle: <StyleT extends AnimatedStyle>(id: UniqueIdentifier, callback: UseDroppableStyleCallback<StyleT>) => StyleT;
//# sourceMappingURL=useDroppableStyle.d.ts.map