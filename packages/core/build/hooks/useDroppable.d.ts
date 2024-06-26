import type { Data, UniqueIdentifier } from "../types";
export type UseDroppableOptions = {
    id: UniqueIdentifier;
    data?: Data;
    disabled?: boolean;
};
/**
 * useDroppable is a custom hook that provides functionality for making a component droppable within a drag and drop context.
 *
 * @function
 * @example
 * const { setNodeRef, setNodeLayout, activeId, panGestureState } = useDroppable({ id: 'droppable-1' });
 *
 * @param {object} options - The options that define the behavior of the droppable component.
 * @param {string} options.id - A unique identifier for the droppable component.
 * @param {object} [options.data={}] - Optional data associated with the droppable component.
 * @param {boolean} [options.disabled=false] - A flag that indicates whether the droppable component is disabled.
 *
 * @returns {object} Returns an object with properties and methods related to the droppable component.
 * @property {Function} setNodeRef - A function that can be used to set the ref of the droppable component.
 * @property {Function} setNodeLayout - A function that handles the layout event of the droppable component.
 * @property {string} activeId - The unique identifier of the currently active droppable component.
 * @property {object} panGestureState - An object representing the current state of the draggable component within the context.
 */
export declare const useDroppable: ({ id, data, disabled }: UseDroppableOptions) => {
    setNodeRef: (element: any) => void;
    setNodeLayout: (event: import("react-native").LayoutChangeEvent) => void;
    activeId: import("react-native-reanimated").SharedValue<UniqueIdentifier | null>;
    panGestureState: import("react-native-reanimated").SharedValue<import("react-native-gesture-handler/lib/typescript/typeUtils").ValueOf<{
        readonly UNDETERMINED: 0;
        readonly FAILED: 1;
        readonly BEGAN: 2;
        readonly CANCELLED: 3;
        readonly ACTIVE: 4;
        readonly END: 5;
    }>>;
};
//# sourceMappingURL=useDroppable.d.ts.map