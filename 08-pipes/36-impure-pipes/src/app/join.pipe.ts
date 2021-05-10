import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'join',
    pure: false,
})
export class JoinPipe implements PipeTransform {

    transform(array: any, start?: any, end?: any) {
        let result = array;
        
        if (start !== undefined) {
            if (end !== undefined) {
                result = array.slice(start, end);
            } else {
                result = array.slice(start);
            }
        }

        return result.join(", ");
    }
}