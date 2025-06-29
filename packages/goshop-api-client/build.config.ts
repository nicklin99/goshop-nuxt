import { defineBuildConfig } from "unbuild"
// unbuild.config.js
export default defineBuildConfig({
    entries: [
        {
            input: "src/",
            outDir: "dist/",
            format: "esm",
            declaration: true,
        }
    ],
    // 其他高级配置
    externals: ['axios'],
})