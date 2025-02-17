import {ReferenceVisitorOptions} from "../reference-visitor-options.js";
import {TS} from "../../../../../../../type/ts.js";

export function checkVariableStatement({node, continuation, markIdentifiersAsReferenced}: ReferenceVisitorOptions<TS.VariableStatement>): string[] {
	const referencedIdentifiers = continuation(node.declarationList);
	markIdentifiersAsReferenced(node, ...referencedIdentifiers);

	return referencedIdentifiers;
}
