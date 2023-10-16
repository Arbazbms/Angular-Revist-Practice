import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  firstName: String = "Arbaz"
  imageUrl: String ="https://picsum.photos/seed/picsum/200/300"
  imageArr: any[] = ["https://picsum.photos/seed/picsum/200/300", "https://picsum.photos/seed/picsum/200/300"]
  color='red'
  status:string='error';

  getColor() {
    return 'green';
  }
  alertMe(){
    alert("Event Binding Demo")
  }

  ngOnInit(): void {
  }

}
