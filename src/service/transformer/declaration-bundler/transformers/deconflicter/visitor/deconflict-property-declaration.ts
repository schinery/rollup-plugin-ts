import {DeconflicterVisitorOptions} from "../deconflicter-visitor-options.js";
import {TS} from "../../../../../../type/ts.js";
import {preserveMeta} from "../../../util/clone-node-with-meta.js";

/**
 * Deconflicts the given PropertyDeclaration.
 */
export function deconflictPropertyDeclaration(options: DeconflicterVisitorOptions<TS.PropertyDeclaration>): TS.PropertyDeclaration | undefined {
	const {node, continuation, lexicalEnvironment, factory, typescript} = options;
	const nameContResult = typescript.isIdentifier(node.name) ? node.name : continuation(node.name, {lexicalEnvironment});

	const typeContResult = node.type == null ? undefined : continuation(node.type, {lexicalEnvironment});
	const initializerContResult = node.initializer == null ? undefined : continuation(node.initializer, {lexicalEnvironment});

	const isIdentical = nameContResult === node.name && typeContResult === node.type && initializerContResult === node.initializer;

	if (isIdentical) {
		return node;
	}

	return preserveMeta(
		factory.updatePropertyDeclaration(node, node.decorators, node.modifiers, nameContResult, node.questionToken ?? node.exclamationToken, typeContResult, initializerContResult),
		node,
		options
	);
}
