import { Component, inject, OnInit, viewChild, ViewContainerRef } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DinamicComponetComponent } from './dinamic-componet.component';
import { CardComponent } from './card.component';
import { ModalService } from './modal/modal.service';
import { DialogComponent } from './modal/dialog.component';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CardComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    const group: {[key: string]: FormControl | FormArray} = {};


    this.formConfig.forEach((field: any) => {
      const name = Object.keys(field)[0];
      if(Array.isArray((field as any)[name])){       
        group[name] =  new FormArray<any>([]);

        (field as any)[name].forEach((subField: any) => {
          let groupSub: {[key: string]: FormControl | FormArray} = {};
          groupSub[subField.name] =  new FormControl(subField.value); 
          console.log('groupSub' ,groupSub);
          (group[name] as FormArray).push( new FormGroup(groupSub) );
        })
      }
      if(field.name)
        group[field.name] =  new FormControl(field.value); 
    })
     console.log('group' ,group);
    this.form = new FormGroup(group); 
    console.log('form' , this.form);
  }

  formConfig : any = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      value: 'Andrea',
      validators: ['required'],
    },
    {
      name: 'email',
      type: 'email',
      value: 'mail',
      validators: ['required', 'email'],
    },
    {
      name: 'age',
      label: 'Età',
      type: 'number',
      value: 18,
      validators: [],
    },
    { address: [
        { name: 'address1', type: 'text', value: 'Via Roma 1' },
        { name: 'address2', type: 'text', value: 'Via Roma 2' },
        { name: 'address3', type: 'text', value: 'Via Roma 3' },
      ],
      type: 'array'
    }
  ];
  form!: FormGroup;

  title = 'store-execises';
  componentSpot = viewChild.required('spot', { read: ViewContainerRef });
  moldalService = inject(ModalService);

  ngAfterViewInit() {
    this.componentSpot().clear();
    this.componentSpot().createComponent(DinamicComponetComponent);
  }

  openModal() {
    const dialogRef = this.moldalService.openModal(DialogComponent, {
      name: 'Andrea',
      email: 'prova@prova.com',
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed with result:', result);
    });
  }

  submit() {
    console.log(this.form.value);
  }
}
