import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdCardComponent } from './components/td-card/td-card.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LayoutComponent } from './components/layout/layout.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule}  from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { StoreModule } from '@ngrx/store';
import { initialTaskState, taskReducer } from './store/task.reducer';


@NgModule({
  declarations: [
    AppComponent,
    TdCardComponent,
    LayoutComponent,
    AddTaskComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatExpansionModule,
    StoreModule.forRoot({tasks: taskReducer})
    
  ],
  exports: [
    TdCardComponent,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    AddTaskComponent,
    ReactiveFormsModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
