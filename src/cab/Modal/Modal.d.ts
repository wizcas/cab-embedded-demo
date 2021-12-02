import { EmbeddedApp } from '../EmbeddedApp/EmbeddedApp';
declare type ButtonVariant = 'solid' | 'enclosed' | 'enclosed--highEmph' | 'naked' | 'naked--lowEmph' | 'danger' | 'danger--lowEmph';
interface ButtonConfig {
    text?: string;
    onClick: Function;
    variant?: ButtonVariant;
}
export interface ModalConfig {
    header?: {
        title?: string;
        hideCloseButton?: boolean;
        closeButton?: ButtonConfig;
    };
    body?: string;
    isOpen?: boolean;
    destroyOnClose?: boolean;
    footer: {
        primaryButton: ButtonConfig;
        secondaryButton?: ButtonConfig;
    };
}
export declare class Modal {
    private app;
    private id;
    private constructor();
    static create(app: EmbeddedApp, config: ModalConfig): Modal;
    open(): void;
    close(): void;
    destroy(): void;
}
export {};
