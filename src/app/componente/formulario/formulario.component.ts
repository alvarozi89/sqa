import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder,FormGroup } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public token:any
  public data:any
  public filtro:any;
  public filtroText:any;

  public base_url = environment.API;

    constructor
   (
    private apiService:ApiService,
    private router:Router,
    private formBuilder:FormBuilder)
    {

    }

  ngOnInit(): void {
  }

  search(searchForm:any){

    if(this.filtroText=="" || this.filtroText==null){
      Swal.fire(
        'Por favor escriba un código!',
        'You clicked the button!',
        'error'
      )
      this.data=""

    }
     else {
      this.apiService.getCity(searchForm.value.filtro)
      .subscribe(res=>{
        if(!res){
          Swal.fire(
            'El código no existe!',
            'You clicked the button!',
            'error'
          )

        }
        else {
          this.data=res
          console.log(this.data)
        }
     })

    }

  }

}
