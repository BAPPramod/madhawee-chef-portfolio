"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

type SubmissionState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ endpoint }: { endpoint?: string }) {
  const [status, setStatus] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return;

    const form = event.currentTarget;
    setStatus("submitting");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-3 w-full border-b border-white/20 bg-transparent py-3 text-lg text-ivory outline-none transition-colors placeholder:text-mist/55 focus:border-brass";

  return (
    <form
      action={endpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="grid gap-x-8 gap-y-8 sm:grid-cols-2"
    >
      <input
        type="hidden"
        name="_subject"
        value="New message from Madhawee's chef portfolio"
      />
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <label className="eyebrow text-mist">
        Name
        <input
          className={inputClass}
          type="text"
          name="name"
          autoComplete="name"
          placeholder="Your name"
          required
          maxLength={100}
        />
      </label>

      <label className="eyebrow text-mist">
        Email
        <input
          className={inputClass}
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          maxLength={200}
        />
      </label>

      <label className="eyebrow text-mist sm:col-span-2">
        Subject
        <input
          className={inputClass}
          type="text"
          name="subject"
          placeholder="Position or enquiry"
          required
          maxLength={160}
        />
      </label>

      <label className="eyebrow text-mist sm:col-span-2">
        Message
        <textarea
          className={`${inputClass} min-h-36 resize-y`}
          name="message"
          placeholder="Write your message here…"
          required
          maxLength={3000}
        />
      </label>

      <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!endpoint || status === "submitting"}
          className="eyebrow inline-flex min-h-12 items-center gap-3 bg-brass px-7 text-charcoal transition-colors hover:bg-ivory disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send aria-hidden className="size-4" />
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>

        <p className="text-sm text-mist" aria-live="polite">
          {!endpoint
            ? "Message delivery is being configured. Please use email for now."
            : status === "success"
              ? "Thank you. Your message has been sent."
              : status === "error"
                ? "The message could not be sent. Please email Madhawee directly."
                : "Your message will be delivered securely by Formspree."}
        </p>
      </div>
    </form>
  );
}
