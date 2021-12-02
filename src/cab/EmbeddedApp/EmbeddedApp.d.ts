import { Action, ActionType } from '../actions';
import { RequestOptions } from '../types';
export interface EmbeddedAppConfig {
    /**
     * Remote origin we'll be communicating with (the parent app)
     * If unknown beforehand, it can be uninformed and will be set as soon as the first message
     * from the parent is received.
     */
    origin?: string;
    /**
     * Unique string that identifies this parent/embedded connection. This is used so that
     * multiple compass embedded app instances can communicate on the page without interference.
     * This should be the same on both the sending and receiving end. Must use dash case (ie my-service)
     */
    serviceId: string;
    /**
     * If set to true the EmbeddedApp will track any total height changes on embedded content and fire events
     * to parent to resize containing iframe accordingly. Can be turned on and off at any time after creating
     * EmbeddedApp using the toggleAutoResize() method. Defaults to true.
     */
    autoResize?: boolean;
    debug?: boolean;
}
export declare class EmbeddedApp {
    private transport;
    private handshakePromise;
    private resizeObserver;
    private autoResizeEnabled;
    private registeredModals;
    private constructor();
    static create(config: EmbeddedAppConfig): EmbeddedApp;
    isReady(): Promise<void>;
    private handleResize;
    toggleAutoResize(autoResizeEnabled: boolean): void;
    private subscribeToModalEvents;
    dispatch(action: Action, options?: RequestOptions): Promise<any>;
    subscribe(actionType: ActionType, cb: Function): () => boolean;
    destroy(): void;
}
