import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume/resume.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MeComponent } from './components/me/me.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './components/home/home.component';
import { UxComponent } from './components/ux/ux.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    EducationComponent,
    CertificationsComponent,
    SkillsComponent,
    ProjectsComponent,
    VolunteeringComponent,
    AwardsComponent,
    ExperienceComponent,
    MeComponent,
    ContactComponent,
    HomeComponent,
    UxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp({"projectId":"emilioenlaluna-portfolio","appId":"1:373243484630:web:b5c8d84e31c6ac921f2c77","databaseURL":"https://emilioenlaluna-portfolio-default-rtdb.firebaseio.com","storageBucket":"emilioenlaluna-portfolio.appspot.com","apiKey":"AIzaSyBf6321k7l45vDJJ9UbS7oWA2Bgs-bbjH4","authDomain":"emilioenlaluna-portfolio.firebaseapp.com","messagingSenderId":"373243484630","measurementId":"G-54W1YKQXCP"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
