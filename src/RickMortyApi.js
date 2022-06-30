import { LitElement, html, css } from 'lit';
import './Components/GetData'

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class RickMortyApi extends LitElement {
  static get properties() {
    return {
      wiki: {type: Array},
    };
  }

  static get styles() {
    return css`
      :host {
        
      }

    `;
  }

  constructor() {
    super();

    this.addEventListener('ApiData', (e)=>{
      this._dataFormat(e.detail.data);
    })
  }
    _dataFormat(data) {
      let characters = [];

      data["results"].forEach((character) => {
        characters.push({
          img: character.img,
          name: character.name,
          especie: character.especie,
        })
      })
     this.wiki = characters;
     console.log(this.wiki);
  }
  

  render() {
    return html`
     <get-data url="https://rickandmortyapi.com/api/character" method="GET"></get-data>
     $this{} 
    `;
  }
}
