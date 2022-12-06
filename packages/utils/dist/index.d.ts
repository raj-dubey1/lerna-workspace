declare class CometChatSoundManager {
    static audio: string | null | HTMLAudioElement;
    static Sound: sounds;
    /**
     * @param  {string|null=null} customSound
     */
    static onIncomingMessage: (customSound?: string | null) => void;
    /**
     * @param  {string|null=null} customSound
     */
    static onIncomingOtherMessage: (customSound?: string | null) => void;
    /**
     * @param  {string|null=null} customSound
     */
    static onOutgoingMessage: (customSound?: string | null) => void;
    /**
     * @param  {string|null=null} customSound
     */
    static onIncomingCall: (customSound?: string | null) => void;
    /**
     * @param  {string|null=null} customSound
     */
    static onOutgoingCall: (customSound?: string | null) => void;
    static handlers: {
        incomingCall: (customSound?: string | null) => void;
        outgoingCall: (customSound?: string | null) => void;
        incomingMessage: (customSound?: string | null) => void;
        incomingMessageFromOther: (customSound?: string | null) => void;
        outgoingMessage: (customSound?: string | null) => void;
    };
    /**
     * @param  {string} sound
     * @param  {string|null=null} customSound
     */
    static play(sound: any, customSound?: string | null): any;
    static pause(): void;
}
interface sounds {
    incomingCall?: string;
    incomingMessage?: string;
    incomingMessageFromOther: string;
    outgoingCall?: string;
    outgoingMessage?: string;
}

declare const callConstants: {
    incomingCall: string;
    incomingMessage: string;
    incomingMessageFromOther: string;
    outgoingCall: string;
    outgoingMessage: string;
    INCOMING_CALL_RECEIVED: string;
    OUTGOING_CALL_ACCEPTED: string;
    OUTGOING_CALL_REJECTED: string;
    INCOMING_CALL_CANCELLED: string;
    CALL_SCREEN_: string;
    CALL_TYPE_DIRECT: string;
};

export { CometChatSoundManager, callConstants };
