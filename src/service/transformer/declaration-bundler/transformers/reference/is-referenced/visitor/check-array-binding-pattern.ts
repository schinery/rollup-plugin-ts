import {ReferenceVisitorOptions} from "../reference-visitor-options.js";
import {TS} from "../../../../../../../type/ts.js";

export function checkArrayBindingPattern({node, continuation}: ReferenceVisitorOptions<TS.ArrayBindingPattern>): string[] {
	const referencedIdentifiers: string[] = [];

	for (const element of node.elements) {
		referencedIdentifiers.push(...continuation(element));
	}

	return referencedIdentifiers;
}
