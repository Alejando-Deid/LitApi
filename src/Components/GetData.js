import { LitElement } from "lit";

export class GetData extends LitElement{

    static get properties(){
        return{
            url:{type: String},
            metho:{type: String}
        }
    }



    firstUpdated(data){
        this.dispatchEvent(new CustomEvent('ApiData',{
            detail: {data}, bubbles: true, composed: true
        }));
    }
    
    _sendData(data){
        this.GetData();
    }

    GetData(){
        fetch(this.url,{method: this.method})
        .then((Response) => {
            if(Response.ok) return Response.json();
            return Promise.reject(response);
        })
        .then((data) =>{this._sendData(data);})
        .catch((error)=>{console.warn('shomething what wornk',error)})
    }
}
customElements.define('get-data',GetData);