import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
     { path: '', redirectTo: '/login', pathMatch: 'full' },
     { path: 'login', component:LoginComponent },

    { 
        path: "web-app", 
    loadChildren: () => import("./web-app/web-app.module").then(m => m.WebAppModule) 
},

];
