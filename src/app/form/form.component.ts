import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {ConfigService} from "./config.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls : ["./form.component.css"]
})
export class FormComponent implements OnInit {
  ngOnInit(): void {}
  constructor(private ConfigService : ConfigService) {}

  register = {
    name : "" ,
    email : "" ,
    pass : "" ,
  }
  logIn = {
    email : "" ,
    pass : "" ,
  }

  isEmail(email: string):boolean {
    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
    return pattern.test(email)
  }
  registerClick(){
    if (this.register.email == "" || this.register.pass == "" || this.register.name == ""){
      Swal.fire('اوووووو', 'ممکنه یکی از فیلد ها خالی باشه', 'error')
    }else if (!this.isEmail(this.register.email)) {
      Swal.fire('اوووووو', 'ایمیل', 'error')
    }else if (this.register.pass.length < 7){
      Swal.fire('اوووووو', 'پس باید بیشتر از 8 کاراکتر باشد', 'error')
    } else {
      let data = {
        name : this.register.name,
        email : this.logIn.email,
        password : this.logIn.pass,
        phone : ""
      }
      this.ConfigService.getConfig(data).subscribe(
        (date) =>{Swal.fire('ممنونم', 'ثبت نام شما با موفقیت انجام شد', 'success');console.log(date)},
        () =>{Swal.fire('اوووووو', 'احتمالا یه مشکلی تو سرور به وجود اومده', 'error')},
        () =>{console.log("OK")},
      )

    }
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
    }
  }

}
