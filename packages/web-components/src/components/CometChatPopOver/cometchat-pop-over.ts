import { LitElement, html, css, PropertyValueMap, PropertyDeclaration, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
export enum Placement {
  top,right,bottom,left
}
@customElement('cometchat-pop-over')
export class CometChatPopOver extends LitElement{
  @property({type:Object}) style:any = {
    width:"372px",
    height:"330px",
    border:"none",
    background:"white",
    borderRadius:"8px", 
    boxShadow: "0px 0px 32px rgba(20, 20, 20, 0.2)",
  } 
  @property({type:Boolean}) hasToolTip:boolean = false;
  @property() placement: Placement= Placement.top;
 public deg:any = {
    0: 180,
    1: 270,
    2: 0,
    3: 90
};
public x:any=0;
public y:any=0;
public tipPositionMapping:any = {
    0:"x",
    1:"y",
    2:"x",
    3:"y"
};
static styles = [
css`
.hide { display: none }
`
];
onclick = (e:any)=>{
  e.stopPropagation();
  this.x = e.pageX;
  this.y = e.pageY;
 (this.renderRoot as any).querySelector('.tooltip').classList.toggle("hide");
 this.requestUpdate()
}
requestUpdate(name?: PropertyKey, oldValue?: unknown, options?: PropertyDeclaration<unknown, unknown>): void {
    super.requestUpdate()
}
render() {
 return html`
<div class="tooltip hide" style=${styleMap(this.toolTipWrapperStyle())}>
${this.hasToolTip ? html`<div class="tooltip__pointer" style=${styleMap(this.toolTipStyles())}></div>` : nothing}
<div class="tooltip__content" style=${styleMap(this.toolTipContentStyle())}>
<slot name="content"></slot>
</div>
</div>
<div  @click=${this.onclick}>
<slot name="children"></slot>
</div>
 `
}
   toolTipWrapperStyle:any = () => {
    const axis = this.tipPositionMapping[this.placement];
    let x:number = this.x ? this.x : 0;
    let y:number = this.y ? this.y : 0;
    let width:any = parseInt(this.style.width);
    let height:any = parseInt(this.style.height);
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let percent = 0;
    if (axis === "x") {
      percent = (100 * x) / windowWidth;
    } else {
      percent = (100 * y) / windowHeight;
    }
    let axisPosition = {};
    if (axis === "x") {
      axisPosition = {
        left: `${x - width * (percent / 100)}px`
      };
    } else {
      axisPosition = {
        top: `${y - height * (percent / 100)}px`
      };
    }
    let positionStyle = {};
    if (this.placement === Placement.top) {
      positionStyle = {
        top: `${y - parseInt(height) - 20}px`
      };
    } else if (this.placement === Placement.bottom) {
      positionStyle = {
        top: `${y + 20}px`
      };
    } else if (this.placement === Placement.left) {
      positionStyle = {
        left: `${x - parseInt(width) - 30}px`
      };
    } else if (this.placement === Placement.right) {
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
      background: `${this.style.background }`,
      ...positionStyle,
      ...axisPosition
    };
  };
   toolTipContentStyle:any = () => {
    return {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%"
    };
  };
   toolTipStyles:any = () => {
    const axis = this.tipPositionMapping[this.placement];
    let x:number = this.x ? this.x : 0;
    let y:number = this.y ? this.y : 0;
    let width = parseInt(this.style.width);
    let height = parseInt(this.style.height);
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let percent = 0;
    if (axis === "x") {
      percent = (100 * x) / windowWidth;
    } else {
      percent = (100 * y) / windowHeight;
    }
    let positionStyle = {};
    if (axis === "x") {
      if (this.placement === Placement.top) {
        console.log(height)
        positionStyle = {
          left: `${width * (percent / 100) - 10}px`,
          top: height + "px"
        };
      } else if (this.placement === Placement.bottom) {
        positionStyle = {
          left: `${width * (percent / 100) - 10}px`,
          top: -10 + "px"
        };
      }
    } else {
      if (this.placement === Placement.left) {
        positionStyle = {
          left: `calc(${width + "px"} - 5px)`,
          top: `${height * (percent / 100) - 10}px`
        };
      } else if (this.placement === Placement.right) {
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
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-pop-over': CometChatPopOver
  }
}