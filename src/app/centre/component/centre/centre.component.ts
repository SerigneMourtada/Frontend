import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CentreDTO } from '../../model/centre.dto';
import { CentreService } from '../../service/centre.service';
import { MatDialog ,MatDialogConfig} from '@angular/material/dialog';
import { AddCentreComponent } from '../add-centre/add-centre.component';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.scss']
})
export class CentreComponent implements OnInit {
  dataSource!:MatTableDataSource<CentreDTO>;
  //enfant!: EnfantDTO[];
  displayedColumns: string[] = [
    'id',
    'nom',
    'addresse',
    'heure_Ouverture',
    'heure_De_Fermeture',
    'email',
    'action'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private centreService:CentreService,
              private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAllCentre();
  }


  getAllCentre(){
    this.centreService.getAllCentres().subscribe({
      next:(centres)=>{
        this.dataSource=new MatTableDataSource(centres);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;

      },error:console.log
    })
  }

  deleteCentre(id:number){
    this.centreService.deleteCentre(id).subscribe({
      next:(res)=>{
        alert("Centre deleted successfully");
        this.getAllCentre();

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

  handleAddCentre(){
    const dialogConfig=new MatDialogConfig;
    dialogConfig.width='550px';
    this.dialog.open(AddCentreComponent,dialogConfig);

  }

}
