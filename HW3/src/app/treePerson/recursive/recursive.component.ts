import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../Person';

@Component({
    selector: 'persons',
    templateUrl: './recursive.component.html',
    styleUrls: ['./recursive.component.css']
})

export class PersonsComponent implements OnInit{
    indexer = 0;
    temp=0;
    showDiv = false;
    @Input() persons!: any;

    @Output() 
    allMessages: EventEmitter<any> = new EventEmitter<any>();

    sendMessage(message: string){
        console.log('hello');
    }
    
    showMessage(person:Person, event:Event){
        this.allMessages.emit(person);
        console.log('parent');
    }
    showChildrenMessage(person: Person){
        this.allMessages.emit(person);
        console.log('children');
    }
    addPerson(person: Person){
        let name = prompt('Input name of new Person');
        person.heirs.push(
            {
                id: person.id+this.indexer*2,
                personName: name,
                childAccess: false,
                heirs:[]
            }
        )
    }
    showNested(person: Person){
        person.childAccess = !person.childAccess;   
    }
    editName(person:Person){
        let id=<string><unknown>person.id
        let name = document.getElementById(id);
        name?.classList.toggle('visible');    
    }
    saveNewName(person:Person){
        let id=<string><unknown>person.id
        let name = document.getElementById(id);
        name?.classList.toggle('visible');
    }
    deleteElement(person:Person){
        for(let i=0; i<this.persons.length;i++){
            if(this.persons[i]===person){
                this.persons.splice(i,1);
            }
        }
    }
    ngOnInit(): void {
    }

}
