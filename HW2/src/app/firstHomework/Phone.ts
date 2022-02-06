import Firm from "./Firm";
import Model from "./Model";

export default class Phone{
    protected static readonly id: unique symbol = Symbol();
    model: Model; 
    private _initialCost!: number;
    retailPrice: number;
    firm: Firm;

    public get initialCost(): number{
        return this._initialCost;
    }

    constructor(firm: Firm, model:Model){
        this.firm = firm;
        this.model = model;
        if(model.name === 'iPhone 13 Pro Max'){
            this._initialCost = 475;    
        }else if(model.name ==='Galaxy Z Fold3'){
            this._initialCost = 500;
        }else if(model.name === '11T Pro'){
            this._initialCost = 315;
        }
        this.retailPrice = this._initialCost + (this._initialCost*0.7) + this.model.hoursForDelivery*8;  
    }

    getInfoAboutPhone(): void{
        for (let key in this){
            console.log(`${key}: ${this[key]}`);
        }
    }
}