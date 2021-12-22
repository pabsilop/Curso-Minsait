import { Routes, RouterModule } from '@angular/router';
import { TarjetaCreditoComponent } from './tarjeta-credito.component';


const TC_ROUTES: Routes = [
    { path: '', component: TarjetaCreditoComponent }
]

export const TCRouting = RouterModule.forChild(TC_ROUTES)