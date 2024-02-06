import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  formdata:Fruit={
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }
  constructor(
    private fruitservices:FruitService,
    private router:Router,
    private route:ActivatedRoute
  ){}
  ngOnInit(): void {
   this.route.paramMap.subscribe((param)=>{

    let id=Number(param.get('id'))
    this.getById(id)
   })
  }

  getById(id:number)
  {
    this.fruitservices.edit(id).subscribe((data)=>
    {
      this.formdata=data;
    })
  }

  update()
  
    {
      this.fruitservices.update(this.formdata).subscribe({
        next:(data)=>{
        this.router.navigate(["/fruit/home"])
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
  
}
