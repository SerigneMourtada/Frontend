import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { VaccinDTO } from '../../model/vaccin.dto';
import { VaccinService } from '../../service/vaccin.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddVaccinComponent } from '../add-vaccin/add-vaccin.component';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.scss']
})
export class VaccinComponent implements OnInit {
  displayedColumns: string[] =
   [
    'id', 
   'nomVaccin',
    'numeroDeLot', 
    'effetSecondaires',
    'action'
  ];
  dataSource!: MatTableDataSource<VaccinDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private vaccinService:VaccinService,
              private dialog:MatDialog) { }

  ngOnInit(): void{
    this.getAllVaccins();

  }


  getAllVaccins(){
    this.vaccinService.getAllVaccin().subscribe({
        next:(vaccins)=>{
          this.dataSource=new MatTableDataSource(vaccins);
          this.dataSource.sort=this.sort;
          this.dataSource.paginator=this.paginator;

        },error:console.log
    })

  }

  deleteVaccin(id:number){
    this.vaccinService.deleteVaccin(id).subscribe({
      next:(res)=>{
        alert('Vaccin Deleted Successfully');
        this.getAllVaccins();

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

  handleOpenVaccin(){
    const dialogConfig=new MatDialogConfig
    dialogConfig.width='550px';
    this.dialog.open(AddVaccinComponent,dialogConfig)

  }

}
