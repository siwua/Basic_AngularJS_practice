import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';

const routes = [
  {path: 'characters', component: TabsComponent, children: [
    {path: '', redirectTo: '/characters/all', pathMatch: 'full'},
    {path: ':side', component: ListComponent}
  ]},
  {path: 'new-character', loadChildren: './create-character/create-character.module#CreateCharacterModule'},
  {path: '**', redirectTo: '/characters'} // Must be the last element
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

