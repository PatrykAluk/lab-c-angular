import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonLsService } from '../person-ls.service';
import { Person } from '../person';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  personId?: number;
  person?: Person;

  constructor(
    private route: ActivatedRoute,
    private personLsService: PersonLsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.personId = +id; // Convert string param to a number
        this.person = this.personLsService.getPerson(this.personId);
      }
    });
  }
}
