import {TS} from "../../../../../type/ts.js";
import {SourceFileBundlerVisitorOptions} from "../source-file-bundler/source-file-bundler-visitor-options.js";

export interface ModuleBlockExtractorVisitorOptions<T extends TS.Node> extends SourceFileBundlerVisitorOptions {
	typescript: typeof TS;
	node: T;
	context: TS.TransformationContext;

	continuation<U extends TS.Node>(node: U): TS.VisitResult<TS.Node>;
	childContinuation<U extends TS.Node>(node: U): TS.VisitResult<TS.Node>;
}
