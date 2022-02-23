import { Component, OnInit } from '@angular/core';
import { CustomService } from './services/CustomSrvice';
import { User } from './homework/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CustomService]
})
export class AppComponent implements OnInit {
  users: any = [];
  newId!:number; 
  
  constructor(private CustomService: CustomService){}
  
  ngOnInit(): void{
    this.CustomService.getUsers('https://6216873471e7672e5364c4f0.mockapi.io/users/').subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users)
    })       
  }

  addNewUser(){
    let newUser = <User>{
      firstName: "Vivian",
      lastName: "Yundt",
      email: "Blair26@gmail.com",
      city: "Willmsstad",
      zipCode: "65834-2289",
      phone: "338.993.2001",
      birthDay: new Date("2023-02-25T00:43:59.583Z"),
      streetNumber: 66
    }
    this.CustomService.addUser('https://6216873471e7672e5364c4f0.mockapi.io/users/', newUser).subscribe((data: User) => {
      this.users.push(data);
    })
    console.log(this.users);
  }

  updateUserPassword(user: User){
    const updatedUser = {...user,  city: prompt("Input new city")};

    this.CustomService.updateUser(`https://6216873471e7672e5364c4f0.mockapi.io/users/${user.id}`,<User>updatedUser).subscribe((data: User) => {
      let userIndex = this.users.indexOf(user);
      this.users[userIndex] = data;
    })
  }

  deleteUser(user: User){
    this.CustomService.deleteUser('https://6216873471e7672e5364c4f0.mockapi.io/users/', user).subscribe((data:User) => {
      let userIndex = this.users.indexOf(user);
      this.users.splice(userIndex,1);
    })
  }

}
