import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-number',
  templateUrl: './new-number.page.html',
  styleUrls: ['./new-number.page.scss'],
})
export class NewNumberPage implements OnInit {
  public crmLogo='assets/icon/Logo_only.png';
  public companyUrl = 'assets/icon/beehivelogo.png';
ngOnInit() {
  
}
constructor(private fb: FormBuilder,private route : Router) {}
 loginForm = this.fb.group({
  country_code: ['',[Validators.required, Validators.pattern(/^\+\d{1,4}$/)]],
    mobileNumber: ['',
      [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/), // Only 10 digits allowed
      ],
    ],
  });

  // Getter for easy access in HTML
  get mobileNumber() {
    return this.loginForm.get('mobileNumber');
  }

  get country_code() {
    return this.loginForm.get('country_code');
  }

  onlyDigits(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '').slice(0, 10);
}

onlyCountryCodeDigits(event: any) {
  let value = event.detail.value || '';
  value = value.replace(/\D/g, '');
  value = value.substring(0,4);
  const finalValue = value ? `+${value}` : '';
  this.loginForm.get('country_code')?.setValue(finalValue,{emitEvent:false});
}

  // Clear the input
  clearNumber() {
    this.mobileNumber?.setValue('');
  }

  // Handle Send OTP
  sendOtp() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
  }
signUp(){
  this.route.navigate(['/']);
}
}
