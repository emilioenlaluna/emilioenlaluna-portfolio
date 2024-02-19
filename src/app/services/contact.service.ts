import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; // Import Firestore modules
import { ToastrService } from 'ngx-toastr'; // Importa ToastrService de ngx-toastr

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsCollection: AngularFirestoreCollection<Contact>; // Firestore collection reference

  constructor(private firestore: AngularFirestore,private toastr: ToastrService) {
    this.contactsCollection = this.firestore.collection<Contact>('contacts'); // Set the Firestore collection to 'contacts'
  }

  AddContact(contact: Contact) {
    if (contact) {
      this.contactsCollection.add({
        nombre: contact.nombre,
        correo: contact.correo,
        asunto: contact.asunto,
        numero: contact.numero,
        descripcion: contact.descripcion,

      }).then(() => {
        this.toastr.success('I will answer as soon as I can!', 'Success', {
          positionClass: 'toast-bottom-full-width' // Configura la clase de posición para mostrar la notificación en la parte inferior de la pantalla a lo ancho
        });

      }).catch((error) => {
        this.toastr.error('¡Something went wrong!', 'Error');

        console.error('Error adding contact:', error);
      });
    }
  }
}