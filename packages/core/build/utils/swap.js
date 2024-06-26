import { centerAxis, centerPoint, includesPoint, overlapsAxis, } from "./geometry";
export const swapByItemCenterPoint = (activeLayout, itemLayout) => {
    "worklet";
    const itemCenterPoint = centerPoint(itemLayout);
    return includesPoint(activeLayout, itemCenterPoint);
};
export const swapByItemAxis = (activeLayout, itemLayout, horizontal) => {
    "worklet";
    const itemCenterAxis = centerAxis(itemLayout, horizontal);
    return overlapsAxis(activeLayout, itemCenterAxis, horizontal);
};
export const swapByItemHorizontalAxis = (activeLayout, itemLayout) => {
    "worklet";
    const itemCenterAxis = centerAxis(itemLayout, true);
    return overlapsAxis(activeLayout, itemCenterAxis, true);
};
export const swapByItemVerticalAxis = (activeLayout, itemLayout) => {
    "worklet";
    const itemCenterAxis = centerAxis(itemLayout, false);
    return overlapsAxis(activeLayout, itemCenterAxis, false);
};
//# sourceMappingURL=swap.js.map