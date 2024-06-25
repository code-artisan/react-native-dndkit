import { useSharedValue } from "react-native-reanimated";
export const useSharedValuePair = (x, y) => {
    return [useSharedValue(x), useSharedValue(y)];
};
//# sourceMappingURL=useSharedValuePair.js.map