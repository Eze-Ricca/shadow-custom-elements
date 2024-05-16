//
class ParagraphNEl extends HTMLElement {
  static get style() {
    return /*css*/ `
      :host {
          display: block;
      }
            p {
              font-family: "Poppins", sans-serif;
              font-weight: 400;
              font-style: normal;
              font-size: 18px;
              line-height: 21px
            }    
          `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
            <style>${ParagraphNEl.style}</style>
            <div>
              <p><slot></slot></p>          
            </div>
          `;
  }
}
// <h1><slot></slot></h1>

customElements.define("paragraph-el-n", ParagraphNEl);
