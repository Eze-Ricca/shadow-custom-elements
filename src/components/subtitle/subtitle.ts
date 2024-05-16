//
class SubtitleEl extends HTMLElement {
  static get style() {
    return /*css*/ `
        div h3{
          font-family: "Poppins", sans-serif;
          font-weight: 700;
          font-style: normal;
          font-size: 38px
        }    
      `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
        <style>${SubtitleEl.style}</style>
        <div>
          <h3>${this.getAttribute("subTitle")}</h3>          
        </div>
      `;
  }
}
// <h1>>slot></slot></h1>

customElements.define("subtitle-el", SubtitleEl);
