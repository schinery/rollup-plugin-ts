import {ReferenceVisitorOptions} from "../reference-visitor-options.js";
import {TS} from "../../../../../../../type/ts.js";

export function checkVariableDeclarationList({node, continuation}: ReferenceVisitorOptions<TS.VariableDeclarationList>): string[] {
	const referencedIdentifiers: string[] = [];

	for (const declaration of node.declarations) {
		referencedIdentifiers.push(...continuation(declaration));
	}

	return referencedIdentifiers;
}
