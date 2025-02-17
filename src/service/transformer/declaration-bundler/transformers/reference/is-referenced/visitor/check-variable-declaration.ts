import {ReferenceVisitorOptions} from "../reference-visitor-options.js";
import {TS} from "../../../../../../../type/ts.js";

export function checkVariableDeclaration({node, continuation}: ReferenceVisitorOptions<TS.VariableDeclaration>): string[] {
	const referencedIdentifiers: string[] = [];
	if (node.initializer != null) {
		referencedIdentifiers.push(...continuation(node.initializer));
	}

	if (node.type != null) {
		referencedIdentifiers.push(...continuation(node.type));
	}

	return referencedIdentifiers;
}
