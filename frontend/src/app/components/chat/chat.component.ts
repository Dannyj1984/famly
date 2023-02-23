import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { IMessage } from 'src/app/interfaces/message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageForm: FormGroup = new FormGroup({});
  public models: IMessage[] = [
    {
      name: 'Mum',
      date: moment().format('Do-MMM HH:mm'),
      message: `Hi it's mum how are you?`
    },
    {
      name: 'Emily',
      date: moment().add(2, 'minute').format('Do-MMM HH:mm'),
      message: `Good thanks`
    }
  ];


  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void {
    this.messageForm = this.formBuilder.group({
      message:['', Validators.required]
    })
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const data: IMessage = {
      name: 'Mum',
      date: moment().format('Do-MMM HH:mm'),
      message: this.messageForm.value.message
    }
    this.models.push(data)
    this.messageForm.reset();
    }
  }
}
