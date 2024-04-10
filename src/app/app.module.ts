import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgxUiLoaderConfig,NgxUiLoaderModule } from 'ngx-ui-loader';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { EnfantComponent } from './enfant/enfant/EnfantComponent';
import { ParentComponent } from './parent/component/parent/parent.component';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { VaccinComponent } from './vaccin/component/vaccin/vaccin.component';
import { UtilisateurComponent } from './utilisateur/component/utilisateur/utilisateur.component';
import { AddEnfantComponent } from './enfant/model/add-enfant/add-enfant.component';
import { CentreComponent } from './centre/component/centre/centre.component';
import { AddCentreComponent } from './centre/component/add-centre/add-centre.component';
import { AddUtilisateurComponent } from './utilisateur/component/add-utilisateur/add-utilisateur.component';
import { AddVaccinComponent } from './vaccin/component/add-vaccin/add-vaccin.component';

 
 

const ngxUiLoaderConfig:NgxUiLoaderConfig={
  text:"Loading....",
  textColor:"#FFFFFF",
  textPosition:"center-center",
  bgsColor:"#7b1fa2",
  fgsColor:"#7b1fa2",
  //fgsType:SPINNER.squareJellyBox,
  fgsSize:100,
  hasProgressBar:false
}

@NgModule({
  declarations: [	
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    LoginComponent,
    EnfantComponent,
    ParentComponent,
    VaccinComponent,
    UtilisateurComponent,
    AddEnfantComponent,
    CentreComponent,
    AddCentreComponent,
    AddUtilisateurComponent,
    AddVaccinComponent,
    
   
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
