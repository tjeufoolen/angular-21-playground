import { Route as AngularRoute } from '@angular/router'; 

export interface Route extends AngularRoute {
    data?: { 
        title: string 
    };
}