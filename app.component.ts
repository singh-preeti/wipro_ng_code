import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getList : any [] = [];
   
  constructor(private http: HttpClient){

  }

  getPost(){

    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe((result:any) =>{
      this. getList = result;
    })
  }
}
