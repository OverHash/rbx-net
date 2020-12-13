import t from "@rbxts/t";
import ServerAsyncFunction from "../server/ServerAsyncFunction";
import ClientAsyncFunction from "../client/ClientAsyncFunction";
import ClientEvent from "../client/ClientEvent";
import { createTypeChecker, NetMiddleware } from "../middleware";
import { MiddlewareOverload } from "../helpers/EventConstructor";
import ServerEvent from "../server/ServerEvent";
import ClientFunction from "../client/ClientFunction";
import ServerFunction from "../server/ServerFunction";

export interface FunctionDeclaration {
	Type: "Function";
	ServerMiddleware?: [...mw: MiddlewareOverload<any>];
	// ClientArguments?: ReadonlyArray<CheckLike>;
}

export interface AsyncFunctionDeclaration {
	Type: "AsyncFunction";
	ServerMiddleware?: [...mw: MiddlewareOverload<any>];
	ClientArguments?: ReadonlyArray<CheckLike>;
}

export interface EventDeclaration {
	Type: "Event";
	ServerMiddleware?: [...mw: MiddlewareOverload<any>];
	ClientArguments?: ReadonlyArray<CheckLike>;
}

type RemoteDeclarations = Record<string, FunctionDeclaration | EventDeclaration | AsyncFunctionDeclaration>;

type CheckLike = (value: unknown) => boolean;
export type Check<T> = (value: unknown) => value is T;
type InferCheck<T> = T extends (value: unknown) => value is infer A ? A : unknown;
type CheckTupleToInferedValues<Tuple extends readonly [...defined[]]> = {
	[Index in keyof Tuple]: InferCheck<Tuple[Index]>;
};
type InferArgs<T extends readonly CheckLike[] | undefined> = T extends readonly [...CheckLike[]]
	? CheckTupleToInferedValues<T>
	: unknown[];

type InferServerEvent<T extends EventDeclaration> = T["ServerMiddleware"] extends [...mw: MiddlewareOverload<infer A>]
	? ServerEvent<A, InferArgs<T["ClientArguments"]>>
	: ServerEvent<unknown[], InferArgs<T["ClientArguments"]>>;

type InferClientEvent<T extends EventDeclaration> = T["ServerMiddleware"] extends [...mw: MiddlewareOverload<infer A>]
	? ClientEvent<InferArgs<T["ClientArguments"]>, A>
	: ClientEvent<InferArgs<T["ClientArguments"]>, unknown[]>;

type InferClientFunction<T extends FunctionDeclaration> = T["ServerMiddleware"] extends [
	...mw: MiddlewareOverload<infer A>
]
	? ClientFunction<A>
	: ClientFunction<unknown[]>;

type InferClientAsyncFunction<T extends AsyncFunctionDeclaration> = T["ServerMiddleware"] extends [
	...mw: MiddlewareOverload<infer A>
]
	? ClientAsyncFunction<InferArgs<T["ClientArguments"]>, A>
	: ClientAsyncFunction<InferArgs<T["ClientArguments"]>, unknown[]>;

type InferServerFunction<T extends FunctionDeclaration> = T["ServerMiddleware"] extends [
	...mw: MiddlewareOverload<infer A>
]
	? ServerFunction<A>
	: ServerFunction<unknown[]>;

type InferServerAsyncFunction<T extends AsyncFunctionDeclaration> = T["ServerMiddleware"] extends [
	...mw: MiddlewareOverload<infer A>
]
	? ServerAsyncFunction<A, InferArgs<T["ClientArguments"]>>
	: ServerAsyncFunction<unknown[], InferArgs<T["ClientArguments"]>>;

type InferClientRemote<T> = T extends FunctionDeclaration
	? InferClientFunction<T>
	: T extends AsyncFunctionDeclaration
	? InferClientAsyncFunction<T>
	: T extends EventDeclaration
	? InferClientEvent<T>
	: never;
type InferServerRemote<T> = T extends FunctionDeclaration
	? InferServerFunction<T>
	: T extends AsyncFunctionDeclaration
	? InferServerAsyncFunction<T>
	: T extends EventDeclaration
	? InferServerEvent<T>
	: never;

/////////////////////////////////////////
// Building
/////////////////////////////////////////

type ClientBuildResult<T extends RemoteDeclarations> = { [P in keyof T]: InferClientRemote<T[P]> };
type ServerBuildResult<T extends RemoteDeclarations> = { [P in keyof T]: InferServerRemote<T[P]> };

class DefinitionBuilder<T extends RemoteDeclarations> {
	public constructor(private decl: T) {}
	GetAllClient() {
		const remotes = {} as Record<
			string,
			ClientAsyncFunction<any, any> | ClientFunction<any> | ClientEvent<any, any>
		>;
		for (const [remoteId, declaration] of pairs(this.decl as Record<string, FunctionDeclaration>)) {
			remotes[remoteId] = this.GetClient(remoteId);
		}

		return remotes as ClientBuildResult<T>;
	}

	/**
	 * Gets a client remote from a declaration
	 */
	GetClient<K extends keyof T & string>(k: K): InferClientRemote<T[K]> {
		const item = this.decl[k] as FunctionDeclaration | AsyncFunctionDeclaration | EventDeclaration;
		if (item.Type === "Function") {
			return new ClientFunction(k) as InferClientRemote<T[K]>;
		} else if (item.Type === "AsyncFunction") {
			return new ClientAsyncFunction(k) as InferClientRemote<T[K]>;
		} else if (item.Type === "Event") {
			return new ClientEvent(k) as InferClientRemote<T[K]>;
		}

		throw `Invalid Type`;
	}

	/**
	 * Creates a server remote from a declaration
	 */
	CreateServer<K extends keyof T & string>(k: K): InferServerRemote<T[K]> {
		const item = this.decl[k] as FunctionDeclaration | AsyncFunctionDeclaration | EventDeclaration;
		if (item.Type === "Function") {
			if (item.ServerMiddleware) {
				return new ServerFunction(k, item.ServerMiddleware) as InferServerRemote<T[K]>;
			} else {
				return new ServerFunction(k) as InferServerRemote<T[K]>;
			}
		} else if (item.Type === "AsyncFunction") {
			if (item.ServerMiddleware) {
				return new ServerAsyncFunction(k, item.ServerMiddleware) as InferServerRemote<T[K]>;
			} else {
				return new ServerAsyncFunction(k) as InferServerRemote<T[K]>;
			}
		} else if (item.Type === "Event") {
			if (item.ServerMiddleware) {
				return new ServerEvent(k, item.ServerMiddleware) as InferServerRemote<T[K]>;
			} else {
				return new ServerEvent(k) as InferServerRemote<T[K]>;
			}
		}

		throw `Invalid Type`;
	}
	CreateAllServer() {
		const remotes = {} as Record<
			string,
			ServerAsyncFunction<any, any> | ServerFunction<any> | ServerEvent<any, any>
		>;
		for (const [remoteId, declaration] of pairs(this.decl as Record<string, FunctionDeclaration>)) {
			remotes[remoteId] = this.CreateServer(remoteId);
		}

		return remotes as ServerBuildResult<T>;
	}
}

export default function CreateNetDefinitionBuilder<T extends RemoteDeclarations>(remotes: T) {
	return new DefinitionBuilder<T>(remotes);
}
