import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componente/formulario/formulario.component';
import { Formulario2Component } from './componente/formulario2/formulario2.component';


const routes: Routes = [
  {path: 'form1', component: FormularioComponent },
  {path: 'form2', component: Formulario2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
