import { Action, ActionType } from '../actions';
import { RequestOptions } from '../types';
export interface ParentAppConfig {
    /**
     * css selector of the element we'd like to inject the iFrame into
     */
    containerSelector: string;
    /**
     * url to set the iframe src attribute to
     */
    iframeUrl: string;
    /**
     * Unique string that identifies this parent/embedded connection. This is used so that
     * multiple compass embedded app instances can communicate on the page without interference.
     * This should be the same on both the sending and receiving end. Must use dash case (ie my-service)
     */
    serviceId: string;
    debug?: boolean;
    /**
     * unit is millisecond, DEFAULT_TIMEOUT is 500
     */
    heartbeatCbTimeoutMs?: number;
}
export declare class ParentApp {
    private readonly config;
    private transport;
    private handshakePromise;
    private _framePosition;
    private resizeObserver;
    private isPositionReportingEnabled;
    private throttledPositionChange;
    private heartbeatTimer;
    private constructor();
    static create(config: ParentAppConfig): ParentApp;
    private handlePositionChange;
    private get iframeEl();
    private startHeartbeat;
    isReady(): Promise<boolean>;
    togglePositionReporting(isPositionReportingEnabled: boolean): void;
    dispatch(action: Action, options?: RequestOptions): Promise<any>;
    subscribe(actionType: ActionType, cb: Function): () => boolean;
    destroy(): void;
}
