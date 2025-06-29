/**
 * @description Composable that prepares breakpoints-dependent refs
 * @returns {@link ReturnType<typeof useBreakpoints>}
 * @example
 * const { isTablet, isDesktop } = useBreakpoints();
 */
export declare const useBreakpoints: () => {
    isTablet: import("vue").Ref<boolean, boolean>;
    isDesktop: import("vue").Ref<boolean, boolean>;
};
