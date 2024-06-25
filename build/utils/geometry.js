/**
 * @summary Split a `Rectangle` in two
 * @worklet
 */
export const splitLayout = (layout, axis) => {
    "worklet";
    const { x, y, width, height } = layout;
    if (axis === "x") {
        return [
            { x, y, width: width / 2, height },
            { x: x + width / 2, y, width: width / 2, height },
        ];
    }
    return [
        { x, y, width, height: height / 2 },
        { x, y: y + height / 2, width, height: height / 2 },
    ];
};
/**
 * @summary Checks if a `Point` is included inside a `Rectangle`
 * @worklet
 */
export const includesPoint = (layout, { x, y }, strict) => {
    "worklet";
    if (strict) {
        return layout.x < x && x < layout.x + layout.width && layout.y < y && y < layout.y + layout.height;
    }
    return layout.x <= x && x <= layout.x + layout.width && layout.y <= y && y <= layout.y + layout.height;
};
/**
 * @summary Checks if a `Rectangle` overlaps with another `Rectangle`
 * @worklet
 */
export const overlapsRectangle = (layout, other) => {
    "worklet";
    return (layout.x < other.x + other.width &&
        layout.x + layout.width > other.x &&
        layout.y < other.y + other.height &&
        layout.y + layout.height > other.y);
};
/**
 * @summary Checks if a `Rectange` overlaps with another `Rectangle` with a margin
 * @worklet
 */
export const overlapsRectangleBy = (layout, other, by) => {
    "worklet";
    return (layout.x < other.x + other.width - by &&
        layout.x + layout.width > other.x + by &&
        layout.y < other.y + other.height - by &&
        layout.y + layout.height > other.y + by);
};
/**
 * @summary Apply an offset to a layout
 * @worklet
 */
export const applyOffset = (layout, { x, y }) => {
    "worklet";
    return {
        width: layout.width,
        height: layout.height,
        x: layout.x + x,
        y: layout.y + y,
    };
};
/**
 * @summary Compute a center point
 * @worklet
 */
export const centerPoint = (layout) => {
    "worklet";
    return {
        x: layout.x + layout.width / 2,
        y: layout.y + layout.height / 2,
    };
};
/**
 * @summary Compute a center axis
 * @worklet
 */
export const centerAxis = (layout, horizontal) => {
    "worklet";
    return horizontal ? layout.x + layout.width / 2 : layout.y + layout.height / 2;
};
/**
 * @summary Checks if a `Rectangle` overlaps with an axis
 * @worklet
 */
export const overlapsAxis = (layout, axis, horizontal) => {
    "worklet";
    return horizontal
        ? layout.x < axis && layout.x + layout.width > axis
        : layout.y < axis && layout.y + layout.height > axis;
};
export const getDistance = (x, y) => {
    "worklet";
    return Math.sqrt(Math.abs(x) ** 2 + Math.abs(y) ** 2);
};
//# sourceMappingURL=geometry.js.map