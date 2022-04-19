import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/auth/models/user';

@Injectable({
  providedIn: 'root'
})
export class MainpageService {

  private url : string;
  constructor(private http: HttpClient, private router: Router) {
    this.url = "http://localhost:8080/api/projects/all-projects";
  }




  getAllProjects(projects:any){
    return this.http.get(this.url).subscribe(
      data => {
        projects = data;
        console.warn(projects);
      }
    )
  }

  getEnvironmentsOfProject(){

  }


}
