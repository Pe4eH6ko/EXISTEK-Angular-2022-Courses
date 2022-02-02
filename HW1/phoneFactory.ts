import Firm from './Firm';
import Model from './Model';
import Phone from './Phone';

function phoneMaker(firm: string, model: string): Phone{
    let phoneProps : [Firm, Model]=[new Firm(firm), new Model(model)];
    return new Phone(phoneProps[0], phoneProps[1]);
}

function returnMostExpensive <T extends Phone>(arr:T[]): T{
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

enum Firms {
    Apple = 'Apple', 
    Samsung = 'Samsung',
    Xiaomi = 'Xiaomi'
}

enum Models {
    first = 'iPhone 13 Pro Max',
    second = 'Galaxy Z Fold3',
    third = '11T Pro'
}

const Phone1 = phoneMaker(Firms.Apple,Models.first);
const Phone2 = phoneMaker(Firms.Samsung, Models.second);
const Phone3 = phoneMaker(Firms.Xiaomi, Models.third);
const arrPhone: Array<Phone> = [Phone1,Phone2,Phone3];
console.log(returnMostExpensive(arrPhone));