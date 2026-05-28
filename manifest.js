// ============================
// XLIAN ZIP MASTER PWA
// ============================

const manifestData = {

    name: "XLIAN ZIP MASTER",

    short_name: "XLIAN ZIP",

    description:
    "Convierte carpetas y archivos a ZIP de forma profesional",

    start_url: "../index.html",

    display: "standalone",

    background_color: "#0b1020",

    theme_color: "#0b1020",

    orientation: "portrait",

    icons: [

        {
            src: "../icon-192.png",
            sizes: "192x192",
            type: "image/png"
        },

        {
            src: "../icon-512.png",
            sizes: "512x512",
            type: "image/png"
        }

    ]

};

// CREAR MANIFEST DINÁMICO
const manifestBlob = new Blob(
    [JSON.stringify(manifestData)],
    {
        type: "application/json"
    }
);

// CREAR URL
const manifestURL =
URL.createObjectURL(manifestBlob);

// INSERTAR MANIFEST
const manifestLink =
document.createElement("link");

manifestLink.rel = "manifest";

manifestLink.href = manifestURL;

document.head.appendChild(manifestLink);