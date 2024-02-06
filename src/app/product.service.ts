import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
data:any=[];
  url="http://localhost:3000/products";
  constructor(private http:HttpClient) { }

  getAllProducts()
  {
    return this.http.get(this.url);
  }

  getProductById(id:any){
    this.getAllProducts().subscribe((pdata)=>{
      this.data=pdata;
    })
    for(let p of this.data)
    {
      if(p.id==id)
      {
        return p;
      }
    }
    return null;
  }
}
