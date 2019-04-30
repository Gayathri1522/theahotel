import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccomodationComponent } from './accomodation/accomodation.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';

const routes: Routes = [
    {
        path: 'accomodation',
        component: AccomodationComponent
    },
    {
        path: 'celebrations',
        component: CelebrationsComponent
    },
    {
        path: 'food-and-beverage',
        component: FoodAndBeverageComponent
    },
    {
        path: 'lifestyle',
        component: LifestyleComponent
    },
    {
        path: 'weddings',
        component: WeddingsComponent
    },
    {
        path: 'offers',
        component: OffersComponent
    },
    {
        path: 'signin',
        component: SigninComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
