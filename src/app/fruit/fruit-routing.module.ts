import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'fruit/home',component:HomeComponent},
  {path:'fruit' ,redirectTo:'fruit/home',pathMatch:'full'},
  {path:'',redirectTo:'fruit/home' ,pathMatch:'full'},

  {path:'fruit/edit:id' ,component:EditComponent},
  {path:"fruit/create",component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FruitRoutingModule { }
