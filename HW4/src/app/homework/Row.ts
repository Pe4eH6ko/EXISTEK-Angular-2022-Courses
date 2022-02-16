export class Row{
    country!: string;
    code!: string;
    confirmed!: number
    recovered!: number;
    critical!: number;
    deaths!: number;
    latitude!: number;
    longitude!: number;
    lastChange!: Date | string;
    lastUpdate!: Date | string;

    constructor(object: [key:any]){
        for(let key in object){
            switch(key){
                case 'country':
                    this.country = object[key];
                    continue;
                case 'code':
                    this.code = object[key];
                    continue;
                case 'confirmed':
                    this.confirmed = object[key];
                    continue;
                case 'recovered':
                    this.recovered = object[key];
                    continue;
                case 'critical':
                    this.critical = object[key];
                    continue;
                case 'deaths':
                    this.deaths = object[key];
                    continue;
                case 'latitude':
                    this.latitude = object[key];
                    continue;
                case 'longitude':
                    this.longitude = object[key];
                    continue;
                case 'lastChange':
                    if(object[key] === null){
                        this.lastChange = 'no data available';
                    }else{
                        this.lastChange = new Date(object[key]);
                    }
                    continue;
                case 'lastUpdate':
                    if(object[key] === null){
                        this.lastUpdate = 'no data available';
                    }else{
                        this.lastUpdate = new Date(object[key]);
                    }
                    break;    
            }
        }
    }
}