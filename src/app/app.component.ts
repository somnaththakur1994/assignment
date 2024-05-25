import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form1!:FormGroup
  active:boolean=false
  active_premium:boolean=false
  title_sub='Subscription'
  title_one='One'
  constructor(private fb:FormBuilder){

  }

 value:number=0;
 amount:number=0;
 sub_amt:number=40
  ngOnInit(){
    this.form1=this.fb.group({
      option1:[false],
      option2:[false],
      option3:[false],
      option4:[false],
      option5:[false],
      option6:[false],
      option7:[false],
      option8:[false],
    })
  }
  showAlert(){
    alert('Lorem ipsum')
  }
  incr(){
    this.value++
    this.add_money()
  }
  dcr(){
   this.value=this.value>0?this.value-1:0
    this.add_money()

  }
  add_money(){
    if(this.value>1){
      this.amount=(this.value-1)*25
    }
    else
       this.amount=0
  }

  subscription_amt(flag){
    if(flag==1){
    this.active=!this.active
    this.active_premium=false
    }
    else{
      this.active_premium=!this.active_premium
      this.active=false
    }
    if(this.active||this.active_premium)
    this.sub_amt=80
    else
    this.sub_amt=0
  }


}
