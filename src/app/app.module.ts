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
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { environment } from 'src/environments/environment.prod';
import { ToastrModule } from 'ngx-toastr'; // Importa ngx-toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    UxComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
      
    }),
    PdfViewerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    HttpClientModule,
    TranslocoRootModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [  { provide: FIREBASE_OPTIONS, useValue: environment.firebase }   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
