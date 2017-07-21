import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './orders/home/home.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { EditOrderComponent } from './orders/edit-order/edit-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    CreateOrderComponent,
    EditOrderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'orders', pathMatch: 'full' },
        { path: 'orders', component: HomeComponent },
        { path: 'orders/create', component: CreateOrderComponent },
        { path: 'orders/edit/:id', component: EditOrderComponent },
        { path: '**', redirectTo: 'orders' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
