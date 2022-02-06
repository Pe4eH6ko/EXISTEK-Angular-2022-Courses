import Firm from './Firm';
import Model from './Model';
import Phone from './Phone';

export function phoneMaker(firm: string, model: string): Phone{
    let phoneProps : [Firm, Model]=[new Firm(firm), new Model(model)];
    return new Phone(phoneProps[0], phoneProps[1]);
}

export function returnMostExpensive <T extends Phone>(arr:T[]): T{
    let biggestPrice:number=0;
    let mostExpensive!:T;
    arr.forEach(element => {
        if(element.retailPrice>biggestPrice){
            biggestPrice=element.retailPrice;
            mostExpensive=element;
        };
    });
    return mostExpensive;
}