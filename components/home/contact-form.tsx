'use client'

import Link from 'next/link'
import { useState } from 'react'
import { CheckCircle2, AlertCircle, Send } from 'lucide-react'
import { Field, FieldGroup, FieldLabel, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Spinner } from '@/components/ui/spinner'
import { serviceOptions } from '@/lib/site'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const FORM_NAME = 'contacto'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('submitting')

    const formData = new FormData(form)
    const body = new URLSearchParams()
    formData.forEach((value, key) => body.append(key, String(value)))

    try {
      // Demo mode: show success without sending email
      await new Promise(resolve => setTimeout(resolve, 800))
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'h-12 bg-card text-base'
  const isSubmitting = status === 'submitting'

  return (
    <form
      name={FORM_NAME}
      method="POST"
      onSubmit={handleSubmit}
      aria-describedby="form-obrigatorios"
      className="flex flex-col gap-6 rounded-lg border-2 border-foreground bg-card p-6 md:p-8"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />
      <p className="sr-only" aria-hidden="true">
        <label>
          Não preencha este campo
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <p id="form-obrigatorios" className="text-sm text-muted-foreground">
        Os campos assinalados com <span aria-hidden="true">*</span>
        <span className="sr-only">asterisco</span> são obrigatórios.
      </p>

      <FieldGroup className="gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="nome">
              Nome <span aria-hidden="true">*</span>
            </FieldLabel>
            <Input id="nome" name="nome" autoComplete="name" required className={inputClass} />
          </Field>
          <Field>
            <FieldLabel htmlFor="telefone">
              Telefone <span aria-hidden="true">*</span>
            </FieldLabel>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              pattern="^(\+?351)?\s?[29]\d{2}\s?\d{3}\s?\d{3}$"
              aria-describedby="telefone-ajuda"
              className={inputClass}
            />
            <FieldDescription id="telefone-ajuda">Ex.: 912 345 678</FieldDescription>
          </Field>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <Field>
            <FieldLabel htmlFor="email">
              Email <span aria-hidden="true">*</span>
            </FieldLabel>
            <Input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
          </Field>
          <Field>
            <FieldLabel htmlFor="matricula">Matrícula (opcional)</FieldLabel>
            <Input
              id="matricula"
              name="matricula"
              autoComplete="off"
              placeholder="AA-00-AA"
              className={`${inputClass} uppercase`}
            />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="servico">
            Assunto <span aria-hidden="true">*</span>
          </FieldLabel>
          <select
            id="servico"
            name="servico"
            required
            defaultValue=""
            className="h-12 w-full rounded-md border border-input bg-card px-3 text-base focus-visible:border-ring"
          >
            <option value="" disabled>
              Selecione uma opção
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field>
          <FieldLabel htmlFor="mensagem">
            Mensagem <span aria-hidden="true">*</span>
          </FieldLabel>
          <Textarea
            id="mensagem"
            name="mensagem"
            required
            rows={5}
            placeholder="Marca, modelo, ano e uma breve descrição do problema."
            className="bg-card text-base"
          />
        </Field>

        <div className="flex items-start gap-3">
          <input
            id="consentimento"
            name="consentimento"
            type="checkbox"
            value="Aceito"
            required
            className="mt-1 size-5 shrink-0 accent-primary"
          />
          <label htmlFor="consentimento" className="text-sm leading-relaxed">
            Li e aceito a{' '}
            <Link href="/politica-de-privacidade" className="font-semibold text-primary underline underline-offset-4 hover:no-underline">
              Política de Privacidade
            </Link>{' '}
            e autorizo o tratamento dos meus dados para resposta a este pedido.{' '}
            <span aria-hidden="true">*</span>
          </label>
        </div>
      </FieldGroup>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-13 items-center justify-center gap-2 rounded-md bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Spinner className="size-4" />
            A enviar…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden="true" />
            Enviar pedido
          </>
        )}
      </button>

      <div role="status" aria-live="polite">
        {status === 'success' && (
          <p className="flex items-start gap-2 rounded-md bg-secondary p-4 font-medium">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
            Obrigado! Recebemos o seu pedido e entraremos em contacto no próximo dia útil.
          </p>
        )}
        {status === 'error' && (
          <p className="flex items-start gap-2 rounded-md border border-destructive p-4 font-medium text-destructive">
            <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
            Não foi possível enviar o pedido. Tente novamente ou contacte-nos por telefone.
          </p>
        )}
      </div>
    </form>
  )
}
