import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VaccinService } from '../../service/vaccin.service';

@Component({
  selector: 'app-add-vaccin',
  templateUrl: './add-vaccin.component.html',
  styleUrls: ['./add-vaccin.component.scss']
})
export class AddVaccinComponent implements OnInit {
  vaccinForm!:FormGroup

  constructor(private fb:FormBuilder,
              private vaccinService:VaccinService) { }

  ngOnInit(): void{
    this.vaccinForm=this.fb.group({
      nomVaccin:'',
      numeroDeLot:'',
      effetSecondaires:''
    })
  }

  ajouterVaccin(){
    this.vaccinService.saveVaccin(this.vaccinForm.value).subscribe({
      next:(res)=>{
        alert('Vaccin added Successfully');

      },error:console.log
    })

  }

}
