import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegistroService } from 'src/servicios/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {
  formRegistro = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$\%\^&\*\.]).{8,}$/)]],
    first_name: ['', [Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
    last_name: ['',[Validators.required, Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$')]],
    telefono: null,
    dni: null,
    direccion: null,
    avatar: null,
    pass2: ['', Validators.required]
  })

  enviado = false;
  valorPass: string | undefined | null;
  confirmacionInvalida = false;
  invalido = false;

  constructor(private fb: FormBuilder, private rs: RegistroService, private router: Router) {}

  esInvalido(nombre: string) {
  return this.formRegistro.get(nombre)?.invalid &&
    ( this.formRegistro.get(nombre)?.touched || this.enviado)
  }

  mostrarError(nombre:string, error:string){
  return this.formRegistro.get(nombre)?.hasError(error) &&
    ( this.formRegistro.get(nombre)?.touched || this.enviado)
  }

  obtenerPassword() {
    this.valorPass = this.formRegistro.get('password')?.value 
  }

  compararPass(){
    const confirmacion = this.formRegistro.get('pass2')?.value
    this.confirmacionInvalida = this.valorPass !== confirmacion 
  }

  onSubmit() {
    this.enviado = true

    if(this.formRegistro.invalid) {
      this.invalido = true
      return
    }
    else {
      const formFinal = this.formRegistro.value
      delete formFinal.pass2
      this.rs.registerUser(formFinal).subscribe({
      next: (res) => {
        this.invalido = false
        setTimeout(() => this.router.navigate(['/inicio-sesion']), 1000 )
      },
      error: (err) => {
        this.invalido = true
        console.log(err)
      }
      })
    }
  }
}