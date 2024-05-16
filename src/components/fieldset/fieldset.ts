//
class FieldsetEl extends HTMLElement {
  static get style() {
    return /*css*/ `
        
              div {
                max-width: 352px;
                height: 79px;               
                box-sizing: border-box;
                margin: 0px;
                padding: 0px
              }    
              div label,input{
                display: block;
                cursor: pointer;
              }
              div label{
                font-family: "Roboto";
                font-size: 18px;
                font-weight: 400;
                line-height: 21.09px;                
              }
              div input{
                width: 99%;
                height: 55px;
                padding: 0px;
                margin: 0px;
                border: solid 2px black;
                border-radius: 4px;
              }
            `;
  }
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.shadowRoot!.innerHTML = /*html*/ `
              <style>${FieldsetEl.style}</style>
              <div>
              <label for="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
            `;
  }
}
// <h1><slot></slot></h1>

customElements.define("fieldset-el", FieldsetEl);
