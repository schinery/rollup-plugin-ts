import {TreeShakerVisitorOptions} from "../tree-shaker-visitor-options.js";
import {TS} from "../../../../../../type/ts.js";

export function visitTypeAliasDeclaration({node, continuation, factory}: TreeShakerVisitorOptions<TS.TypeAliasDeclaration>): TS.TypeAliasDeclaration | undefined {
	const nameContinuationResult = continuation(node.name);
	if (nameContinuationResult == null) {
		return undefined;
	}
	return node.name === nameContinuationResult
		? node
		: factory.updateTypeAliasDeclaration(node, node.decorators, node.modifiers, nameContinuationResult, node.typeParameters, node.type);
}
