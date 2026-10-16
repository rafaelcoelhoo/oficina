import * as React from 'react'
import { cn } from '@/lib/utils'

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('flex w-full flex-col gap-7', className)} {...props} />
}

function Field({ className, ...props }: React.ComponentProps<'div'>) {
  return <div role="group" className={cn('flex w-full flex-col gap-2', className)} {...props} />
}

function FieldLabel({ className, ...props }: React.ComponentProps<'label'>) {
  return <label className={cn('flex w-fit items-center gap-2 text-sm font-semibold leading-snug', className)} {...props} />
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return <p className={cn('text-sm font-normal leading-normal text-muted-foreground', className)} {...props} />
}

export { Field, FieldGroup, FieldLabel, FieldDescription }
