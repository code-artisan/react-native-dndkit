import { DraggableState } from "../DndContext";
import { Data, UniqueIdentifier } from "../types";
export type DraggableConstraints = {
    activationDelay: number;
    activationTolerance: number;
};
export type UseDraggableOptions = Partial<DraggableConstraints> & {
    id: UniqueIdentifier;
    data?: Data;
    disabled?: boolean;
};
/**
 * useDraggable is a custom hook that provides functionality for making a component draggable within a drag and drop context.
 *
 * @function
 * @example
 * const { offset, setNodeRef, activeId, setNodeLayout, draggableState } = useDraggable({ id: 'draggable-1' });
 *
 * @param {object} options - The options that define the behavior of the draggable component.
 * @param {string} options.id - A unique identifier for the draggable component.
 * @param {object} [options.data={}] - Optional data associated with the draggable component.
 * @param {boolean} [options.disabled=false] - A flag that indicates whether the draggable component is disabled.
 * @param {number} [options.activationDelay=0] - A number representing the duration, in milliseconds, that this draggable item needs to be held for before allowing a drag to start.
 * @param {number} [options.activationTolerance=Infinity] - A number representing the distance, in points, of motion that is tolerated before the drag operation is aborted.
 *
 * @returns {object} Returns an object with properties and methods related to the draggable component.
 * @property {object} offset - An object representing the current offset of the draggable component.
 * @property {Function} setNodeRef - A function that can be used to set the ref of the draggable component.
 * @property {string} activeId - The unique identifier of the currently active draggable component.
 * @property {string} actingId - The unique identifier of the currently interacti draggable component.
 * @property {Function} setNodeLayout - A function that handles the layout event of the draggable component.
 * @property {object} draggableState - An object representing the current state of the draggable component.
 */
export declare const useDraggable: ({ id, data, disabled, activationDelay, activationTolerance, }: UseDraggableOptions) => {
    offset: import("./useSharedPoint").SharedPoint;
    state: import("react-native-reanimated").SharedValue<DraggableState>;
    setNodeRef: (element: any) => void;
    activeId: import("react-native-reanimated").SharedValue<UniqueIdentifier | null>;
    pendingId: import("react-native-reanimated").SharedValue<UniqueIdentifier | null>;
    setNodeLayout: (event: import("react-native").LayoutChangeEvent) => void;
    panGestureState: import("react-native-reanimated").SharedValue<import("react-native-gesture-handler/lib/typescript/typeUtils").ValueOf<{
        readonly UNDETERMINED: 0;
        readonly FAILED: 1;
        readonly BEGAN: 2;
        readonly CANCELLED: 3;
        readonly ACTIVE: 4;
        readonly END: 5;
    }>>;
};
//# sourceMappingURL=useDraggable.d.ts.map