import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges {

  @Input() img:string = '';
  @Output() emitir = new EventEmitter<string>();
  imageDefault='https://images.unsplash.com/photo-1651986701526-cd6ee4c34922?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1Mjc1MzM5MQ&ixlib=rb-1.2.1&q=80&w=1080';
  constructor() {
    //before render
    //nada async
    console.log('Constructor','imgValue=>', this.img);
  }
  ngOnChanges(): void {
    console.log('ngOnChanges corriendo')
  }
  ngOnInit(): void {
    console.log('ngOnInit')
  }
  imgError(){
    this.img=this.imageDefault;
  }
  imgLoaded(){
    console.log('Loaded');
    this.emitir.emit(this.img);
  }

}
