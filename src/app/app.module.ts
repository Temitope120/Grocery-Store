import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { CustomerReviewComponent } from './customer-review/customer-review.component';
import { BlogsComponent } from './blogs/blogs.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FeaturesComponent,
    ProductsComponent,
    CustomerReviewComponent,
    BlogsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
