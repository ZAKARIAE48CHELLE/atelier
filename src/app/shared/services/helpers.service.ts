import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  newObject(data: Record<string, any>) {
    return JSON.parse(JSON.stringify(data));
  }

  convert(
    data: Record<string, any>,
    media?: { file: any; title: string }[]
  ): FormData {
    let localData = this.newObject(data);
    let formData = new FormData();

    for (let key of Object.keys(localData)) {
      if (localData.hasOwnProperty(key) && localData[key] !== undefined) {
        formData.set(key, JSON.stringify(localData[key]));
      }
    }

    if (media && media.length) {
      for (const item of media) {
        if (item.file instanceof Array) {
          if (item.file.length) {
            formData.delete(item.title);

            for (const file of item.file) {
              if (file) {
                formData.append(item.title, file);
              }
            }
          }
        } else if (item.file) {
          formData.set(item.title, item.file);
        }

        item.file = null;
      }
    }

    return formData;
  }

  flatDeep(arr: any, attribute: string) {
    return arr.reduce(
      (acc: any, val: any) =>
        acc.concat(
          val[attribute] && val[attribute].length
            ? [val].concat(this.flatDeep(val[attribute], attribute))
            : val
        ),
      []
    );
  }
}
