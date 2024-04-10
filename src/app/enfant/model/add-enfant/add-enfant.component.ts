import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnfantService } from '../../service/enfant.service';

@Component({
  selector: 'app-add-enfant',
  templateUrl: './add-enfant.component.html',
  styleUrls: ['./add-enfant.component.scss']
})
export class AddEnfantComponent implements OnInit {
  enfantForm!:FormGroup

  constructor(private fb:FormBuilder,
              private enfantService:EnfantService) { }

  ngOnInit(): void {
    this.enfantForm=this.fb.group({
      nom:'',
      prenom:'',
      sexe:'',
      dateDeNaissance:''
    })
  }

  ajouterEnfant(){
    if(this.enfantForm.valid){
      console.log(this.enfantForm.value)
    }

  }

}
