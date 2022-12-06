var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
export var Placement;
(function (Placement) {
    Placement[Placement["top"] = 0] = "top";
    Placement[Placement["right"] = 1] = "right";
    Placement[Placement["bottom"] = 2] = "bottom";
    Placement[Placement["left"] = 3] = "left";
})(Placement || (Placement = {}));
let CometChatPopOver = class CometChatPopOver extends LitElement {
    constructor() {
        super(...arguments);
        this.style = {
            width: "372px",
            height: "330px",
            border: "none",
            background: "white",
            borderRadius: "8px",
            boxShadow: "0px 0px 32px rgba(20, 20, 20, 0.2)",
        };
        this.hasToolTip = false;
        this.placement = Placement.top;
        this.deg = {
            0: 180,
            1: 270,
            2: 0,
            3: 90
        };
        this.x = 0;
        this.y = 0;
        this.tipPositionMapping = {
            0: "x",
            1: "y",
            2: "x",
            3: "y"
        };
        this.onclick = (e) => {
            e.stopPropagation();
            this.x = e.pageX;
            this.y = e.pageY;
            this.renderRoot.querySelector('.tooltip').classList.toggle("hide");
            this.requestUpdate();
        };
        this.toolTipWrapperStyle = () => {
            const axis = this.tipPositionMapping[this.placement];
            let x = this.x ? this.x : 0;
            let y = this.y ? this.y : 0;
            let width = parseInt(this.style.width);
            let height = parseInt(this.style.height);
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            let percent = 0;
            if (axis === "x") {
                percent = (100 * x) / windowWidth;
            }
            else {
                percent = (100 * y) / windowHeight;
            }
            let axisPosition = {};
            if (axis === "x") {
                axisPosition = {
                    left: `${x - width * (percent / 100)}px`
                };
            }
            else {
                axisPosition = {
                    top: `${y - height * (percent / 100)}px`
                };
            }
            let positionStyle = {};
            if (this.placement === Placement.top) {
                positionStyle = {
                    top: `${y - parseInt(height) - 20}px`
                };
            }
            else if (this.placement === Placement.bottom) {
                positionStyle = {
                    top: `${y + 20}px`
                };
            }
            else if (this.placement === Placement.left) {
                positionStyle = {
                    left: `${x - parseInt(width) - 30}px`
                };
            }
            else if (this.placement === Placement.right) {
                positionStyle = {
                    left: `${x + 25}px`
                };
            }
            return {
                boxShadow: this.style.boxShadow,
                borderRadius: this.style.borderRadius,
                width: `${width}px`,
                height: `${height}px`,
                position: "fixed",
                background: `${this.style.background}`,
                ...positionStyle,
                ...axisPosition
            };
        };
        this.toolTipContentStyle = () => {
            return {
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            };
        };
        this.toolTipStyles = () => {
            const axis = this.tipPositionMapping[this.placement];
            let x = this.x ? this.x : 0;
            let y = this.y ? this.y : 0;
            let width = parseInt(this.style.width);
            let height = parseInt(this.style.height);
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;
            let percent = 0;
            if (axis === "x") {
                percent = (100 * x) / windowWidth;
            }
            else {
                percent = (100 * y) / windowHeight;
            }
            let positionStyle = {};
            if (axis === "x") {
                if (this.placement === Placement.top) {
                    console.log(height);
                    positionStyle = {
                        left: `${width * (percent / 100) - 10}px`,
                        top: height + "px"
                    };
                }
                else if (this.placement === Placement.bottom) {
                    positionStyle = {
                        left: `${width * (percent / 100) - 10}px`,
                        top: -10 + "px"
                    };
                }
            }
            else {
                if (this.placement === Placement.left) {
                    positionStyle = {
                        left: `calc(${width + "px"} - 5px)`,
                        top: `${height * (percent / 100) - 10}px`
                    };
                }
                else if (this.placement === Placement.right) {
                    positionStyle = {
                        left: -15 + "px",
                        top: `${height * (percent / 100) - 10}px`
                    };
                }
            }
            return {
                zIndex: 11,
                width: "0",
                height: "0",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: `10px solid grey`,
                position: "relative",
                ...positionStyle,
                transform: `rotate(${this.deg[this.placement]}deg)`
            };
        };
    }
    requestUpdate(name, oldValue, options) {
        super.requestUpdate();
    }
    render() {
        return html `
<div class="tooltip hide" style=${styleMap(this.toolTipWrapperStyle())}>
${this.hasToolTip ? html `<div class="tooltip__pointer" style=${styleMap(this.toolTipStyles())}></div>` : nothing}
<div class="tooltip__content" style=${styleMap(this.toolTipContentStyle())}>
<slot name="content"></slot>
</div>
</div>
<div  @click=${this.onclick}>
<slot name="children"></slot>
</div>
 `;
    }
};
CometChatPopOver.styles = [
    css `
.hide { display: none }
`
];
__decorate([
    property({ type: Object })
], CometChatPopOver.prototype, "style", void 0);
__decorate([
    property({ type: Boolean })
], CometChatPopOver.prototype, "hasToolTip", void 0);
__decorate([
    property()
], CometChatPopOver.prototype, "placement", void 0);
CometChatPopOver = __decorate([
    customElement('cometchat-pop-over')
], CometChatPopOver);
export { CometChatPopOver };
//# sourceMappingURL=cometchat-pop-over.js.map