import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [ModalComponent],
})
export class ModalModule {
  public static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: ModalModule,
      providers: [ModalService],
    };
  }
}
