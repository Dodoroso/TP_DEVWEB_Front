import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LaboratoireComponent } from './component/laboratoire/laboratoire.component';
import { FrigoComponent } from './component/frigo/frigo.component';

export const routes: Routes = [
  { path: "Laboratoire", component: LaboratoireComponent },
  { path: "Frigo", component: FrigoComponent },
  { path: "**", redirectTo: "Laboratoire" }
];