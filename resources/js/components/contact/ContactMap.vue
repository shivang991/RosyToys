<template>
    <div class="border-y-4 border-slate-900">
        <GMapMap
            :center="location"
            :zoom="12"
            map-type-id="terrain"
            class="w-full h-96"

        >
            <GMapMarker :position="location"></GMapMarker>
        </GMapMap>
    </div>
</template>

<script setup>
const location = { lat: 19.432608, lng: -99.133209 };
</script>
