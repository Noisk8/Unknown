import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { LabsComponent } from './pages/labs/labs.component'
import { SoundtracksComponent } from './pages/soundtraks/soundtraks.component';

export const routes: Routes = [

    {
        path: '', 
        component: HomeComponent
    },

    {
            path: 'labs', 
            component: LabsComponent
        },
        {
            path: 'soundtracks', 
            component: SoundtracksComponent
        },
    
];
