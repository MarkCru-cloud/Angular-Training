import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  @Input() candidate:any;
  @Input() i:any;
  @Output() changeBackground = new EventEmitter;
primary: any;

  constructor(){ } 
  

  ngOnInit(): void{

  }

}