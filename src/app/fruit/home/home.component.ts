import { Component, OnInit } from '@angular/core';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  allfruits:Fruit[]=[];
  constructor( private fruitservices:FruitService){}
  ngOnInit(): void {
    this.fruitservices.getAll().subscribe(
      (data)=>{
        this.allfruits=data;
      }
    )
    
  }

  deleteItem(id:number)
  {
    this.fruitservices.delete(id).subscribe({
      next:(data)=>{
        this.allfruits=this.allfruits.filter(_ => _.id !=id)
      },

    })
    

    
  
  }
}
