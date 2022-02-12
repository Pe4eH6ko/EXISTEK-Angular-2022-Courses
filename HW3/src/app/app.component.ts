import { Component, EventEmitter, Output, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Person } from './treePerson/Person';
import { PersonsComponent } from './treePerson/recursive/recursive.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexer= 0;

  persons: any = [
    {
      id:this.indexer++,
      personName: 'Queen Elizabeth II',
      childAccess: false,
      heirs: [
        {
          id:this.indexer++,
          personName: 'Diana Princess of Wales',
          childAccess: false,
          heirs:[]
        },
        {
          id:this.indexer++,
          personName: 'Charles Prince of Wales',
          childAccess: false,
          heirs:[
            {
              id:this.indexer++,
              personName: 'William Duke of Cambridge',
              childAccess: false,
              heirs:[
                {
                  id:this.indexer++,
                  personName: 'George Prince of Cambridge',
                  childAccess: false,
                  heirs:[]
                }
              ]  
            },
            {
              id:this.indexer++,
              personName: 'Catherine Duchess of Cambridge',
              childAccess: false,
              heirs:[]
            },
            {
              id:this.indexer++,
              personName: 'Harry Duke of Sussex',
              childAccess: false,
              heirs:[
                {
                  id:this.indexer++,
                  personName: 'Archie Harrison',
                  childAccess: false,
                  heirs: []
                }
              ]
            },
            {
              id:this.indexer++,
              personName: 'Meghan Duchess of Sussex',
              childAccess: false,
              heirs:[]
            }
          ]
        },
        {
          id:this.indexer++,
          personName: 'Camilla Duchess of Cornwall',
          childAccess: false,
          heirs:[]
        }
      ]
    },
    {
      id:this.indexer++,
      personName: 'Philip, Duke of Edinburgh',
      childAccess: false,
      heirs: []
    }
  ];
  @ViewChildren(PersonsComponent)
  personComponentRefs: QueryList<ElementRef> | undefined

  receiveMessage(){
    this.personComponentRefs?.forEach(personComponentRef => {
        (personComponentRef as any as PersonsComponent).sendMessage('string');
    })  
  }


  // archie = new Person(this.indexer++, 'Archie Harrison');
  // george = new Person(this.indexer++, 'George Prince of Cambridge');
  // william = new Person(this.indexer++,'William Duke of Cambridge', [this.george]);
  // catherine = new Person(this.indexer++,'Catherine Duchess of Cambridge');
  // harry = new Person(this.indexer++,'Harry Duke of Sussex', [this.archie]);
  // meghan = new Person(this.indexer++, 'Meghan Duchess of Sussex');
  // charles= new Person(this.indexer++, 'Charles Prince of Wales',[this.william, this.catherine,this.harry,this.meghan]);
  // diana = new Person(this.indexer++,'Diana Princess of Wales');
  // camilla = new Person(this.indexer++,'Camilla Duchess of Cornwall');
  // anne = new Person(this.indexer++,'Anne Princess Royal');
  // mark = new Person(this.indexer++,'Captain Mark Phillips');
  // timothy = new Person(this.indexer++, 'Vice-Admiral Timothy Laurence');
  // elizabeth = new Person(this.indexer++,'Queen Elizabeth II',[this.charles,this.diana,this.camilla,this.anne,this.mark,this.timothy]);
  // philip = new Person(this.indexer++, 'Philip, Duke of Edinburgh');

} 
