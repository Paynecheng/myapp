import { Pipe, PipeTransform } from '@angular/core';

// export const host = 'http://47.94.8.47:3000/';
export const host = 'http://localhost:3000/';

@Pipe({
    name: 'AddEllipsis'
})

export class AddEllipsis implements PipeTransform {
    transform(value: string): string {
        value = value + ' . . .';
        return value;
    }
}

// @Pipe({
//     name: 'ToBr'
// })
//
// export class ToBr implements PipeTransform {
//     transform(value: string) {
//         const html = value.replace('\n', '<br>');
//         return html;
//     }
// }
export interface Article {
    title: string;
    description: string;
    category_id: number;
}
