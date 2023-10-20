import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent implements OnInit {
  // for 1
  isGreen: Boolean = true;
  handleChange(color: String){
    if(color == 'g')
      this.isGreen = true;
    else
      this.isGreen = false;
  
  }

  // for 2nd
  selectedvalue: number=0

  returnColorBasedOnRange(){
    if(this.selectedvalue >=0 && this.selectedvalue <=50)
      return 'green';
    else if(this.selectedvalue >50 && this.selectedvalue <=80)
      return 'blue'
    else if(this.selectedvalue >80 && this.selectedvalue <=100)
      return 'red'
    else 
      return 'white'
  }

  // for 3rd 
  isBold: Boolean=false;
  isItalic: Boolean=false;
  
  constructor() { }
 
  ngOnInit(): void {
  }


}
