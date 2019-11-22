import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServiceComponent } from './Services/service.component';
import { FooterComponent } from './Footer/footer.component';
import { LayoutComponent } from './Layout/layout.component';
import { AboutComponent } from './AboutUs/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './Clients/client.component';
import { InvestorsComponent } from './Investors/investor.component';
import { PriceComponent } from './Pricing/price.component';
import { TrainingComponent } from './Training/training.component';
import { HomeComponent } from './Home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'investors', component: InvestorsComponent },
  { path: 'pricing', component: PriceComponent },
  { path: 'training', component: TrainingComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ), BrowserModule, FormsModule ],
  declarations: [ AppComponent, ServiceComponent,FooterComponent,AboutComponent,ClientComponent, LayoutComponent, InvestorsComponent, PriceComponent,HomeComponent, TrainingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
