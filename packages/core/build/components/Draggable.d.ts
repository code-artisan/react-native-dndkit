import { type FunctionComponent, type PropsWithChildren } from "react";
import { type ViewProps } from "react-native";
import { type AnimatedProps } from "react-native-reanimated";
import { type DraggableConstraints, type UseDroppableOptions } from "../hooks";
import type { AnimatedStyleWorklet } from "../types";
export type DraggableProps = AnimatedProps<ViewProps> & UseDroppableOptions & Partial<DraggableConstraints> & {
    animatedStyleWorklet?: AnimatedStyleWorklet;
    activeOpacity?: number;
};
/**
 * Draggable is a React functional component that can be used to create elements that can be dragged within a Drag and Drop context.
 *
 * @component
 * @example
 * <Draggable id="draggable-1" data={{ label: "Example" }}>
 *   <Text>Drag me!</Text>
 * </Draggable>
 *
 * @param {object} props - The properties that define the Draggable component.
 * @param {string} props.id - A unique identifier for the Draggable component.
 * @param {object} props.data - An object that contains data associated with the Draggable component.
 * @param {boolean} props.disabled - A flag that indicates whether the Draggable component is disabled.
 * @param {number} props.activationDelay - A number representing the duration, in milliseconds, that this draggable item needs to be held for before allowing a drag to start.
 * @param {number} props.activationTolerance - A number representing the distance, in pixels, of motion that is tolerated before the drag operation is aborted.
 * @param {object} props.style - An object that defines the style of the Draggable component.
 * @param {number} props.activeOpacity - A number that defines the opacity of the Draggable component when it is active.
 * @param {Function} props.animatedStyleWorklet - A worklet function that modifies the animated style of the Draggable component.
 * @returns {React.Component} Returns a Draggable component that can be moved by the user within a Drag and Drop context.
 */
export declare const Draggable: FunctionComponent<PropsWithChildren<DraggableProps>>;
//# sourceMappingURL=Draggable.d.ts.map