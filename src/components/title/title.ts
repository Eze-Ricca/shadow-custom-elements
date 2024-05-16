//
class TituloEl extends HTMLElement {
  static get style() {
    return /*css*/ `
      div h1{
        font-family: "Poppins", sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 52px;
      }    
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
      <style>${TituloEl.style}</style>
      <div>
        <h1>${this.getAttribute("title")}</h1>          
      </div>
    `;
  }
}
// <h1>>slot></slot></h1>

customElements.define("titulo-el", TituloEl);
