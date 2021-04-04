import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCellphoneComponent } from './components/add-cellphone/add-cellphone.component';
import { CellphoneDetailsComponent } from './components/cellphone-details/cellphone-details.component';
import { CellphoneListComponent } from './components/cellphone-list/cellphone-list.component';

const routes: Routes = [
  {path: '',redirectTo:'cellphones',pathMatch:'full'},
  {path: 'cellphones',component:CellphoneListComponent},
  {path: 'cellphones/:id',component:CellphoneDetailsComponent},
  {path: 'add',component:AddCellphoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
