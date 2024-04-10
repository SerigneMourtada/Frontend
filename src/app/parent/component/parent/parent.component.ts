import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ParentDTO } from '../../model/parent.dto';
import { ParentService } from '../../service/parent.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  dataSource!:MatTableDataSource<ParentDTO>;
  displayedColumns: string[] = [
    'id',
    'nom',
    'prenom',
    'addresse',
    'telephone',
    'lienDeParente'
  ];
 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private parentService:ParentService) { }

  ngOnInit(): void {
    this.getAllParents();
  }

  getAllParents(){
    this.parentService.getAllParents().subscribe({
      next:(parents)=>{
        this.dataSource=new MatTableDataSource(parents);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

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

}
