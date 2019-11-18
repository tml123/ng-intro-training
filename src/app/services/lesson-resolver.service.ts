import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LessonResolver implements Resolve<string> {

  resolve(route: ActivatedRouteSnapshot) {
    return `assets/lessons/${route.paramMap.get('lesson')}`;
  }
}
