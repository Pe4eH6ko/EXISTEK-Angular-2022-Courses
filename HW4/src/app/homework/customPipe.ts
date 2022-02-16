import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name: 'customPipe'
})

export class CustomFilter implements PipeTransform {

    transform(value: any[], filter:string, filterValue: string, filterInput:string) {
        let testInput = +filterInput;
        let newArray = [];
        if((filterValue === 'more'|| filterValue === 'less') && filter === 'country'){
            alert('Wrong filter');
            return [];
        }else {
            if(filterValue === 'more'){
                for(let i = 0; i<value.length;i++){
                    if(value[i][filter] > testInput){
                        newArray.push(value[i]);
                    }
                }
                return newArray;
            }else if(filterValue === 'less'){
                for(let i = 0; i<value.length; i++){
                    if(value[i][filter] < testInput){
                        newArray.push(value[i]);
                    }
                }
                return newArray;
            }else if(filterValue === 'equal'){
                for(let i = 0; i<value.length; i++){
                    if(value[i][filter].toString() === filterInput){
                        newArray.push(value[i]);
                    }
                }
                return newArray;
            }else if(filterValue === 'contains'){
                  for(let i = 0; i<value.length; i++){
                      if(value[i][filter].toString().toLocaleLowerCase().includes(filterInput.toLocaleLowerCase())){
                          newArray.push(value[i]);
                      }
                  }
                return newArray;
            }
            return value;
        }
    }
}