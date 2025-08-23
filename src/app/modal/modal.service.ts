import { inject, Injectable, InjectionToken, Injector } from '@angular/core';
import { ComponentType, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Observable, Subject } from 'rxjs';
import { DialogRef } from './dialog-ref';

export const DIALOG_DATA = new InjectionToken<any>('DIALOG_DATA');

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private overlayRef?: OverlayRef;
  private overlay = inject(Overlay);
  private injector = inject(Injector);

  constructor() { }

  openModal(component: ComponentType<unknown> , data?: any) {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      panelClass: 'tm-modal-panel',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
    });

    const dialogRef = new DialogRef(this.overlayRef);

    const customInjector = Injector.create({
       providers: [
        { provide: DIALOG_DATA, useValue: data },
        { provide: DialogRef, useValue: dialogRef }
      ],
      parent: this.injector
    });

    const portal = new ComponentPortal(component, null, customInjector);
    this.overlayRef.attach(portal);
    
    return dialogRef;
  }
 
}




