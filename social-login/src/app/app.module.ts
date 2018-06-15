import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from 'angularx-social-login';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes   = [
  { path: '', component: LoginComponent },
  { path: 'hello', component: HelloWorldComponent }
];

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('Google-OAuth-Client-Id')
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('Facebook-App-Id')
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('LinkedIn-client-Id', false, 'en_US')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
