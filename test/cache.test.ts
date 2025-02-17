import test from "ava";
import {withTypeScript} from "./util/ts-macro.js";
import {formatCode} from "./util/format-code.js";
import {generateRollupBundle} from "./setup/setup-rollup.js";

test.serial("Declaration bundling works properly when Rollup is using a cache. #1", withTypeScript, async (t, {typescript}) => {
	const bundle = await generateRollupBundle(
		[
			{
				entry: true,
				fileName: "index.ts",
				text: `\
				export default () => 42
				`
			}
		],
		{typescript, runCachedBuild: true, debug: false}
	);
	const {
		declarations: [file]
	} = bundle;

	t.deepEqual(
		formatCode(file.code),
		formatCode(`\
		declare const _default: () => number;
		export { _default as default };
		`)
	);
});
