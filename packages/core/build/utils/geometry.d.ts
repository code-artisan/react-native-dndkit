export type Point<T = number> = {
    x: T;
    y: T;
};
export type Offset = {
    x: number;
    y: number;
};
export type Rectangle = {
    x: number;
    y: number;
    width: number;
    height: number;
};
/**
 * @summary Split a `Rectangle` in two
 * @worklet
 */
export declare const splitLayout: (layout: Rectangle, axis: "x" | "y") => {
    x: number;
    y: number;
    width: number;
    height: number;
}[];
/**
 * @summary Checks if a `Point` is included inside a `Rectangle`
 * @worklet
 */
export declare const includesPoint: (layout: Rectangle, { x, y }: Point, strict?: boolean) => boolean;
/**
 * @summary Checks if a `Rectangle` overlaps with another `Rectangle`
 * @worklet
 */
export declare const overlapsRectangle: (layout: Rectangle, other: Rectangle) => boolean;
/**
 * @summary Checks if a `Rectange` overlaps with another `Rectangle` with a margin
 * @worklet
 */
export declare const overlapsRectangleBy: (layout: Rectangle, other: Rectangle, by: number) => boolean;
/**
 * @summary Apply an offset to a layout
 * @worklet
 */
export declare const applyOffset: (layout: Rectangle, { x, y }: Offset) => Rectangle;
/**
 * @summary Compute a center point
 * @worklet
 */
export declare const centerPoint: (layout: Rectangle) => Point;
/**
 * @summary Compute a center axis
 * @worklet
 */
export declare const centerAxis: (layout: Rectangle, horizontal: boolean) => number;
/**
 * @summary Checks if a `Rectangle` overlaps with an axis
 * @worklet
 */
export declare const overlapsAxis: (layout: Rectangle, axis: number, horizontal: boolean) => boolean;
export declare const getDistance: (x: number, y: number) => number;
//# sourceMappingURL=geometry.d.ts.map