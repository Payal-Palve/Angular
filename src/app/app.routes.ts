import { Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { DetailsComponent } from './details/details.component';


import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {path:"product",component:ProductComponent},
    {path:"admin",component:AdministratorComponent},
    {path:"details/:product.id",component:DetailsComponent},//routing with parameter
    {path:" ",redirectTo:"home",pathMatch:'full'}
   
  
  
    // {path:"addproduct",component:AdminComponent}
];
