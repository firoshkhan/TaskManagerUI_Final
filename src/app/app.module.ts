import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { UpdateComponent } from './ui/update/update.component';
import { ViewComponent } from './ui/view/view.component';
import { FilterPipe } from './pipes/filter.pipe';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SharedService } from './services/shared.service';

const appRoutes: Routes=[
   { path: 'add', component:AddComponent},
   { path: 'view', component:ViewComponent},
   { path: 'update/:id', component:UpdateComponent}
  ] 

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    FilterPipe
    
  ],
  imports: [
    BrowserModule,FormsModule, RouterModule.forRoot(appRoutes),HttpClientModule,HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
