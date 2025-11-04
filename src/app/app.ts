import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface FormDataModel {
  name: string;
  email: string;
  password: string;
  gender: 'זכר' | 'נקבה' | '';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  formModel: FormDataModel = {
    name: '',
    email: '',
    password: '',
    gender: ''
  };

  submittedData: FormDataModel | null = null;
  passwordVisible = false;

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.submittedData = { ...this.formModel };
    }
  }
}
