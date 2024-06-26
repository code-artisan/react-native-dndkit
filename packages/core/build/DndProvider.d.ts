import React from "react";
import { LayoutChangeEvent, LayoutRectangle, StyleProp, ViewStyle } from "react-native";
import { GestureStateChangeEvent, GestureUpdateEvent, PanGestureHandlerEventPayload } from "react-native-gesture-handler";
import { HapticFeedbackTypes } from "react-native-haptic-feedback";
import { type WithSpringConfig } from "react-native-reanimated";
import { type DndContextValue, type ItemOptions } from "./DndContext";
import type { UniqueIdentifier } from "./types";
export type DndProviderProps = {
    springConfig?: WithSpringConfig;
    activationDelay?: number;
    minDistance?: number;
    disabled?: boolean;
    onLayout?: (ev: LayoutChangeEvent) => void;
    onDragEnd?: (ev: {
        active: ItemOptions;
        over: ItemOptions | null;
    }) => void;
    onBegin?: (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>, meta: {
        activeId: UniqueIdentifier;
        activeLayout: LayoutRectangle;
    }) => void;
    onUpdate?: (event: GestureUpdateEvent<PanGestureHandlerEventPayload>, meta: {
        activeId: UniqueIdentifier;
        activeLayout: LayoutRectangle;
    }) => void;
    onFinalize?: (event: GestureStateChangeEvent<PanGestureHandlerEventPayload>, meta: {
        activeId: UniqueIdentifier;
        activeLayout: LayoutRectangle;
    }) => void;
    hapticFeedback?: HapticFeedbackTypes;
    style?: StyleProp<ViewStyle>;
    debug?: boolean;
};
export type DndProviderHandle = Pick<DndContextValue, "draggableLayouts" | "draggableOffsets" | "draggableRestingOffsets" | "draggableActiveId">;
export declare const DndProvider: React.ForwardRefExoticComponent<DndProviderProps & {
    children?: React.ReactNode | undefined;
} & React.RefAttributes<DndProviderHandle>>;
//# sourceMappingURL=DndProvider.d.ts.map