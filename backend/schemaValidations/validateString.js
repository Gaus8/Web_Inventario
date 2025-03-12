import { z } from 'zod';

const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.!@#$%^&*])[\S]{8,16}$/;
const regexNombre = /^[a-zA-Z\s]+$/;
const userSchema = z.object({
  name: z.string()
    .min(6)
    .regex(regexNombre, { message: 'error3' }),

  email: z.string().email({
    message: 'El correo debe ser un correo valido'
  }),
  password: z.string().regex(regexPassword, { message: 'error3' })

});

export function validateRegisterUser (input) {
  return userSchema.safeParse(input);
};

export function validateLoginUser (input) {
  return userSchema.partial().safeParse(input);
}
