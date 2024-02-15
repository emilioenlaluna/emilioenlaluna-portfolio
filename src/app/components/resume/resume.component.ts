import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {

  src = 'https://emilioenlaluna.github.io/emilioenlaluna/emilioenlaluna.pdf';
  srcEnglish = 'https://emilioenlaluna.github.io/emilioenlaluna/emilioenlalunaEnglish.pdf';
  // pdfSrc: string | PDFSource | ArrayBuffer = './assets/pdf-test.pdf';
  downloadPdf() {
    const pdfUrl = 'https://emilioenlaluna.github.io/emilioenlaluna/emilioenlalunaEnglish.pdf'; // Reemplaza con la URL del archivo PDF en GitHub o en otro servidor accesible
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'nombre_del_archivo.pdf'; // Cambia el nombre del archivo descargado si lo deseas
    link.target = '_blank'; // Abre en una nueva pestaña, opcional
    link.click();
  }

  
  downloadPdfSpanish() {
    const pdfUrl = 'https://emilioenlaluna.github.io/emilioenlaluna/emilioenlaluna.pdf'; // Reemplaza con la URL del archivo PDF en GitHub o en otro servidor accesible
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'nombre_del_archivo.pdf'; // Cambia el nombre del archivo descargado si lo deseas
    link.target = '_blank'; // Abre en una nueva pestaña, opcional
    link.click();
  }
}


