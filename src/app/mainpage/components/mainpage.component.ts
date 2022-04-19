import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../models/environment';
import { feature } from '../models/feature';
import { project } from '../models/project';
import { MainpageService } from '../services/mainpage.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor(private mainPageService:MainpageService) { }

  environments:Array<environment> = [];
  features:Array<feature> = [];
  projects:Array<any> = [];

  headers = ["ID", "Name"];

  ngOnInit(): void {
      this.mainPageService.getAllProjects(this.projects);
  }

}
