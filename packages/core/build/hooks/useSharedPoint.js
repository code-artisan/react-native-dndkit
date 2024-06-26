import { useSharedValue } from "react-native-reanimated";
export const useSharedPoint = (x, y) => {
    return {
        x: useSharedValue(x),
        y: useSharedValue(y),
    };
};
//# sourceMappingURL=useSharedPoint.js.map