import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", text: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", text: "Please fill Name, Email, and Message." });
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailOk) {
      setStatus({ type: "error", text: "Email is not valid." });
      return;
    }

    setStatus({ type: "success", text: "Message ready ✅" });

  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <div className="rounded-2xl bg-white shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 sm:p-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Contact Us
              </h1>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    placeholder="Subject (optional)"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone || ""}
                    onChange={onChange}
                    placeholder="Phone (optional)"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Write your message..."
                  rows={6}
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:border-slate-900"
                />
              </div>

              {status.text ? (
                <div
                  className={
                    "rounded-xl px-4 py-3 text-sm " +
                    (status.type === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200")
                  }
                >
                  {status.text}
                </div>
              ) : null}

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="w-full sm:w-auto rounded-xl bg-slate-900 text-white px-6 py-3 font-semibold hover:opacity-90 transition"
                >
                  Send Message
                </button>

                <div className="text-sm text-slate-600">
                  <div className="flex flex-col sm:flex-row sm:gap-6 gap-1">
                    <span>📍 Phnom Penh</span>
                    <span>📞 +855 10 800 921</span>
                    <span>✉️ sembunly2005@email.com</span>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="font-semibold">Fast reply</p>
                <p className="text-slate-600 mt-1">We usually respond with in 24h.</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="font-semibold">Support</p>
                <p className="text-slate-600 mt-1">Mon–Sun, 8AM–10PM.</p>
              </div>
              <div className="rounded-xl bg-white border border-slate-200 p-4">
                <p className="font-semibold">Social</p>
                <p className="text-slate-600 mt-1">Facebook / Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
