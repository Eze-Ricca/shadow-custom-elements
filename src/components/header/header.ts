//
class HeaderEl extends HTMLElement {
  static get style() {
    return /*css*/ `
    div{
        width: 100%;
        height: 60px;
        background-color: #FF8282;
        display: flex;
        display: grid;
        place-items: center
    }    
    `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
    <style>${HeaderEl.style}</style>
    <div>
      <p>Header</p>  
    </div>
    `;
  }
}

customElements.define("header-el", HeaderEl);
