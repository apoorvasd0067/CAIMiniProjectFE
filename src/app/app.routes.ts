import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Component } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { WriteComponent } from './components/write/WriteComponent';
import { ModelComponent } from './components/shared/ui/model/model.component';

export const routes: Routes = [
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'forgot-password',
        component:ForgotPasswordComponent
    },
    
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'write',
        component:WriteComponent
    },
    {
        path:'model',
        component:ModelComponent

    },
    {
        path: '', redirectTo: 'login', pathMatch: 'full'
    }

];
