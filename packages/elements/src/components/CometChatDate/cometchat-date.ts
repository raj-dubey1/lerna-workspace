import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
export enum patterns {
  time, DayDate, DayDateTime
}
@customElement('cometchat-date')
export class CometChatDate extends LitElement {
  @property({ type: Object }) style: any = {
    timeStampFont: "400 13px Inter",
    timeStampColor: "rgba(20, 20, 20, 0.58)",
    backgroundColor: "none",
    height: "",
    width: "",
    border: "",
    borderRadius: "",
    background: ""
  };
  @property({ type: Number }) timestamp: number = 1660643107;
  @property({ attribute: false }) pattern: patterns = patterns.time;
  @property() customDateString: string | null = null;
  static styles = [
    css`
      `
  ];
  public monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  public weekNames = [
    "Sunday",
    "Monday",
    "Tuseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  public date: Date = new Date(this.timestamp * 1000)
  connectedCallback() {
    super.connectedCallback()
    this.date = new Date(this.timestamp * 1000);
  }
  render() {
    return html`<span class="cc__date" style=${styleMap(this.DateStyles())}>${this.getFormattedDate()}</span>`;
  }
  getWeekOfDay = () => {
    let weekDay = this.date.getDay();
    let week = this.weekNames[weekDay];
    return week.substring(0, 3);
  };
  getMonthOfDay = () => {
    let month = this.date.getMonth();
    let mnth = this.monthNames[month];
    return mnth.substring(0, 3);
  };
  getDateFormat = () => {
    if (this.pattern === patterns.DayDate) {
      return this.date.getDate() + " " + this.getMonthOfDay() + ", " + this.date.getFullYear();
    }
    let dt: any = this.date.getDate();
    if (dt < 10) {
      dt = "0" + dt;
    }
    return dt + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
  };
  getMinute = (date: Date) => {
    if (date.getMinutes() < 10) {
      return `0${date.getMinutes()}`;
    } else { return date.getMinutes() };
  };
  getTimeFormat = () => {
    let timeString: any = this.date.getHours();
    let postString = "AM";
    if (timeString > 12) {
      postString = "PM";
      timeString = timeString % 12;
    }
    if (timeString < 10) {
      timeString = `0${timeString}`;
    }
    return timeString + ":" + this.getMinute(this.date) + " " + postString;
  };
  getDate = () => {
    const today = new Date();
    if (
      today.getMonth() === this.date.getMonth() &&
      today.getFullYear() === this.date.getFullYear()
    ) {
      let diff = today.getDate() - this.date.getDate();
      if (diff === 0) {
        if (this.pattern === patterns.DayDateTime) {
          return this.getTimeFormat();
        }
        return "today";
      } else if (diff === 1) {
        return "yesterday";
      } else if (diff < 7) {
        return this.getWeekOfDay();
      } else {
        return this.getDateFormat();
      }
    } else {
      return this.getDateFormat();
    }
  };
  getFormattedDate = () => {
    if (this.customDateString) {
      return this.customDateString;
    } else if (this.pattern != null) {
      let formattedDate: any = "";
      switch (this.pattern) {
        case patterns.time as any:
          formattedDate = this.getTimeFormat();
          break;
        case patterns.DayDate:
        case patterns.DayDateTime:
          formattedDate = this.getDate();
          break;
        default:
          break;
      }
      return formattedDate;
    }
    return null;
  };
  //   styles
  DateStyles = () => {
    return {
      font: this.style?.timeStampFont,
      color: this.style?.timeStampColor,
      backgroundColor: this.style?.backgroundColor,
      height: this.style?.height,
      width: this.style?.width,
      border: this.style?.border,
      borderRadius: this.style?.borderRadius,
      textAlign: 'center',
    }
  }
}
declare global {
  interface HTMLElementTagNameMap {
    'cometchat-date': CometChatDate
  }
}