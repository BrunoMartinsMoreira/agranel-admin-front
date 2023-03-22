import * as zod from 'zod'

export const registerFormSchema = zod.object({
 name: zod
      .string({required_error: 'Fala seu nome lindo pra mim meu anjo!'})
      .min(8, {message: 'Fala seu nome lindo pra mim meu anjo!'})
      .max(32),
  email: zod
      .string({required_error: 'Para conseguir se cadastrar você precisa digitar um email válido aí coisa doce!'})
      .email('Para conseguir se cadastrar você precisa digitar um email válido aí coisa doce!'),
  password: zod
      .string({required_error: 'Se não informar a senha fica difícil meu bem!'})
      .min(8, {message: 'Deixa de preguiça, a senha deve ter pelo menos 8 digitos!'})
      .max(32),
  confirmpassword: zod
      .string({required_error: 'Confirma a senha aí pra mim vida!'})
      .min(1, {message: 'Confirma a senha aí pra mim vida!'})
}).refine((data) => data.password === data.confirmpassword, {
  path: ['confirmpassword'],
  message: 'As senhas não conferem',
});

export type ICreateUser = zod.infer<typeof registerFormSchema>
