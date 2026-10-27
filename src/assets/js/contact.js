const contactForm = document.getElementById("cs-form-1750");

if (contactForm && contactForm.dataset.sheet) {
	contactForm.addEventListener("submit", () => {
		const data = new URLSearchParams(new FormData(contactForm));
		if (data.get("bot-field")) return;

		fetch(contactForm.dataset.sheet, {
			method: "POST",
			mode: "no-cors",
			keepalive: true,
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: data.toString(),
		}).catch(() => {});
	});
}
