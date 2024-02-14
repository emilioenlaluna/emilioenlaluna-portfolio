import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AwardsComponent } from './components/awards/awards.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { MeComponent } from './components/me/me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillsComponent } from './components/skills/skills.component';
import { VolunteeringComponent } from './components/volunteering/volunteering.component';
import { UxComponent } from './components/ux/ux.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {  path: "awards", component: AwardsComponent},
  {  path: "certifications", component: CertificationsComponent},
  {  path: "contact", component: ContactComponent},
  {  path: "education", component: EducationComponent},
  {  path: "experience", component: ExperienceComponent},
  {  path: "", component: HomeComponent},
  {  path: "me", component: MeComponent},
  {  path: "projects", component: ProjectsComponent},
  {  path: "resume", component: ResumeComponent},
  {  path: "skills", component: SkillsComponent},
  {  path: "ux", component: UxComponent},
  {  path: "volunteering", component: VolunteeringComponent},
  { path: '**', redirectTo: '/404' }, // Wildcard route
  { path: '404', component: NotFoundComponent }, // 404 route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
