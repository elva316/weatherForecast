import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanJoseComponent } from './san-jose/san-jose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { AnythingComponent } from './anything/anything.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AnythingComponent },
  { path: 'seattle', pathMatch: 'full', component: SeattleComponent},
  { path: 'sanJose', pathMatch: 'full', component: SanJoseComponent },
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent },
  { path: 'dallas', pathMatch: 'full', component: DallasComponent },
  { path: 'washington', pathMatch: 'full', component: WashingtonComponent },
  { path: 'chicago', pathMatch: 'full', component: ChicagoComponent },
  // { path: '**', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const AppRoutingModule = RouterModule.forRoot(APP_ROUTES);
