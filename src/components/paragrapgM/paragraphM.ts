//
class ParagraphEl extends HTMLElement {
  static get style() {
    return /*css*/ `
    :host {
        display: block;
    }
          p {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-style: normal;
            font-size: 22px;
            line-height: 26px
          }    
        `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
          <style>${ParagraphEl.style}</style>
          <div>
            <p><slot></slot></p>          
          </div>
        `;
  }
}
// <h1><slot></slot></h1>

customElements.define("paragraph-el-m", ParagraphEl);
