import { ErrorActionType } from './Error';
import { ModalConfig } from '../Modal/Modal';
export declare const REGISTER = "REGISTER";
export declare const AUTHENTICATE = "AUTHENTICATE";
export declare const ERROR = "ERROR";
export declare const RESIZE_FRAME = "RESIZE_FRAME";
export declare const CONTENT_READY = "CONTENT_READY";
export declare const FULL_WINDOW = "FULL_WINDOW";
export declare const AUTO_SCROLL = "AUTO_SCROLL";
export declare const GET_RESOURCE = "GET_RESOURCE";
export declare const ADD_TOAST = "ADD_TOAST";
export declare const NAVIGATE = "NAVIGATE";
export declare const MODAL_REGISTER = "MODAL_REGISTER";
export declare const MODAL_OPEN = "MODAL_OPEN";
export declare const MODAL_CLOSE = "MODAL_CLOSE";
export declare const MODAL_DESTROY = "MODAL_DESTROY";
export declare const HISTORY_REPLACE = "HISTORY_REPLACE";
export declare const HISTORY_PUSH = "HISTORY_PUSH";
export declare const POSITION_CHANGE = "POSITION_CHANGE";
export declare const NAVIGATE_PARENT = "parent";
export declare const NAVIGATE_BLANK = "blank";
export declare type ToastVariant = 'info' | 'success' | 'highlight' | 'error';
export declare type BaseActionType = typeof REGISTER | typeof AUTHENTICATE | typeof ERROR | typeof POSITION_CHANGE | typeof CONTENT_READY | typeof FULL_WINDOW | typeof AUTO_SCROLL | typeof GET_RESOURCE | typeof RESIZE_FRAME | typeof ADD_TOAST | typeof NAVIGATE;
export declare enum BaseActionTypeEnum {
    HEARTBEAT = "HEARTBEAT"
}
declare type NavigateTargetType = typeof NAVIGATE_PARENT | typeof NAVIGATE_BLANK;
declare type ModalActionTypes = typeof MODAL_REGISTER | typeof MODAL_OPEN | typeof MODAL_CLOSE | typeof MODAL_DESTROY;
export declare type NavigatePayload = {
    url: string;
    target?: NavigateTargetType;
};
declare type HistoryActionType = typeof HISTORY_PUSH | typeof HISTORY_REPLACE;
export declare type ActionType = BaseActionType | ModalActionTypes | HistoryActionType | ErrorActionType | BaseActionTypeEnum;
export declare const availableActionTypes: string[];
export interface BaseAction {
    type: BaseActionType | BaseActionTypeEnum;
    payload?: Object;
}
export interface ModalRegisterPayload extends ModalConfig {
    id: string;
}
export interface ModalRegisterAction {
    type: typeof MODAL_REGISTER;
    payload: ModalRegisterPayload;
}
export interface ModalOpenAction {
    type: typeof MODAL_OPEN;
    payload: {
        id: string;
    };
}
export interface ModalDestroyAction {
    type: typeof MODAL_DESTROY;
    payload: {
        ids: string[];
    };
}
export declare type ModalCloseTriggers = 'primaryButton' | 'secondaryButton' | 'closeButton';
export declare type ModalClosePayload = {
    id: string;
    trigger: ModalCloseTriggers;
};
export interface ModalCloseAction {
    type: typeof MODAL_CLOSE;
    payload: ModalClosePayload;
}
interface HistroyActionPayload {
    pathname: string;
    search?: string;
    hash?: string;
}
interface HistoryAction {
    type: HistoryActionType;
    payload: HistroyActionPayload;
}
export interface PositionChangePayload {
    top: number;
    left: number;
    height: number;
    width: number;
    viewportHeight: number;
    viewportWidth: number;
}
export interface PositionChangeAction {
    type: typeof POSITION_CHANGE;
    payload: PositionChangePayload;
}
export declare type Action = BaseAction | ModalCloseAction | ModalRegisterAction | ModalOpenAction | ModalDestroyAction | HistoryAction | PositionChangeAction;
export declare const createRegisterAction: () => Action;
export declare const createAuthAction: (authPayload?: Object | undefined) => Action;
export declare const createContentReadyAction: () => Action;
export declare const createErrorAction: (error?: string | undefined) => Action;
export declare const createFullWindowAction: (isFullWindow: boolean) => Action;
export declare const createAutoScrollAction: (clientY: number) => Action;
export declare const createGetResourceAction: (payload: {
    resourceType: string;
    query?: string;
}) => Action;
export declare const createResizeFrameAction: (payload: {
    height?: number;
    width?: number;
}) => Action;
export declare const createAddToastAction: (variant: ToastVariant, message: string, duration?: number | undefined) => Action;
export declare const createNavigateAction: (payload: NavigatePayload) => Action;
export declare const createModalRegisterAction: (payload: ModalRegisterPayload) => ModalRegisterAction;
export declare const createModalOpenAction: (id: string) => ModalOpenAction;
export declare const createModalCloseAction: (id: string, trigger: ModalCloseTriggers) => ModalCloseAction;
export declare const createModalDestroyAction: (id: string) => ModalDestroyAction;
export declare const createHistoryPushAction: (historyPayload: HistroyActionPayload) => HistoryAction;
export declare const createHistoryReplaceAction: (historyPayload: HistroyActionPayload) => HistoryAction;
export declare const createPositionAction: (payload: PositionChangePayload) => PositionChangeAction;
export * from './Error';
