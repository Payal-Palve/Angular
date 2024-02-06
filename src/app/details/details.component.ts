import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  data:any=[];
  obj:any;
  constructor(private pservice:ProductService,private aroute:ActivatedRoute)
  {
    
     aroute.params.subscribe(
      (data)=>{
         let id=data['product.id']
         this.obj=pservice.getProductById(id)
      }
     )
  }
}
