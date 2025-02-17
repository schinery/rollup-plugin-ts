import {ReferenceVisitorOptions} from "../reference-visitor-options.js";
import {TS} from "../../../../../../../type/ts.js";

export function checkIndexedAccessTypeNode({node, continuation}: ReferenceVisitorOptions<TS.IndexedAccessTypeNode>): string[] {
	const referencedIdentifiers: string[] = [];

	referencedIdentifiers.push(...continuation(node.indexType));
	referencedIdentifiers.push(...continuation(node.objectType));
	return referencedIdentifiers;
}
