import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  liste:any=[]

  constructor(private g:GestionService,private route:Router) {
    this.getEtudiants();
   }

  ngOnInit(): void {
  }
  getEtudiants(){
    this.g.getAllEtudiants().subscribe(
      {
        next:(data:any) => {this.liste = data;},
        error:(err:any)=>{},
        complete:() =>{}
      }
    )
  }
  delete(id:number){
    this.g.deleteEtudiant(id).subscribe(
      {
        next:(data:any) => {this.getEtudiants()},
        error:(err:any)=>{},
        complete:() =>{}
      }
    )
  }

}
