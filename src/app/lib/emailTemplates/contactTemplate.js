function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeValue(value) {
  return value ? escapeHtml(value) : "NA";
}

export function createContactEmailTemplate(payload) {
  const safeFormName = escapeHtml(payload.formName || "Contact Form");

  return `
  <div style="margin:0;padding:40px 20px;background:#f6f7fb;font-family:'Segoe UI',Arial,sans-serif;">

    <table role="presentation" cellpadding="0" cellspacing="0" width="100%"
      style="max-width:650px;margin:0 auto;background:#ffffff;border-radius:16px;
             overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,0.08);">

      <!-- HEADER -->
      <tr>
        <td style="background:#E40069;padding:40px 30px;text-align:center;color:#ffffff;">
          <h1 style="margin:0;font-size:24px;font-weight:600;letter-spacing:0.5px;">
            New Contact Request
          </h1>
          <p style="margin:10px 0 0;font-size:14px;opacity:0.9;">
            ${safeFormName}
          </p>
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding:45px 40px;color:#333333;">

          <!-- SECTION TITLE -->
          <div style="font-size:13px;
                      text-transform:uppercase;
                      letter-spacing:1.5px;
                      color:#E40069;
                      font-weight:700;
                      margin-bottom:25px;">
            Contact Information
          </div>

          <!-- INFO BLOCK -->
          <div style="font-size:16px;line-height:1.9;color:#444;">
            <strong style="color:#111;">First Name :</strong> ${safeValue(payload.firstName)}<br>
            <strong style="color:#111;">Last Name :</strong> ${safeValue(payload.lastName)}<br>
            <strong style="color:#111;">Email :</strong> ${safeValue(payload.email)}<br>
            <strong style="color:#111;">Company :</strong> ${safeValue(payload.company)}<br>
            <strong style="color:#111;">Message :</strong> ${safeValue(payload.message)}<br>

          </div>

        </td>
      </tr>

    </table>

  </div>
  `;
}
