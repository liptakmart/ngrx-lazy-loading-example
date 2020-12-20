import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component : AppComponent},
  {path : 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule)},
  {path : 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path: '**', component : PageNotFoundComponent}, // must be last route in this array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
