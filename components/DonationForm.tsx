"use client";

import { useState } from "react";
import { supabase, hasSupabaseConfig } from "@/lib/supabase";
import FormStatus from "./FormStatus";

const initialForm = { name: "", email: "", phone: "", amount: "", campaign: "Food", instructions: "", anonymous: false };

export default function DonationForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    setForm({ ...form, [e.target.name]: target.type === "checkbox" ? target.checked : e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    setError(false);

    if (!hasSupabaseConfig()) {
      setError(true);
      setStatus("The contribution inquiry form is ready, but secure submission storage has not been connected yet. Please email almadarfoundationpk@gmail.com.");
      setBusy(false);
      return;
    }

    const { error: submitError } = await supabase.from("donation_inquiries").insert([{
      name: form.name,
      email: form.email,
      phone: form.phone,
      amount: form.amount ? Number(form.amount) : null,
      campaign: form.campaign,
      instructions: form.instructions,
      anonymous: form.anonymous,
    }]);

    setBusy(false);
    if (submitError) {
      setError(true);
      setStatus("We could not submit your inquiry. Please try again or contact us by email.");
    } else {
      setError(false);
      setStatus("Thank you. Your contribution inquiry has been received. No payment has been processed.");
      setForm(initialForm);
    }
  }

  return (
    <form className="form-card donation-form" onSubmit={handleSubmit}>
      <span className="eyebrow">CONTRIBUTION INQUIRY</span>
      <h2>Tell us how you would like to help.</h2>
      <div className="form-grid">
        <label>Donor name *<input required name="name" value={form.name} onChange={change} /></label>
        <label>Email address *<input required type="email" name="email" value={form.email} onChange={change} /></label>
        <label>Phone or WhatsApp<input name="phone" value={form.phone} onChange={change} /></label>
        <label>Amount (PKR)<input min="1" type="number" name="amount" value={form.amount} onChange={change} /></label>
        <label className="full-field">Campaign<select name="campaign" value={form.campaign} onChange={change}><option>Food</option><option>Education</option><option>Health</option><option>Water Initiatives</option><option>General Fund</option></select></label>
        <label className="full-field">Donation questions or instructions<textarea name="instructions" rows={4} value={form.instructions} onChange={change} /></label>
      </div>
      <label className="check-label"><input type="checkbox" name="anonymous" checked={form.anonymous} onChange={change} /> I prefer not to have my name publicly acknowledged.</label>
      <button className="button button-dark" disabled={busy}>{busy ? "Submitting..." : "Submit inquiry ↗"}</button>
      <FormStatus message={status} error={error} />
      <small>This form does not collect or process payments. Official donation instructions are pending verification and will be shared only after approval.</small>
    </form>
  );
}
