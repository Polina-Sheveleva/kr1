import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FillModelComponent } from './fill-model/fill-model.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes =[
  {path:"", component:HomeComponent},
{path:"fillmodel", component:FillModelComponent},
{path:"model/:id", component:ModelsComponent},
{path:"about", component:AboutComponent},
{path:"**", component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
