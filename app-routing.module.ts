import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./reg/reg.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'choose-emer',
    loadChildren: () => import('./choose-emer/choose-emer.module').then( m => m.ChooseEmerPageModule)
  },
  {
    path: 'list-serv',
    loadChildren: () => import('./list-serv/list-serv.module').then( m => m.ListServPageModule)
  },
  {
    path: 'call-near',
    loadChildren: () => import('./call-near/call-near.module').then( m => m.CallNearPageModule)
  },
  {
    path: 'nearby-mechan',
    loadChildren: () => import('./nearby-mechan/nearby-mechan.module').then( m => m.NearbyMechanPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./reg/reg.module').then( m => m.HomePageModule)
  },
  {
    path: 'homepg',
    loadChildren: () => import('./homepg/homepg.module').then( m => m.HomepgPageModule)
  },
  {
    path: 'near-adnoc',
    loadChildren: () => import('./near-adnoc/near-adnoc.module').then( m => m.NearAdnocPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
