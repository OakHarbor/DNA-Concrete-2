const LEAD_SHEET = "https://script.google.com/macros/s/AKfycbx1IONahXyBahsuzgPR5G266EqKTpt5vBYOgghQh6JZtuiKV_mUwEOC30-efBirGSR2/exec";

exports.handler = async (event) => {
    const { payload } = JSON.parse(event.body || "{}");
    if (!payload || payload.form_name !== "Contact Form") return { statusCode: 200 };

    try {
        const res = await fetch(LEAD_SHEET, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: payload.id, data: payload.data }),
        });
        console.log("lead sheet", res.status, await res.text());
    } catch (err) {
        console.error("lead sheet failed", err);
    }

    return { statusCode: 200 };
};
