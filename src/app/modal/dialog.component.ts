import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { DIALOG_DATA } from './modal.service';
import { DialogRef } from './dialog-ref';
@Component({
  selector: 'app-dialog',
  imports: [ReactiveFormsModule],
  template: `
    <div class="dialog">
      <h2>Ciao {{ data?.name }}</h2>
      <p>Email: {{ data?.email }}</p>
      <form [formGroup]="form">
        <input type="checkbox" formControlName="changes" />
        <label> change </label>
        @if(form.controls['changes'].value) {
          <label>
          Nome:
          <input formControlName="name" />
        </label>
        <br />
        <label>
          Email:
          <input formControlName="email" />
        </label>
        }      
      </form>
      <button (click)="sayHello()">Ok</button>
    </div>
  `,
  styles: `
   :host {
    position: absolute;
    top: 10%;
    left: 20vw;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
   }
  `,
})
export class DialogComponent implements OnInit {
  form: FormGroup = new FormGroup({
    changes: new FormControl(false),
    name: new FormControl(''),
    email: new FormControl(''),
  });
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef<any>
  ) {}
  ngOnInit(): void {
    this.form.controls['changes'].valueChanges.subscribe((value) => {
      console.log('Changes:', value);
    });
  }

  sayHello() {
    console.log('👋 Ricevuto in modale:', this.data);
    this.dialogRef.close(this.form.getRawValue());
  }
}
