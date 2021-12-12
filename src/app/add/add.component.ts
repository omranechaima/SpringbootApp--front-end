import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  e:any={"id":0,"nom":"","prenom":""}
  constructor(private g:GestionService, private route:Router) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.g.addEtudiant(this.e).subscribe(
      {
        next:(data:any)=> {this.route.navigate(['liste']);},
        error:(err:any)=> {},
        complete:()=>{}
      }


    )

  }

}
