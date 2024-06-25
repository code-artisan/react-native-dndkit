import { type FunctionComponent, type PropsWithChildren } from "react";
import { type ViewProps } from "react-native";
import { type AnimatedProps } from "react-native-reanimated";
import { type UseDraggableOptions } from "../hooks";
import type { AnimatedStyleWorklet } from "../types";
export type DroppableProps = AnimatedProps<ViewProps> & UseDraggableOptions & {
    animatedStyleWorklet?: AnimatedStyleWorklet;
    activeOpacity?: number;
};
/**
 * Droppable is a React functional component that can be used to create a drop target in a Drag and Drop context.
 *
 * @component
 * @example
 * <Droppable id="droppable-1" data={{ accepts: ["draggable-1"] }}>
 *   <Text>Drop here!</Text>
 * </Droppable>
 *
 * @param {object} props - The properties that define the Droppable component.
 * @param {string} props.id - A unique identifier for the Droppable component.
 * @param {boolean} props.disabled - A flag that indicates whether the Droppable component is disabled.
 * @param {object} props.data - An object that contains data associated with the Droppable component.
 * @param {object} props.style - An object that defines the style of the Droppable component.
 * @param {number} props.activeOpacity - A number that defines the opacity of the Droppable component when it is active.
 * @param {Function} props.animatedStyleWorklet - A worklet function that modifies the animated style of the Droppable component.
 * @returns {React.Component} Returns a Droppable component that can serve as a drop target within a Drag and Drop context.
 */
export declare const Droppable: FunctionComponent<PropsWithChildren<DroppableProps>>;
//# sourceMappingURL=Droppable.d.ts.map