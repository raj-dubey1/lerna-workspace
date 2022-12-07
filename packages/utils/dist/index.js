'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const callConstants = {
    incomingCall: "incomingCall",
    incomingMessage: "incomingMessage",
    incomingMessageFromOther: "incomingMessageFromOther",
    outgoingCall: "outgoingCall",
    outgoingMessage: "outgoingMessage",
    INCOMING_CALL_RECEIVED: "onIncomingCallReceived",
    OUTGOING_CALL_ACCEPTED: "onOutgoingCallAccepted",
    OUTGOING_CALL_REJECTED: "onOutgoingCallRejected",
    INCOMING_CALL_CANCELLED: "onIncomingCallCancelled",
    CALL_SCREEN_: "callscreen_",
    CALL_TYPE_DIRECT: "DIRECT_CALL",
};
Object.freeze({
    file: "file",
    liveReaction: "live_reaction",
    extension: "extensions",
    extensions: {
        thumbnailGeneration: "thumbnail-generation",
        polls: "polls",
        document: "document",
        whiteboard: "whiteboard",
        xssfilter: "xss-filter",
        datamasking: "data-masking",
        profanityfilter: "profanity-filter",
        reactions: "reactions",
        linkpreview: "link-preview",
        smartReply: "smart-reply",
        REPLY_POSITIVE: "reply_positive",
        REPLY_NEUTRAL: "reply_neutral",
        REPLY_NEGATIVE: "reply_negative",
    },
    metadata: "metadata",
    injected: "@injected",
    links: "links",
});

// import outgoingMessage from './audio/outgoingmessage.wav';
const outgoingMessage = require("./audio/outgoingmessage.wav");
const soundMessage = require("./SoundManager/audio/outgoingmessage.wav");
class CometChatSoundManager {
    /**
     * @param  {string} sound
     * @param  {string|null=null} customSound
     */
    static play(sound, customSound = null) {
        const resource = CometChatSoundManager.Sound[sound];
        const handler = CometChatSoundManager.handlers[resource];
        if (!handler) {
            return false;
        }
        return handler(customSound);
    }
    static pause() {
        if (CometChatSoundManager.audio) {
            CometChatSoundManager.audio.pause();
        }
    }
}
CometChatSoundManager.audio = null;
CometChatSoundManager.Sound = Object.freeze({
    incomingCall: callConstants.incomingCall,
    incomingMessage: callConstants.incomingMessage,
    incomingMessageFromOther: callConstants.incomingMessageFromOther,
    outgoingCall: callConstants.outgoingCall,
    outgoingMessage: callConstants.outgoingMessage,
});
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onIncomingMessage = (customSound = null) => {
    if (customSound) {
        CometChatSoundManager.audio = new Audio(customSound);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
    else {
        CometChatSoundManager.audio = new Audio('./audio/incomingmessage.wav');
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onIncomingOtherMessage = (customSound = null) => {
    if (customSound) {
        CometChatSoundManager.audio = new Audio(customSound);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
    else {
        CometChatSoundManager.audio = new Audio('./audio/incomingothermessage.wav');
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onOutgoingMessage = (customSound = null) => {
    console.log(outgoingMessage, soundMessage);
    if (customSound) {
        CometChatSoundManager.audio = new Audio(customSound);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
    else {
        CometChatSoundManager.audio = new Audio(soundMessage || outgoingMessage);
        CometChatSoundManager.audio.currentTime = 0;
        CometChatSoundManager.audio.play();
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onIncomingCall = (customSound = null) => {
    if (customSound) {
        try {
            CometChatSoundManager.audio = new Audio(customSound);
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
    else {
        try {
            CometChatSoundManager.audio = new Audio('./audio/incomingcall.wav');
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
};
/**
 * @param  {string|null=null} customSound
 */
CometChatSoundManager.onOutgoingCall = (customSound = null) => {
    if (customSound) {
        try {
            CometChatSoundManager.audio = new Audio(customSound);
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
    else {
        try {
            CometChatSoundManager.audio = new Audio('./audio/outgoingcall.wav');
            CometChatSoundManager.audio.currentTime = 0;
            if (typeof CometChatSoundManager.audio.loop == "boolean") {
                CometChatSoundManager.audio.loop = true;
            }
            else {
                CometChatSoundManager.audio.addEventListener("ended", function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
            }
            CometChatSoundManager.audio.play();
        }
        catch (error) { }
    }
};
CometChatSoundManager.handlers = {
    incomingCall: CometChatSoundManager.onIncomingCall,
    outgoingCall: CometChatSoundManager.onOutgoingCall,
    incomingMessage: CometChatSoundManager.onIncomingMessage,
    incomingMessageFromOther: CometChatSoundManager.onIncomingOtherMessage,
    outgoingMessage: CometChatSoundManager.onOutgoingMessage,
};

exports.CometChatSoundManager = CometChatSoundManager;
exports.callConstants = callConstants;
exports.outgoingMessage = outgoingMessage;
exports.soundMessage = soundMessage;
