"use client";

import { useState } from "react";
import { supabase, hasSupabaseConfig } from "@/lib/supabase";
import FormStatus from "./FormStatus";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  city: "",
  department: "",
  why: "",
  organisation: "",
  skills: "",
  experience: "",
  additional: "",
};

export default function VolunteerForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    setError(false);

    if (!hasSupabaseConfig()) {
      setError(true);
      setStatus("The form is ready, but secure submission storage has not been connected yet. Please email almadarfoundationpk@gmail.com.");
      setBusy(false);
      return;
    }

    const { error: submitError } = await supabase.from("volunteer_applications").insert([{
      name: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      department: form.department,
      message: form.why,
      organisation: form.organisation,
      skills: form.skills,
      experience: form.experience,
      additional: form.additional,
    }]);

    setBusy(false);
    if (submitError) {
      setError(true);
      setStatus("We could not submit your application. Please try again or email us.");
    } else {
      setError(false);
      setStatus("Thank you for your interest in Al-Madar Foundation. Your application has been received. Our team will review it and get in touch if there is a suitable opportunity.");
      setForm(initialForm);
    }
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <span className="eyebrow">VOLUNTEER APPLICATION</span>
      <h2>Tell us a little about yourself.</h2>
      <div className="form-grid">
        <label>Full name *<input required name="name" value={form.name} onChange={change} /></label>
        <label>Email address *<input required type="email" name="email" value={form.email} onChange={change} /></label>
        <label>Phone or WhatsApp *<input required name="phone" value={form.phone} onChange={change} /></label>
        <label>City *<input required name="city" value={form.city} onChange={change} /></label>
        <label className="full-field">Preferred department *<select required name="department" value={form.department} onChange={change}><option value="">Select a department</option><option>Media</option><option>Logistics</option><option>Finance</option><option>Operations</option><option>Outreach</option></select></label>
      </div>
      <label>Why would you like to join Al-Madar? *<textarea required name="why" rows={4} value={form.why} onChange={change} /></label>
      <div className="form-grid optional-fields">
        <label>University or organisation<input name="organisation" value={form.organisation} onChange={change} /></label>
        <label>Skills and experience<input name="skills" value={form.skills} onChange={change} /></label>
        <label className="full-field">Previous volunteering experience<textarea name="experience" rows={3} value={form.experience} onChange={change} /></label>
        <label className="full-field">Additional information<textarea name="additional" rows={3} value={form.additional} onChange={change} /></label>
      </div>
      <label className="check-label"><input type="checkbox" required /> I consent to Al-Madar Foundation using these details to review this application and contact me. *</label>
      <button className="button button-dark" disabled={busy}>{busy ? "Submitting..." : "Submit application ↗"}</button>
      <FormStatus message={status} error={error} />
      <small>Please do not include sensitive personal or financial information.</small>
    </form>
  );
}
