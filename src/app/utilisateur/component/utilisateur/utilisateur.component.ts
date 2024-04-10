import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UtilisateurService } from '../../service/utilisateur.service';
import { UtilisateurDTO } from '../../model/user.dto';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddUtilisateurComponent } from '../add-utilisateur/add-utilisateur.component';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom', 
    'addresse',
    'email',
    'telephone',
    'password',
    'action'
  ];
  dataSource!: MatTableDataSource<UtilisateurDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private utilisateurService:UtilisateurService,
              private dialog:MatDialog) { }

  ngOnInit(): void{

    this.getAllUser();

  }

  getAllUser(){
    this.utilisateurService.getAllUsers().subscribe({
      next:(users)=>{
        this.dataSource=new MatTableDataSource(users);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;

      },
      error:console.log
    })

  }

  deleteUser(id:number){
    this.utilisateurService.deleteUser(id).subscribe({
      next:(res)=>{
        alert('User deleted successfully');
        this.getAllUser();

      },error:console.log
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  handleOpenUser(){
    const dialogConfig=new MatDialogConfig;
    dialogConfig.width='550px';
    this.dialog.open(AddUtilisateurComponent,dialogConfig)

  }

}
