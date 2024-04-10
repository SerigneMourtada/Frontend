import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CentreService } from '../../service/centre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-centre',
  templateUrl: './add-centre.component.html',
  styleUrls: ['./add-centre.component.scss']
})
export class AddCentreComponent implements OnInit {
  centreForm!:FormGroup;

  constructor(private fb:FormBuilder,
    private centreService:CentreService,
    private router:Router) { }

  ngOnInit(): void {
    this.centreForm=this.fb.group({
      nom:'',
      addresse:'',
      heure_Ouverture:'',
      heure_De_Fermeture:'',
      email:''
    })
  }

  ajouterCentre(){
    if(this.centreForm.valid){
      this.centreService.saveCentre(this.centreForm.value).subscribe({
        next:(res)=>{
          alert('Centre Added Successfully');
          this.router.navigateByUrl("/centre");
          

        },error:console.log
      })
    }

  }

}
