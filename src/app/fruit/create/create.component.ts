import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {


  constructor(private fruitservices:FruitService,private router:Router){}

  formdata:Fruit={
    id: 0,
    name: ' ',
    price: 0,
    quantity: 0
  }

  create()
  {
    this.fruitservices.create(this.formdata).subscribe({
      next:(data)=>{
      this.router.navigate(["/fruit/home"])
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

}
