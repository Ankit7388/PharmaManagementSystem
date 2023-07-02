import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Drug } from 'src/app/models/drug.model';
import { DrugsService } from 'src/app/services/drugs.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-drug',
  templateUrl: './add-drug.component.html',
  styleUrls: ['./add-drug.component.css']
})
export class AddDrugComponent implements OnInit {
  addDrugRequest: Drug = {
    DrugId: 0,
    DrugName: '',
    DrugDescription: '',
    DrugPrice: 0,
    DrugQuantityAvailable: 0,
    SuccessMessage: ''
  };
  isFormSubmitted = false;
  constructor(private drugService: UsersService, private router: Router) {}
  ngOnInit(): void {
    
  }
  addDrug() {
    this.isFormSubmitted = true;
    this.drugService.addDrug(this.addDrugRequest)
    .subscribe({
      next: (drug) => {
        this.router.navigate(['drugs']);
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
 
}
