import { Directive,ElementRef, AfterViewInit, Input} from "@angular/core";

@Directive({selector: '[ifNumber]'})
export class ifNumberDirective implements AfterViewInit{
    constructor(private element: ElementRef) {}
    information:any;
    ngAfterViewInit(): void {
        if(this.information < 50){
            this.element.nativeElement.style.color='red';
        }else if(this.information > 50){
            this.element.nativeElement.style.color='green';
        }else 
        if(this.information === 'Judy'){
            this.element.nativeElement.style.color='Blue';
        }
    }

    @Input() set ifNumber(data: any){
        this.information = data;        
    }
}