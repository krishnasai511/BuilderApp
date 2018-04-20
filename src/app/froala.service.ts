import { Injectable } from "@angular/core";

@Injectable()
export class FroalaOptions {
    public options: Object = {
           placeholderText: 'Edit Your Content Here!',
           toolbarInline: true,
           charCounterCount: false,
           toolbarButtons: ['bold', 'italic', 'underline', 'color', 'html', 'clearFormatting','paragraphFormat'],
       };
   
   }
   