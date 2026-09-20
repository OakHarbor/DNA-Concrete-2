module.exports = {
    name: "DNA Restoring Concrete",
    email: "info@dnarestoringconcrete.com",
    phoneForTel: "209-200-8242",
    phoneFormatted: "(209) 200-8242",
    address: {
        lineOne: "601",
        lineTwo: "W Vine St",
        city: "Stockton",
        state: "CA",
        zip: "95203",
        mapLink: "https://maps.app.goo.gl/mJFShJyz8AMpBTKz5"
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://dnarestoringconcrete.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
