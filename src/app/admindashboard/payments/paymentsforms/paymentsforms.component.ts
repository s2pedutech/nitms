import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { AuthService } from '../../../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-paymentsforms',
  templateUrl: './paymentsforms.component.html',
  styleUrls: ['./paymentsforms.component.css']
})
export class PaymentsformsComponent implements OnInit {
	@Output() dat = new EventEmitter<boolean>();
  student = [];
  studentpay = [];
  payment = [];
  curuid;
  name: any;
  amount: any;
  paymode: any;
  paydate: any;
  payremark: any;
  paymentForm;
  part: any;
  constructor(public authService: AuthService, public fb: FormBuilder) {
    firebase.database().ref('student/').on('value',stud => {
      this.student=snapshotToArray(stud);
      this.student.filter(x => {
        if(x.isEnroll === "true")
          this.studentpay.push(x);
      });
    });
    this.paymentForm = this.fb.group({
      name: '',
      amount: '',
      paymode: '',
      paydate: '',
      payremark: '',
    })
  }
  ngOnInit() { }
  changename(curuid) {
    console.log(curuid);
    this.curuid=curuid;
    this.studentpay.filter(x => {
      if(x.uid === this.curuid){
        this.part = x.list.part;
        if(x.payment != undefined){
          this.payment = x.payment;
        }
      }  
    });
  }
  addPayment() {
    var u: any = {};
    var installment : any = {};
    installment.amount = this.amount;
    installment.paymode = this.paymode;
    installment.paydate = this.paydate;
    this.payment.push(installment);
   // if(this.payremark != null) u.payremark = this.payremark;
   console.log(this.payment);
    var ref1 = "student/";
    ref1 += this.curuid;
    console.log(ref1);
    firebase.database().ref(ref1).child('payment').update(this.payment);
    alert("Payment Successful !!!");
    this.dat.emit(false);
  }
  Cancel(option:boolean) {
		this.dat.emit(option);
  }
}
export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot =>{
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};