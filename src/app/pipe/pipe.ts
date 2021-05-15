import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'LockFilter'
})

export class LockFilterPipe implements PipeTransform {
    transform(items: any[], field:string, value: string): any[] {
       
        if(!items) return [];
        if(!value) return items;
    
        return items.filter( str => {
              return str.data[field].toLowerCase().includes(value.toLowerCase());
            });
       }
    }