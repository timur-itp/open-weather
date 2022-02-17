import { HttpParams } from '@angular/common/http';

export function httpParams(params: any) {
  let ret = new HttpParams();

  for (const key in params) {
    if (params.hasOwnProperty(key) && params[key] !== null && params[key] !== undefined) {
      ret = ret.set(key, params[key]);
    }
  }

  return ret;
}
