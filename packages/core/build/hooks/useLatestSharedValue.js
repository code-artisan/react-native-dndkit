import { useAnimatedReaction, useSharedValue } from "react-native-reanimated";
export function useLatestSharedValue(value, dependencies = [value]) {
    const sharedValue = useSharedValue(value);
    useAnimatedReaction(() => value, (next, prev) => {
        // Ignore initial reaction
        if (prev === null) {
            return;
        }
        sharedValue.value = next;
    }, [...dependencies, sharedValue]);
    return sharedValue;
}
//# sourceMappingURL=useLatestSharedValue.js.map