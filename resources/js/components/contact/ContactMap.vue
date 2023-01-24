<template>
    <div ref="mapEl" class="rounded-md h-96"></div>
</template>

<script setup>
import { map, tileLayer, marker } from "leaflet";
import "leaflet/dist/leaflet.js";
import { ref, onMounted } from "vue";

const mapEl = ref(null);

function importLeafletCss() {
    const leafletCssId = "leaf";
    if (!document.getElementById(leafletCssId)) {
        const link = document.createElement("link");
        link.href = window.asset("css/leaflet.css");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.id = leafletCssId;
        link.media = "all";
        document.head.appendChild(link);
    }
}

function initMap(el, latLng) {
    const m = map(el).setView(latLng, 13);
    tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(m);
    marker(latLng).addTo(m);
}

onMounted(() => {
    importLeafletCss();
    initMap(mapEl.value, [19.42205358457093, -99.12478501788365]);
});
</script>
