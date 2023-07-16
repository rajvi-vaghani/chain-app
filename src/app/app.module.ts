import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ServiceComponent } from './component/service/service.component';
import { AboutComponent } from './component/about/about.component';
import { ClientComponent } from './component/client/client.component';
import { PriceComponent } from './component/price/price.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServiceComponent,
    AboutComponent,
    ClientComponent,
    PriceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
