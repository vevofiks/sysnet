"use client";

import { useActionState } from "react";
import { submitQuote } from "@/app/actions";
import { useCopy, useLocale } from "@/components/locale";
import { content } from "@/lib/content";
import { idleQuote } from "@/lib/quote";

const fields = [
  { name: "name", type: "text", autoComplete: "name" },
  { name: "email", type: "email", autoComplete: "email" },
  { name: "phone", type: "tel", autoComplete: "tel" },
] as const;

export function QuoteForm() {
  const t = useCopy();
  const lines = content(useLocale()).services;
  const [state, action, pending] = useActionState(submitQuote, idleQuote);

  if (state.status === "ok") {
    return (
      <div role="status" className="rounded-[18px] border border-line bg-ice p-6">
        <p className="max-w-[48ch] text-base leading-relaxed text-ink">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="relative grid gap-4" noValidate>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_url">{t.form.honeypot}</label>
        <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message ? (
        <p role="alert" className="text-sm text-danger">
          {state.message}
        </p>
      ) : null}

      {fields.map((field) => {
        const error = state.errors[field.name];
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium">
              {t.form[field.name]}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${field.name}-error` : undefined}
              className="h-12 w-full rounded-[5px] border border-line bg-card px-3 text-ink"
            />
            {error ? (
              <p id={`${field.name}-error`} className="mt-1.5 text-sm text-danger">
                {error}
              </p>
            ) : null}
          </div>
        );
      })}

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium">
          {t.form.service}
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          aria-invalid={state.errors.service ? true : undefined}
          aria-describedby={state.errors.service ? "service-error" : undefined}
          className="h-12 w-full rounded-[5px] border border-line bg-card px-3 text-ink"
        >
          <option value="" disabled>
            {t.form.select}
          </option>
          {lines.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.title}
            </option>
          ))}
        </select>
        {state.errors.service ? (
          <p id="service-error" className="mt-1.5 text-sm text-danger">
            {state.errors.service}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
          {t.form.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          aria-invalid={state.errors.message ? true : undefined}
          aria-describedby={state.errors.message ? "message-error" : undefined}
          className="min-h-32 w-full rounded-[5px] border border-line bg-card px-3 py-3 text-ink"
          placeholder={t.form.placeholder}
        />
        {state.errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-danger">
            {state.errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center rounded-[5px] bg-navy px-5 text-sm font-medium uppercase tracking-normal text-white hover:bg-navy-deep disabled:opacity-60"
      >
        {pending ? t.form.sending : t.form.submit}
      </button>
    </form>
  );
}
