import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  data:any=[];

  constructor(private pservice:ProductService){

    this.pservice.getAllProducts().subscribe(
      (pdata)=>{
        this.data=pdata;
      }
    )

  }

}
