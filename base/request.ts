const ORIGIN_EVENT = Symbol.for('#origin_event')
const EVENT = Symbol.for('#event')
const EVENT_PARSED = Symbol.for('#event_parsed')
const BODY_PARSED = Symbol.for('#body_parsed')
const BODY = Symbol.for('#body')

export abstract class Request {
    context: Context
    ctx: Context

    constructor(event, context) {
        this[ORIGIN_EVENT] = event
        this[EVENT_PARSED] = null
        this[BODY_PARSED] = false
        this[BODY] = null
        this.context = context
        this.ctx = context
    }

    abstract get method(): Method
    abstract get path(): string
    abstract get headers(): {}
    abstract get query(): {}
    abstract get params(): {}
    abstract get body(): string
}

// API Gateway "event" request context
export interface APIGatewayEventRequestContext {
    accountId: string;
    apiId: string;
    authorizer?: AuthResponseContext | null;
    httpMethod: string;
    identity: {
        accessKey: string | null;
        accountId: string | null;
        apiKey: string | null;
        caller: string | null;
        cognitoAuthenticationProvider: string | null;
        cognitoAuthenticationType: string | null;
        cognitoIdentityId: string | null;
        cognitoIdentityPoolId: string | null;
        sourceIp: string;
        user: string | null;
        userAgent: string | null;
        userArn: string | null;
    };
    stage: string;
    requestId: string;
    requestTimeEpoch: number;
    resourceId: string;
    resourcePath: string;
}

// API Gateway "event"
export interface APIGatewayEvent {
    body: string | null;
    headers: { [name: string]: string };
    httpMethod: string;
    isBase64Encoded: boolean;
    path: string;
    pathParameters: { [name: string]: string } | null;
    queryStringParameters: { [name: string]: string } | null;
    stageVariables: { [name: string]: string } | null;
    requestContext: APIGatewayEventRequestContext;
    resource: string;
}

export type Event = APIGatewayEvent

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD' | 'OPTIONS' | 'PATCH'

export interface Context {

}
