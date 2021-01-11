import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// APP MODULE
import { MainRoutingModule } from './main-routing.module';

// COMPONENTS
import { UsersComponent } from '@app/users/users.component';

// PRIME MODULES
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MainRoutingModule,
    ButtonModule,
    CardModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DividerModule,
    InputMaskModule
  ],
  providers: []
})

export class MainModule {}
