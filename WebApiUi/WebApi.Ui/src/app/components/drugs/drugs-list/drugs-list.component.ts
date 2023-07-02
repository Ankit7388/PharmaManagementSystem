import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';

@Component({
  selector: 'app-drugs-list',
  templateUrl: './drugs-list.component.html',
  styleUrls: ['./drugs-list.component.css']
})
export class DrugsListComponent implements OnInit {
  
  drugs: Drug[] = [];
  constructor(private drugsServices: DrugsService){ }
  ngOnInit(): void {
    this.drugsServices.getDrugs()
    .subscribe({
      next: (drugs) => {
        this.drugs = drugs;
        console.log(drugs);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

}
