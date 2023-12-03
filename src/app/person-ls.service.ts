import { Injectable } from '@angular/core';
import { Person } from "./person";

@Injectable({
  providedIn: 'root'
})
export class PersonLsService {
  readonly KEY = 'stored-people-data';

  constructor() { }

  public getAll(): Person[] {
    const people = localStorage.getItem(this.KEY);
    if (people) {
      return JSON.parse(people);
    }
    return [];
  }

  public getPerson(index: number): Person {
    const people = this.getAll();
    return people[index];
  }

  public addPerson(person: Person): void {
    const people = this.getAll();
    people.push(person);
    localStorage.setItem(this.KEY, JSON.stringify(people));
  }

  public deletePerson(index: number): void {
    const people = this.getAll();
    if (people[index]) {
      people.splice(index, 1);
      localStorage.setItem(this.KEY, JSON.stringify(people));
    }
  }
}
