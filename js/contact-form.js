/**
 * Envoi du formulaire Contact via Formspree (API JSON).
 * Avantage : on reste sur le site et on redirige vers merci.html.
 */
(function () {
  const form = document.querySelector("[data-contact-form]");
  if (!form) return;

  const status = document.querySelector("[data-form-status]");
  const submitBtn = form.querySelector('[type="submit"]');

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (status) {
      status.textContent = "";
      status.hidden = true;
    }

    const previousLabel = submitBtn?.textContent;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours…";
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = "merci.html";
        return;
      }

      let message =
        "L’envoi a échoué. Réessayez ou écrivez à contact@garceaux.fr.";
      try {
        const data = await response.json();
        if (data?.errors?.length) {
          message = data.errors.map((e) => e.message).join(" ");
        }
      } catch {
        /* garde le message par défaut */
      }

      if (status) {
        status.textContent = message;
        status.hidden = false;
      }
    } catch {
      if (status) {
        status.textContent =
          "Impossible de contacter le serveur. Vérifiez votre connexion ou écrivez à contact@garceaux.fr.";
        status.hidden = false;
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = previousLabel || "Envoyer";
      }
    }
  });
})();
