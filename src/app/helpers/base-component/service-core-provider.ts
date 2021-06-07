import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class ComponentsCore {
  protected toast: MatSnackBar;

  constructor(public snackBar: MatSnackBar) {
    this.toast = this.snackBar;
  }
}
