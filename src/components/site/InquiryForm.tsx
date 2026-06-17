import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Tell us your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  mobile: z.string().trim().min(5, "Enter your mobile").max(20),
  category: z.string().max(50).optional(),
  requirement: z.string().trim().min(5, "A few words about what you're imagining").max(2000),
});

const CATEGORIES = ["Birthday", "Corporate", "Personalized", "Surprise Box", "Wedding", "Other"];

export function InquiryForm({ defaultCategory }: { defaultCategory?: string }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    category: defaultCategory ?? "",
    requirement: "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("inquiries").insert(parsed.data);
    setLoading(false);
    if (error) {
      toast.error("Couldn't send. Please try WhatsApp.");
      return;
    }
    toast.success("Inquiry sent! We'll be in touch soon.");
    setForm({ name: "", email: "", mobile: "", category: defaultCategory ?? "", requirement: "" });
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 md:grid-cols-2">
      <Field label="Your name">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input"
          placeholder="Aanya Sharma"
          maxLength={100}
        />
      </Field>
      <Field label="Mobile">
        <input
          required
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
          className="input"
          placeholder="+91 98xxxxxxxx"
          maxLength={20}
        />
      </Field>
      <Field label="Email" className="md:col-span-2">
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="input"
          placeholder="you@example.com"
          maxLength={255}
        />
      </Field>
      <Field label="Gift category" className="md:col-span-2">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setForm({ ...form, category: c })}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                form.category === c
                  ? "bg-ink text-yellow-brand border-ink"
                  : "bg-background border-border hover:border-foreground/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Field>
      <Field label="Tell us your idea" className="md:col-span-2">
        <textarea
          required
          rows={5}
          value={form.requirement}
          onChange={(e) => setForm({ ...form, requirement: e.target.value })}
          className="input resize-none"
          placeholder="Occasion, recipient, budget, delivery date…"
          maxLength={2000}
        />
      </Field>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-ink text-yellow-brand px-7 py-3.5 font-medium shadow-elegant hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-60"
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {loading ? "Sending…" : "Send Inquiry"}
        </button>
      </div>

      <style>{`
        .input {
          width: 100%;
          background: var(--background);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 15px;
          transition: border-color .2s, box-shadow .2s;
        }
        .input:focus { outline: none; border-color: var(--ink); box-shadow: 0 0 0 4px oklch(0.88 0.18 95 / 0.4); }
      `}</style>
    </form>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}
