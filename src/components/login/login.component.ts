import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title: string;
  dataForm: FormGroup;
  private router;

  constructor(private fb: FormBuilder) {
    this.router = inject(Router)
    this.title = 'Login Component'
    this.dataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  onContinue(){
    if(this.dataForm.valid) {
      sessionStorage.setItem('dataKey', JSON.stringify(this.dataForm.value));
      this.router.navigate(['/'])
    } else {
      console.log('Please verify all fields');
    }
  }

  onRegister(){
    this.router.navigate(['/register']);
  }
}