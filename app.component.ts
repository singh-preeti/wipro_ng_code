import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  userObj : any = {
    fisrtName: '',
    lastName: '',
    userName: '',
    city: '',
    state:'',
    zip: '',
    isTermsAgree: false
  }
  onSave(){
    const formValue = this.userObj;
  }
  
}
