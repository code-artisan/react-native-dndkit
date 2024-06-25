import React from "react";
import Animated, { useAnimatedStyle, withSpring } from "react-native-reanimated";
import { useDraggable } from "../hooks";
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
export const Draggable = ({ children, id, data, disabled, style, activeOpacity = 0.9, activationDelay, activationTolerance, animatedStyleWorklet, ...otherProps }) => {
    const { setNodeRef, setNodeLayout, offset, state } = useDraggable({
        id,
        data,
        disabled,
        activationDelay,
        activationTolerance,
    });
    const animatedStyle = useAnimatedStyle(() => {
        const isActive = state.value === "dragging";
        const isActing = state.value === "acting";
        const zIndex = isActive ? 999 : isActing ? 998 : 1;
        const style = {
            opacity: isActive ? activeOpacity : 1,
            zIndex,
            transform: [
                {
                    // translateX: offset.x.value,
                    translateX: isActive
                        ? offset.x.value
                        : withSpring(offset.x.value, { damping: 100, stiffness: 1000 }),
                },
                {
                    // translateY: offset.y.value,
                    translateY: isActive
                        ? offset.y.value
                        : withSpring(offset.y.value, { damping: 100, stiffness: 1000 }),
                },
            ],
        };
        if (animatedStyleWorklet) {
            Object.assign(style, animatedStyleWorklet(style, { isActive, isActing, isDisabled: !!disabled }));
        }
        return style;
    }, [id, state, activeOpacity]);
    return (<Animated.View ref={setNodeRef} onLayout={setNodeLayout} style={[style, animatedStyle]} {...otherProps}>
      {children}
    </Animated.View>);
};
//# sourceMappingURL=Draggable.js.map