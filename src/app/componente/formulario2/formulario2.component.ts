import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrls: ['./formulario2.component.css']
})
export class Formulario2Component implements OnInit {

  public palabra:any
  public palabraLength:any
  public result:any
  public i:any

  constructor() { }

  ngOnInit(): void {

  }

  cadena(){

    this.palabra = 'MVM INGENIERIA DE SOFTWARE';
    this.palabraLength = this.palabra.length;

    for (let i = 0; i < this.palabraLength; i++) {
        this.result += this.palabra.charAt(Math.floor(Math.random() * this.palabraLength));
    }


  }



}
