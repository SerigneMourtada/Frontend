import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EnfantService } from '../service/enfant.service';
import { EnfantDTO } from '../model/enfant.dto';
import { Observable } from 'rxjs';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { AddEnfantComponent } from '../model/add-enfant/add-enfant.component';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss']
})
export class EnfantComponent implements OnInit {
  dataSource!:MatTableDataSource<EnfantDTO>;
  //enfant!: EnfantDTO[];
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'sexe',
    'dateDeNaissance',
    'action'
  ];
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private enfantService: EnfantService,
              private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.enfantService.getAllEnfant().subscribe({
      next: (enfants) => {
      this.dataSource = new MatTableDataSource(enfants);  
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(enfants);

      }, error: console.log
    });

  }

  deleteEnfant(id:number){
    this.enfantService.supprimerEnfant(id).subscribe({
      next:(res)=>{
        alert("Enfant Deleted Successfully");
        this.getEmployeeList();

      },
      error:console.log
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleEnfantAction(){

    const dialogConfig=new MatDialogConfig();
    dialogConfig.width="550px";
    this.dialog.open(AddEnfantComponent,dialogConfig);
    
  }

}
