import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { LoginComponent } from './login/login.component';
 const appRoutes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'login', component: LoginComponent },
 
    // otherwise redirect to home
    { path: '**', redirectTo: 'LoginComponent' }
];

export const routing = RouterModule.forRoot(appRoutes);