import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './orders/home/home.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';


import { CompanyComponent } from './setup/company_components/company/company.component';
import { DepartmentComponent } from './setup/department_component/department/department.component';
import { SubdepartmentComponent } from './setup/subdepartment_components/subdepartment/subdepartment.component';
import { MainmenuComponent } from './setup/mainmenu_component/mainmenu/mainmenu.component';
import { ColorgroupComponent } from './setup/colorgroup_component/colorgroup/colorgroup.component';
import { FabricsComponent } from './setup/fabrics_component/fabrics/fabrics.component';
import { ShipperComponent } from './setup/shipper_component/shipper/shipper.component';
import { SizeComponent } from './setup/size_component/size/size.component';
import { SizetypeComponent } from './setup/size_component/sizetype/sizetype.component';

import { EditOrderComponent } from './orders/edit-order/edit-order.component';
import { VendorComponent } from './vendor/vendor.component';
import { ItemsComponent } from './items/items.component';
import { ClientsComponent } from './clients/clients.component';
import { InventoryComponent } from './inventory/inventory.component';
import { SpecialsComponent } from './webportal/specials/specials.component';
import { ClearanceComponent } from './webportal/clearance/clearance.component';
import { NewarrivalsComponent } from './webportal/newarrivals/newarrivals.component';
import { PnlComponent } from './reports/pnl/pnl.component';
import { BalancesheetComponent } from './reports/balancesheet/balancesheet.component';
import { DropsComponent } from './reports/drops/drops.component';
import { DepositComponent } from './reports/deposit/deposit.component';
import { CustomComponent } from './reports/custom/custom.component';
import { ReportinventoryComponent } from './reports/reportinventory/reportinventory.component';
import { EditvendorComponent } from './vendor/editvendor/editvendor.component';
import { EdititemComponent } from './items/edititem/edititem.component';
import { CreateitemComponent } from './items/createitem/createitem.component';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwitchComponentComponent } from './switch-component/switch-component.component';
@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    CreateOrderComponent,
    EditOrderComponent,
    VendorComponent,
    ItemsComponent,
    ClientsComponent,
    InventoryComponent,
    SpecialsComponent,
    ClearanceComponent,
    NewarrivalsComponent,
    PnlComponent,
    BalancesheetComponent,
    DropsComponent,
    DepositComponent,
    CustomComponent,
    ReportinventoryComponent,
    EditvendorComponent,
    EdititemComponent,
    CreateitemComponent,
    SwitchComponent,
    SwitchComponentComponent,
    CompanyComponent,
    DepartmentComponent,
    SubdepartmentComponent,
    MainmenuComponent,
    ColorgroupComponent,
    FabricsComponent,
    ShipperComponent,
    SizeComponent,
    SizetypeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
        { path: '', redirectTo: 'orders', pathMatch: 'full' },
        { path: 'orders', component: HomeComponent },
        { path: 'orders/create', component: CreateOrderComponent },
        { path: 'orders/edit/:id', component: EditOrderComponent },
        {path: 'vendor', component: VendorComponent},
         {path: 'items', component: ItemsComponent},
          {path: 'clients', component: ClientsComponent},
           {path: 'inventory', component: InventoryComponent},
            {path: 'webportal/specials', component: SpecialsComponent},
            {path: 'webportal/clearance', component: ClearanceComponent},
             {path: 'webportal/newarrivals', component: NewarrivalsComponent},
  {path: 'reports/inventory', component: ReportinventoryComponent},
                    {path: 'reports/pnl', component: PnlComponent},
          {path: 'reports/balancesheet', component: BalancesheetComponent},
           {path: 'reports/drops', component: DropsComponent},
            {path: 'reports/deposit', component: DepositComponent},
             {path: 'reports/custom', component: CustomComponent},
             {path: 'vendor/editvendor', component: EditvendorComponent},
                   {path: 'items/edititem', component: EdititemComponent},
             {path: 'items/createitem', component: CreateitemComponent},
              { path: 'setup/company', component: CompanyComponent },
        { path: 'setup/department', component: DepartmentComponent},
        { path: 'setup/subdepartment', component: SubdepartmentComponent},
        { path: 'setup/mainmenu', component: MainmenuComponent},
        {path: 'setup/colorgroup', component: ColorgroupComponent},
        {path: 'setup/fabrics', component: FabricsComponent},
        {path: 'setup/shipper', component: ShipperComponent},
        {path: 'setup/size', component: SizeComponent},
        {path: 'setup/sizetype', component: SizetypeComponent},
        { path: '**', redirectTo: 'orders' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
