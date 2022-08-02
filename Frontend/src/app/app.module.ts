import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    SignupComponent,
    LoginComponent,
    BookComponent,
    AddBookComponent,
    UpdateComponent
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
