import {CustomTransformersFunction} from "./custom-transformer-options.js";
import {TS} from "../../type/ts.js";
import {isDefined} from "../is-defined/is-defined.js";

/**
 * Merges all of the given transformers
 */
export function mergeTransformers(...transformers: (TS.CustomTransformers | CustomTransformersFunction | undefined)[]): CustomTransformersFunction {
	return options => {
		const instantiatedTransformers = transformers
			.filter(isDefined)
			.map((transformer: TS.CustomTransformers | CustomTransformersFunction) => (typeof transformer === "function" ? transformer(options) : transformer));

		const beforeTransformers = ([] as (TS.TransformerFactory<TS.SourceFile> | TS.CustomTransformerFactory)[]).concat.apply(
			[],
			instantiatedTransformers.map(transformer => transformer.before!).filter(beforeTransformer => beforeTransformer != null)
		);

		const afterTransformers = ([] as (TS.TransformerFactory<TS.SourceFile> | TS.CustomTransformerFactory)[]).concat.apply(
			[],
			instantiatedTransformers.map(transformer => transformer.after!).filter(afterTransformer => afterTransformer != null)
		);

		const afterDeclarationsTransformers = ([] as (TS.TransformerFactory<TS.Bundle | TS.SourceFile> | TS.CustomTransformerFactory)[]).concat.apply(
			[],
			instantiatedTransformers.map(transformer => transformer.afterDeclarations!).filter(afterDeclarationTransformer => afterDeclarationTransformer != null)
		);

		return {
			before: beforeTransformers.length === 0 ? undefined : beforeTransformers,
			after: afterTransformers.length === 0 ? undefined : afterTransformers,
			afterDeclarations: afterDeclarationsTransformers.length === 0 ? undefined : afterDeclarationsTransformers
		};
	};
}
