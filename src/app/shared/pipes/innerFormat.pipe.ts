import { Pipe, PipeTransform } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'innerFormat',
  standalone : true,
  pure: false
})
export class CommentPipe implements PipeTransform {

    constructor(protected _sanitizer: DomSanitizer) {}
    transform(items: string): SafeHtml{
        return this._sanitizer.bypassSecurityTrustHtml(items);
    }
}