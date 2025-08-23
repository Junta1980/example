import { Component, inject, viewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DinamicComponetComponent } from './dinamic-componet.component';
import { CardComponent } from './card.component';
import { ModalService } from './modal/modal.service';
import { DialogComponent } from './modal/dialog.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-execises';
  componentSpot = viewChild.required('spot', { read: ViewContainerRef });
  moldalService= inject(ModalService)

  ngAfterViewInit() {
    this.componentSpot().clear();
    this.componentSpot().createComponent(DinamicComponetComponent);
  }

  openModal() {
    const dialogRef = this.moldalService.openModal(DialogComponent, { name: 'Andrea', email: 'prova@prova.com'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed with result:', result);
    });
  }

}
