import React from "react";
import Animated, { useAnimatedStyle } from "react-native-reanimated";
import { useDroppable } from "../hooks";
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
export const Droppable = ({ children, id, disabled, data, style, activeOpacity = 0.9, animatedStyleWorklet, ...otherProps }) => {
    const { setNodeRef, setNodeLayout, activeId } = useDroppable({
        id,
        disabled,
        data,
    });
    const animatedStyle = useAnimatedStyle(() => {
        const isActive = activeId.value === id;
        const style = {
            opacity: isActive ? activeOpacity : 1,
        };
        if (animatedStyleWorklet) {
            Object.assign(style, animatedStyleWorklet(style, { isActive, isDisabled: !!disabled }));
        }
        return style;
    }, [id, activeOpacity]);
    return (<Animated.View ref={setNodeRef} onLayout={setNodeLayout} style={[style, animatedStyle]} {...otherProps}>
      {children}
    </Animated.View>);
};
//# sourceMappingURL=Droppable.js.map