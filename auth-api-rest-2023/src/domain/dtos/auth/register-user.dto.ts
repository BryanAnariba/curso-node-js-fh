import { Validators } from "../../../config/validators";

export class RegisterUserDto {
  private constructor (
    public name: string,
    public email: string,
    public password: string,
  ) {}

  static create (object: {[key: string]: any}): [string?, RegisterUserDto?] {

    // Validaciones
    const { name, email, password } = object;
    if ( !name ) return ['Missing Name'];
    if ( !email ) return ['Missing Email'];
    if ( !Validators.email.test(email) ) return ['Email is not Valid'];
    if ( !password ) return [ 'Missing Password'];
    if ( password.length < 6 ) return ['Short Password']

    // Si llego aqui entonces procedemos con lo demas
    return [
      undefined,
      new RegisterUserDto(name.trim(), email.toLowerCase().trim(), password)
    ];

  }
}