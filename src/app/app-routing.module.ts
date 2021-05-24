import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'company/signup', component: CompanySignUpComponent },
  { path: 'company/dashboard', component: CompanyDashboardComponent },
  // { path: 'developer/signup', component: DeveloperSignUpComponent },
  { path: 'developer/dashboard', component: DeveloperDashboardComponent },
  { path: '**', redirectTo: '' }, // TODO: redirect to 404 component in the future!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
