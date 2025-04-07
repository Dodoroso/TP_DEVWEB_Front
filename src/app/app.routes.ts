import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LaboratoireComponent } from './component/laboratoire/laboratoire.component';
import { FrigoComponent } from './component/frigo/frigo.component';
import { BarComponent } from './component/bar/bar.component';
import { LoginComponent } from './component/login/login.component';

export const routes: Routes = [
  { path: "Laboratoire", component: LaboratoireComponent },
  { path: "Frigo", component: FrigoComponent },
  { path: "Bar", component: BarComponent },
  { path: "Login", component: LoginComponent },
  { path: "**", redirectTo: "Laboratoire" }
];