import { type SharedValue } from "react-native-reanimated";
export type SharedValues<T extends Record<string, string | number | boolean>> = {
    [K in keyof T]: SharedValue<T[K]>;
};
export declare const useSharedValuePair: (x: number, y: number) => SharedValue<number>[];
//# sourceMappingURL=useSharedValuePair.d.ts.map