import { Component } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public contactForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    asunto: ['', [Validators.required]],
    correo: ['',[Validators.required,Validators.email],],
    numero: ['', [Validators.required,]],
    descripcion: ['', [Validators.required,Validators.minLength(10)]],
  });
  constructor(
    public crudApi: ContactService,
    public fb: FormBuilder
  ) {

  }



  get nombre() {
    return this.contactForm.get('nombre');
  }
  get correo() {
    return this.contactForm.get('correo');
  }
  get asunto() {
    return this.contactForm.get('asunto');
  }
  get numero() {
    return this.contactForm.get('numero');
  }
  get descripcion() {
    return this.contactForm.get('descripcion');
  }
  ResetForm() {
    this.contactForm.reset();
  }
  submitContactData() {
    this.crudApi.AddContact(this.contactForm.value);
    this.ResetForm();
  }
}

