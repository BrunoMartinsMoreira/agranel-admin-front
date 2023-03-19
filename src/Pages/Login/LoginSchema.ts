import * as zod from 'zod'

export const loginFormSchema = zod.object({
  email: zod
    .string({required_error: 'Para conseguir acessar você precisa digitar um email válido aí coisa doce!'})
    .email('Para conseguir acessar você precisa digitar um email válido aí coisa doce!'),
  password: zod
      .string({required_error: 'Se não informar a senha fica difícil meu bem!'})
      .min(8, {message: 'Se não informar a senha fica difícil meu bem!'})
})

export type LoginFormData = zod.infer<typeof loginFormSchema>
