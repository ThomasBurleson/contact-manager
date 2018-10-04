import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

const metaReducers = !environment.production ? [storeFreeze] : [];
const StoreDevTools = !environment.production ? StoreDevtoolsModule.instrument() : [];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreDevTools
  ]
})
export class ContactsNgRxModule {}
