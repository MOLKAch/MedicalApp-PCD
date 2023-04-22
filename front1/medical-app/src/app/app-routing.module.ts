import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AjoutMedComponent } from "./components/ajout-med/ajout-med.component";
import { AjoutSecComponent } from "./components/ajout-sec/ajout-sec.component";
import { AjoutTherapieComponent } from "./components/ajout-therapie/ajout-therapie.component";
import { AppointmentListComponent } from "./components/appointment-list/appointment-list.component";
import { AppointmentComponent } from "./components/appointment/appointment.component";
import { DoctorComponent } from "./components/doctor/doctor.component";
import { ForbiddenComponent } from "./components/forbidden/forbidden.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MedPComponent } from "./components/med-p/med-p.component";
import { MedSComponent } from "./components/med-s/med-s.component";
import { ModifMedsComponent } from "./components/modif-meds/modif-meds.component";
import { ModifSecComponent } from "./components/modif-sec/modif-sec.component";
import { ModifTherapieComponent } from "./components/modif-therapie/modif-therapie.component";
import { NavComponent } from "./components/nav/nav.component";
import { PatientComponent } from "./components/patient/patient.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { RegisterComponent } from "./components/register/register.component";
import { SecComponent } from "./components/sec/sec.component";
import { SecretaireComponent } from "./components/secretaire/secretaire.component";
import { TherapieListComponent } from "./components/therapie-list/therapie-list.component";
import { TherapieComponent } from "./components/therapie/therapie.component";
import { AuthGuard } from "./services/auth.guard";
import { MedAuthGuard } from "./services/med-auth.guard";
import { MedSAuthGuard } from "./services/med-sauth.guard";
import { SecAuthGuard } from "./services/sec-auth.guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inscrire',
    component: RegisterComponent
  },
  {path: '',component: HomeComponent},
   {path:'updateTherapie/:id',component:ModifTherapieComponent},
  {path:'navbar',component:NavComponent},
  {path:'ajouterMedecin',component:AjoutMedComponent,canActivate:[AuthGuard]},
  {path:'ajouterSecretaire',component:AjoutSecComponent,canActivate:[AuthGuard]},
  {path:'ajouterTherapie',component:AjoutTherapieComponent,canActivate:[AuthGuard]},
  {path: 'therapie/:id', component:TherapieComponent},
  {path: 'therpaies',component:TherapieListComponent},
  {path:'patient',component:PatientComponent, canActivate:[AuthGuard],
  children:[
    {path: 'home',component: HomeComponent},
    {path:'appointment',component:AppointmentComponent},
    {path:'navbar',component:NavComponent},
    {path:'therapie/:id',component:TherapieComponent},
    {path: '',component:TherapieListComponent},]
},
  {path:'doctor',component:MedPComponent,canActivate:[MedAuthGuard],
  children:[
    {path: 'home',component: HomeComponent},
    {path:'ajouterTherapie',component:AjoutTherapieComponent},
    {path: 'modifierTherapie',component:ModifTherapieComponent},
    {path:'ajouterMedecin',component:AjoutMedComponent},
    {path:'ajouterSecretaire',component:AjoutSecComponent},
    {path: 'profile',component:ProfileComponent},
    {path:'navbar',component:NavComponent},
    {path: '',component:TherapieListComponent},

    {path:'therapie/:id',component:TherapieComponent},
    {path:'modifierMedecin/:email',component:ModifMedsComponent},
    {path:'doctors',component:DoctorComponent},
    {path:'secretaires',component:SecretaireComponent}
   ]},
  {path:'doctorsec',component:MedSComponent, canActivate:[MedSAuthGuard],
       children:[
        {path: 'home',component: HomeComponent},
        {path:'ajouterTherapie',component:AjoutTherapieComponent},
        {path: 'profile',component:ProfileComponent},
        {path:'navbar',component:NavComponent},
        {path: 'therapies',component:TherapieListComponent},

        {path:'therapies/therapie/:id',component:TherapieComponent},
        {path:'modifierMedecin/:email',component:ModifMedsComponent}
       ]},
  {path:'secretaire',component:SecComponent,canActivate:[SecAuthGuard],
        children:[
          {path: 'home',component: HomeComponent},
          {path:'profile',component:ProfileComponent},
          {path: 'therpaies',component:TherapieListComponent},
          {path:'modifierSecretaire/:email',component:ModifSecComponent},
          {path:'navbar',component:NavComponent},
          {path:'therapies/therapie/:id',component:TherapieComponent},
          {path: 'appointments',component:AppointmentListComponent }
        ]},

  {path:'forbidden',component:ForbiddenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }