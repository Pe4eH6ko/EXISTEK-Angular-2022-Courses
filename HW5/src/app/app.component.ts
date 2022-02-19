import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators, FormsModule } from '@angular/forms';
import { CustomValidators } from './homework/validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  visible = false;
  lableName!:any;
  sameAddress = false;
  labelId:any;
  form= new FormGroup({
    studentName: new FormGroup({
      firstName: new FormControl('',[Validators.required, CustomValidators.englishChars]),
      middleName: new FormControl(''),
      lastName: new FormControl('', [Validators.required, CustomValidators.englishChars])
    }),
    birthDate: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormGroup({
      streetAddress: new FormControl('', Validators.required),
      workAddress: new FormControl(''),
      city: new FormControl('',Validators.required),
      stateProvince: new FormControl('',Validators.required),
      postalZipCode: new FormControl('', Validators.required)
    }),
    email: new FormControl('', [Validators.required, Validators.email]),
    phones: new FormArray([
      new FormControl('+380', Validators.required, CustomValidators.mobileOperators),
    ]),
    workNumber: new FormControl(''),
    courses: new FormControl('', Validators.required),
    higherEducation: new FormControl('', Validators.required),
    comments: new FormControl('')
  });

  workAddressValue(){
    this.sameAddress=!this.sameAddress;
  }

  onSubmit(){
    console.log(this.form)
  }
  getArray(){
    return this.form.get('phones') as FormArray;
  }
  getGroup(item:any): FormGroup{
    return this.form.controls[item] as FormGroup; 
  }
  ngOnInit(): void {
    this.form.get('address.streetAddress')?.valueChanges.subscribe(newAdress => {
      if(this.sameAddress === true){
        this.form.patchValue({
          address:{
            workAddress: newAdress
          }
        })
      }  
    })    
  }

  getFormsControls():FormArray{
    return this.form.controls['phones'] as FormArray;
  }

  addPhoneNumber(){
    (<FormArray>this.form.controls['phones']).push(new FormControl('+380', Validators.required, CustomValidators.mobileOperators));
  }

  removeNumber(i:any){
    (<FormArray>this.form.controls['phones']).removeAt(i);
  }
  editNumber(i:any){
    this.visible = !this.visible;
    this.labelId = 'phone'+i;
  }
  saveLabel(){
    this.visible = !this.visible;
    let newLabel = (<HTMLInputElement>document.querySelector('#labelChange'))?.value;
    let chaneLabel = document.querySelector('#'+this.labelId);
    chaneLabel!.innerHTML = newLabel;
  }
}





