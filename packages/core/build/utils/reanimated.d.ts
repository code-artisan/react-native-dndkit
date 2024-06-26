import { LayoutRectangle } from "react-native";
import { SharedValue, withSpring, type AnimatableValue, type WithSpringConfig } from "react-native-reanimated";
import type { SharedPoint } from "../hooks";
import type { AnyData } from "../types";
export declare const DEFAULT_SPRING_CONFIG: WithSpringConfig;
export declare const FAST_SPRING_CONFIG: WithSpringConfig;
export declare const DEFAULT_SPRING_CONFIG_3: WithSpringConfig;
export declare const SLOW_SPRING_CONFIG: WithSpringConfig;
/**
 * @summary Waits for n-callbacks
 * @worklet
 */
export declare const waitForAll: <T extends unknown[]>(callback: (...args: T) => void, count?: number) => ((...args: unknown[]) => void)[];
export type AnimationPointCallback = (finished: [boolean | undefined, boolean | undefined], current: [AnimatableValue | undefined, AnimatableValue | undefined]) => void;
export declare const withDefaultSpring: typeof withSpring;
/**
 * @summary Easily animate a `SharePoint`
 * @worklet
 */
export declare const animatePointWithSpring: (point: SharedPoint, [toValueX, toValueY]: [number, number], [configX, configY]?: [WithSpringConfig | undefined, WithSpringConfig | undefined], callback?: AnimationPointCallback) => void;
export declare const moveArrayIndex: <T>(input: T[], from: number, to: number) => T[];
export declare const stringifySharedPoint: ({ x, y }: SharedPoint) => string;
export declare const stringifyLayout: ({ x, y, width, height }: LayoutRectangle) => string;
export declare const floorLayout: ({ x, y, width, height }: LayoutRectangle) => {
    x: number;
    y: number;
    width: number;
    height: number;
};
/**
 * @summary Checks if a value is a `Reanimated` shared value
 * @param {object} value - The value to check
 * @returns {boolean} Whether the value is a `Reanimated` shared value
 */
export declare const isReanimatedSharedValue: (value: unknown) => value is SharedValue<AnyData>;
//# sourceMappingURL=reanimated.d.ts.map