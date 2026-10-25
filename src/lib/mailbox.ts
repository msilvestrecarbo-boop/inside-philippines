/**
 * Emails a request to the team inbox through FormSubmit (formsubmit.co, free, no account),
 * chosen by the owner on 2026-10-25 while no CRM or webhook is set. FormSubmit asks the
 * inbox owner to click "Activate" once after the first submission; until then this returns
 * false and the traveller gets the WhatsApp/email hand-off instead.
 * `confirmation` is emailed back to the traveller (FormSubmit's _autoresponse).
 */
export async function emailTeam(to: string, subject: string, body: string, replyTo: string, confirmation?: string): Promise<boolean> {
  try {
    const r = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, _template: "box", _captcha: "false", _replyto: replyTo, email: replyTo, message: body, ...(confirmation ? { _autoresponse: confirmation } : {}) }),
    });
    const out = (await r.json().catch(() => ({}))) as { success?: string | boolean };
    return r.ok && String(out.success) === "true";
  } catch {
    return false;
  }
}
