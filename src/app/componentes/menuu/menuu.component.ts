import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menuu',
  templateUrl: './menuu.component.html',
  styleUrl: './menuu.component.scss'
})
export class MenuuComponent {
  constructor(
    private router: Router,
    ) {}
  onClick() {
    this.router.navigate(['/home']);

}
}
