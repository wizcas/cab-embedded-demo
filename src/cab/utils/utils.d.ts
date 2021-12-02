import { NavigatePayload, PositionChangePayload } from '../actions';
import { CompassPacket, RPCConfig } from '../RPCTransport/RPCTransport';
import { ParentAppConfig } from '../ParentApp/ParentApp';
import { EmbeddedAppConfig } from '../EmbeddedApp/EmbeddedApp';
export declare const isValidActionType: (type: string) => boolean;
export declare const serializeMessage: (action: CompassPacket) => string;
/**
 * Filters out message events that are not intended for an app-bridge
 */
export declare const isValidMessageEvent: (e: MessageEvent, config: RPCConfig) => boolean;
/**
 * Validates the packet contents. If the message is invalid,
 * it adds an error to the packet which will be thrown on client
 */
export declare const validatePacketContents: (packet: CompassPacket | undefined, config: RPCConfig) => CompassPacket | undefined;
export declare const sanitizeMessage: (e: MessageEvent, config: RPCConfig) => CompassPacket | undefined;
export declare function logger(app: 'parent' | 'embedded', debug?: boolean): {
    messageRecieved: (data: any) => void;
    messageSent: (data: any) => void;
    info: (message: any) => void;
};
export declare function getIframeId(serviceId: string): string;
export declare function setupIframe(config: ParentAppConfig): HTMLIFrameElement;
export declare function validateParentAppConfig(config: ParentAppConfig): void;
export declare function validateEmbeddedAppConfig(config: EmbeddedAppConfig): void;
export declare function debounce(func: Function, wait: number, immediate: false): () => void;
export declare function throttle(func: Function, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): () => any;
export declare function isInIframe(): boolean;
export declare const toggleFullWindow: (serviceId: string, zIndex?: number) => ({ isFullWindow }: {
    isFullWindow: boolean;
}) => void;
export declare const toggleAutoScroll: (serviceId: string, parentId?: string | undefined) => ({ clientY }: {
    clientY: number;
}) => void;
export declare const navigateToUrl: (payload: NavigatePayload) => void;
/**
 * Creates a unique id. Imperfect, but good enough
 * @returns string
 */
export declare function uid(): string;
export declare function hasPositionChanged(next: PositionChangePayload, prev?: PositionChangePayload): boolean;
