import {TS} from "../../../../../../type/ts.js";
import {TraceIdentifiersVisitorOptions} from "../trace-identifiers-visitor-options.js";

/**
 * Deconflicts the given Identifier.
 */
export function traceIdentifiersForIdentifier({node, addIdentifier}: TraceIdentifiersVisitorOptions<TS.Identifier>): void {
	addIdentifier(node.text);
}
