class FooterEl extends HTMLElement {
  static get style() {
    return /*css*/ `
      div{
          width: 100%;
          height: 233px;
          background-color: #FFA0EA;
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
      <style>${FooterEl.style}</style>
      <div>
        <p>Footer</p>  
      </div>
      `;
  }
}

customElements.define("footer-el", FooterEl);
