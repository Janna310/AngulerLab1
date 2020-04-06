import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo',
})
// export class Filter implements PipeTransform {
  // transform(value: string, parameter: string): any[] {
  //   //  if search field is empty, return full array
  //   if (parameter === '') {
  //     return value;
  //   }
  //   // create temp array to return
  //   const tempArray: any[] = [];
  //   console.log(parameter);
  //   // loop through the array
  //   for (let i = 0; i < value.length; i++) {
  //     // create variable for firstnames & last name
  //     let task: string = value[i].tasks.toLowerCase();
  //     // if last names include what is typed
  //     if (task.includes(parameter)) {
  //       // push into array
  //       tempArray.push(value[i]);
  //       // if first names contains parameter
  //     }
  //   }
  //   return tempArray;
  // }
// }
