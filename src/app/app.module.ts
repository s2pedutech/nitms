import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './shared';
import * as firebase from 'firebase';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

export const createTranslateLoader = ( http: HttpClient ) => {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

var config = {
    apiKey: "AIzaSyDKg-DrORLEw5cYqk81T5FhyYn0KHjjtMA",
    authDomain: "nitms-84ab3.firebaseapp.com",
    databaseURL: "https://nitms-84ab3.firebaseio.com",
    projectId: "nitms-84ab3",
    storageBucket: "nitms-84ab3.appspot.com",
    messagingSenderId: "276244191720"
};

firebase.initializeApp(config);

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AngularFireModule.initializeApp(config),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        FormsModule,
        ReactiveFormsModule,
        
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule
    ],    
    
    declarations: [AppComponent],
    providers: [AuthGuard, AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {}