import { Routes } from '@angular/router';
import { FruitModule } from './fruit/fruit.module';
import { HomeComponent } from './fruit/home/home.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './fruit/create/create.component';
import { EditComponent } from './fruit/edit/edit.component';


export const routes: Routes = [
     {path:'fruit/home',component:HomeComponent},
    {path:'fruit' ,redirectTo:'fruit/home',pathMatch:'full'},
    {path:'fruit/create',component:CreateComponent},
    {path:'fruit/edit/:id',component:EditComponent},
   
    {path:'',redirectTo:'fruit/home' ,pathMatch:'full'}
];
