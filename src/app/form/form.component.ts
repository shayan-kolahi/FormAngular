import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import axios from "axios";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls : ["./form.component.css"]
})
export class FormComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  logIn = {
    email : "" ,
    pass : "" ,
  }
  signUp = {
    name : "" ,
    email : "" ,
    pass : "" ,
  }
  isEmail(email: string):boolean {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return pattern.test(email)
  }
  logInClick(){
    if (this.logIn.email == "" || this.logIn.pass == ""){
      Swal.fire('اوووووو', 'ممکنه یکی از فیلد ها خالی باشه', 'error')
    }else if (!this.isEmail(this.logIn.email)) {
      Swal.fire('اوووووو', 'ایمیل', 'error')
    }else if (this.logIn.pass.length < 7){
      Swal.fire('اوووووو', 'پس باید بیشتر از 8 کاراکتر باشد', 'error')
    } else {
      Swal.fire('ممنونم', 'ثبت نام شما با موفقیت انجام شد', 'success')

      axios.post('https://apokar.gmodern.ir/api/register', {
        name: "",
        email: this.logIn.email,
        password: this.logIn.pass,
        phone: ""
      })

    }
  }
  signUpClick(){
    if (this.signUp.email == "" || this.signUp.pass == "" || this.signUp.name == ""){
      Swal.fire('اوووووو', 'ممکنه یکی از فیلد ها خالی باشه', 'error')
    }else if (!this.isEmail(this.signUp.email)) {
      Swal.fire('اوووووو', 'ایمیل', 'error')
    }else if (this.signUp.pass.length < 7){
      Swal.fire('اوووووو', 'پس باید بیشتر از 8 کاراکتر باشد', 'error')
    } else {
      Swal.fire('ممنونم', 'ثبت نام شما با موفقیت انجام شد', 'success')
    }
  }

}
