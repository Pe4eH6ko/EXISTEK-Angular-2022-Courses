import Firm from "./Firm";
import model from "./modelInterface";

export default class Model implements model {
    name: string;
    firm!: Firm;
    weight!: number; 
    color!: string;
    memorySize!: string;
    screenInches!: number;
    readonly screenResolution!: string;
    nfc!: boolean;
    camera!: boolean;
    cameraMP!: number;
    hoursForProduction!: number;

    constructor (modelName: string){
        this.name = modelName;
        if(modelName ==="iPhone 13 Pro Max"){
            this.weight = 240;
            this.color = 'Sierra Blue';
            this.memorySize = '1TB';
            this.screenInches = 6.7;
            this.screenResolution = '2778x1284';
            this.nfc = true;
            this.camera = true;
            this.cameraMP = 12;
            this.hoursForProduction = 5;
        }else if(modelName === 'Galaxy Z Fold3'){
            this.weight = 271;
            this.color = 'Silver';
            this.memorySize = '512GB';
            this.screenInches = 7.6;
            this.screenResolution = '1768x2208';
            this.nfc = true;
            this.camera = true;
            this.cameraMP = 12;
            this.hoursForProduction = 6;
        }else if(modelName === '11T Pro'){
            this.weight = 204;
            this.color = 'White';
            this.memorySize = '256GB';
            this.screenInches = 6.67;
            this.screenResolution = '2400x1080';
            this.nfc = true;
            this.camera = true;
            this.cameraMP = 108;
            this.hoursForProduction = 3;
        }
    }
}