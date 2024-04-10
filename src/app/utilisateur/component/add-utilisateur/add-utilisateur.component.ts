import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-add-utilisateur',
  templateUrl: './add-utilisateur.component.html',
  styleUrls: ['./add-utilisateur.component.scss']
})
export class AddUtilisateurComponent implements OnInit {
  userForm!:FormGroup


  constructor(private userService:UtilisateurService,
              private fb:FormBuilder) { }

  ngOnInit():void {
    this.userForm=this.fb.group({
      nom:'',
      prenom:'',
      addresse:'',
      email:'',
      telephone:'',
      password:''

    })
  }

  ajouterUser(){
    

  }

}
