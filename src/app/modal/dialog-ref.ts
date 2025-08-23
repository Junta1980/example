import { OverlayRef } from "@angular/cdk/overlay";
import { Observable, Subject } from "rxjs";

export class DialogRef<T = any> {
  private afterClosedSubject = new Subject<T>();

  constructor(private overlayRef: OverlayRef) {}

  close(result?: T) {
    this.overlayRef.dispose();
    this.afterClosedSubject.next(result!);
    this.afterClosedSubject.complete();
  }

  afterClosed(): Observable<T> {
    return this.afterClosedSubject.asObservable();
  }
}