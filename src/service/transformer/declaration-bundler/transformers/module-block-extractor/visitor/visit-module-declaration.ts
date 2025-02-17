import {ModuleBlockExtractorVisitorOptions} from "../module-block-extractor-visitor-options.js";
import {TS} from "../../../../../../type/ts.js";

export function visitModuleDeclaration({node, typescript}: ModuleBlockExtractorVisitorOptions<TS.ModuleDeclaration>): TS.VisitResult<TS.Node> {
	if (node.body == null) return undefined;
	if (typescript.isModuleBlock(node.body) && typescript.isStringLiteralLike(node.name)) {
		return [...node.body.statements];
	}

	return node;
}
