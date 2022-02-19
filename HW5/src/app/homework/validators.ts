import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
    static englishChars(control: AbstractControl) : ValidationErrors | null {
        let check = 0;
        for(let i =0; i< control.value.length; i++){
            if(!((control.value.charCodeAt(i)>=65 && control.value.charCodeAt(i)<=90) || (control.value.charCodeAt(i)>=97 && control.value.charCodeAt(i)<=122))){
                check++;
            }
        }
        if(check !== 0){
            return {englishChars: true};
        }else {
            return null;
        }
    } 


    static mobileOperators(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        let operators = ['39','50','63','66','67','68','73','89','91','92','93','94','95','96','97','98','99'];
        let zero = control.value.indexOf('0');
        let operator = control.value.slice(zero+1, zero+3);
        let match = false;
        return new Promise(resolver => {
            setTimeout(()=> {
                for(let i = 0; i<operators.length; i++){
                    if(operator === operators[i]){
                        match = true;
                    }
                }
                if(match === true){
                    resolver(null);
                }
                else{
                    resolver({mobileOperators: true});
                }
            }, 2000)
        });
    }
      
}