import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {FormGroup, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title: string
  dataForm: FormGroup;
  private router;

  constructor(private fb: FormBuilder) {
    this.router = inject(Router)
    this.title = 'Register Component'
    this.dataForm = this.fb.group({
      name: [''],
      surname: [''],
      email: [''],
      password: ['']
    })
  }

  onContinue() {
    this.router.navigate(['/'])
  }
}
