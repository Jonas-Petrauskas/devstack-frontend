import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './components/app-component/app.component';
import { CompanyDashboardComponent } from './components/company-dashboard/company-dashboard.component';
import { CompanyLoginComponent } from './components/company-login/company-login.component';
import { CompanySignUpComponent } from './components/company-sign-up/company-sign-up.component';
import { DevCardComponent } from './components/dev-card/dev-card.component';
import { DeveloperDashboardComponent } from './components/developer-dashboard/developer-dashboard.component';
import { DeveloperDashboardMainComponent } from './components/developer-dashboard-main/developer-dashboard-main.component';
import { DeveloperDashboardOtherComponent } from './components/developer-dashboard-other/developer-dashboard-other.component';
import { DeveloperLoginComponent } from './components/developer-login/developer-login.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { HomeComponent } from './components/home/home.component';
import { HomeJobCardComponent } from './components/home-job-card/home-job-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarDropdownComponent } from './components/navbar-dropdown/navbar-dropdown.component';
import { NavbarLogoutComponent } from './components/navbar-logout/navbar-logout.component';
import { SearchComponent } from './components/search/search.component';
import { SvgItemComponent } from './components/svg-item/svg-item.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { CompanyLogosComponent } from './components/company-logos/company-logos.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyDashboardComponent,
    CompanyLoginComponent,
    CompanySignUpComponent,
    DevCardComponent,
    DeveloperDashboardComponent,
    DeveloperDashboardMainComponent,
    DeveloperDashboardOtherComponent,
    DeveloperLoginComponent,
    DropdownComponent,
    HomeComponent,
    HomeJobCardComponent,
    NavbarComponent,
    NavbarDropdownComponent,
    NavbarLogoutComponent,
    SearchComponent,
    SvgItemComponent,
    NavbarLogoutComponent,
    ChatComponent,
    MessageComponent,
    CompanyLogosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
