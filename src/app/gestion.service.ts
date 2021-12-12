import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  getAllEtudiants(){
    return this.http.get("http://localhost:8080/etudiants");
  }
  addEtudiant(e:any){
    return this.http.post("http://localhost:8080/addEtudiant",e);
  }
  deleteEtudiant(id:number){
    return this.http.delete("http://localhost:8080/deleteEtudiant/"+id)
  }
}
