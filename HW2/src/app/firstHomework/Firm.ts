export default class Firm {
    name: string;
    founder: string[];
    type: string;
    counrty: string;

    constructor(name: string){
        this.name = name;
        this.founder = [];
        this.type='';
        this.counrty = '';
        if(name === 'Apple'){
            this.founder = ['Steve Jobs', 'Steve Wozniak', 'Ronald Wayne'];
            this.counrty = 'USA';
            this.type = 'Public';
        } else if(name === 'Samsung'){
            this.founder = ['Lee Byung-chul'];
            this.counrty = 'South Korea';
            this.type = 'Private';       
        }else if(name==='Xiaomi'){
            this.founder = ['Lei Jun'];
            this.counrty = 'China';
            this.type = 'Public';     
        }
    }
}