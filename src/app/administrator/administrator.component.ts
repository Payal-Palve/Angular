import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-administrator',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './administrator.component.html',
  styleUrl: './administrator.component.css'
})
export class AdministratorComponent {

  userLog=false;
user:any=' ';
pass:any=' ';

data:any=[];

constructor(private pservice:ProductService){}
  login()
  {
    if(this.user=='ad' && this.pass=='ad')
    {
         this.userLog=true;
    }
    else{
      alert("invalid");
    }
  }

}
