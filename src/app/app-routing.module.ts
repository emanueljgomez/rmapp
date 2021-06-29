import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component'; // Autoimport Línea 7 -- Path a LoginComponent definido, se renderizará en el router-outlet
import { LoginComponent } from './modules/login/components/login/login.component'; // Autoimport Línea 8 -- Path a LoginComponent definido, se renderizará en el router-outlet

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }, // Redireccionamiento en caso de path inexistente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
