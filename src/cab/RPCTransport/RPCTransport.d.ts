import { Action, ErrorAction } from '../actions';
import { logger } from '../utils';
import { MessageType } from '../constants';
import { RequestOptions } from '../types';
/**
 * Packet containing the message data and action
 */
export interface CompassPacket {
    messageId: number;
    messageType: MessageType;
    serviceId: string;
    error?: ErrorAction;
    type: string;
    payload?: Object;
}
interface Postable {
    postMessage(message: any, targetOrigin: string, transfer?: any): void;
}
declare type SetOriginListener = (origin: string) => void;
export interface RPCConfig {
    origin?: string;
    target: Postable;
    serviceId: string;
    logger?: ReturnType<typeof logger>;
    onSetOrigin?: SetOriginListener;
}
declare class RPCTransport {
    private readonly config;
    /**
     * Current message id. Increments when message is sent
     */
    private messageId;
    /**
     * List of inflight messages sent from the current application (parent/embedded)
     */
    private messages;
    /**
     * Callable methods exposed by the current application (parent/embedded)
     */
    private handlers;
    private setOriginListeners;
    constructor(config: RPCConfig);
    private postMessage;
    private handleResponse;
    addSetOriginListener(listener: SetOriginListener): void;
    private setOrigin;
    private handleMessage;
    sendRequest(action: Action, options?: RequestOptions): Promise<any>;
    registerHandler(actionType: string, cb: CallableFunction): () => boolean;
    /**
     * used to trigger handlers on the current side of the bridge
     * Allows us to emit errors such as heartbeat failures
     * @param action ActionType
     */
    emit({ type, payload }: Action | ErrorAction): void;
    teardown(): void;
}
export default RPCTransport;
