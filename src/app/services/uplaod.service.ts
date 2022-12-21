import { Injectable } from '@angular/core';

export class UplaodService {

  private loader: any;

  constructor(loader: any) {
      this.loader = loader;            
   }


   upload() {
    return this.loader.file
          .then( (file:any) => new Promise( ( resolve, reject ) => {
                var myReader= new FileReader();
                myReader.onloadend = (e) => {
                   resolve({ default: myReader.result });
                }

                myReader.readAsDataURL(file);
          } ) );
 };
}
