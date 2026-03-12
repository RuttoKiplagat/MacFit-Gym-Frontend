<script setup>
    import "leaflet/dist/leaflet.css"
    import * as L from 'leaflet'
    import { ref, onMounted } from 'vue'

    const initialMap = ref(null)

    onMounted(()=> {
    initialMap.value = L.map('map').setView([-1.2953145569779758, 36.817184449599566], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(initialMap.value);
    L.marker([-1.3073328374609299, 36.81211146039793]).addTo(initialMap.value);
    });
    onMounted(()=> {
    initialMap.value = L.map('map2').setView([-1.2953145569779758, 36.817184449599566], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(initialMap.value);
    L.marker([-1.3073328374609299, 36.81211146039793]).addTo(initialMap.value);
    });
    onMounted(()=> {
    initialMap.value = L.map('map3').setView([-1.2953145569779758, 36.817184449599566], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(initialMap.value);
    L.marker([-1.3073328374609299, 36.81211146039793]).addTo(initialMap.value);
    });
    onMounted(()=> {
    initialMap.value = L.map('map4').setView([-1.2953145569779758, 36.817184449599566], 10)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(initialMap.value);
    L.marker([-1.3073328374609299, 36.81211146039793]).addTo(initialMap.value);
    });
</script>

<template>
    <v-container class="mt-12">
        <v-row>
            <v-col>
                <div class="text-display-medium mb-6">Gym Locations</div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col md="4">
                            <v-card-text> CBD </v-card-text>
                        </v-col>
                        <v-col md="8">
                            <div id="map" style="height:30vh;"></div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col md="4">
                            <v-card-text> Madaraka </v-card-text>
                        </v-col>
                        <v-col md="8">
                            <div id="map2" style="height:30vh;"></div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col md="4">
                            <v-card-text> Westlands </v-card-text>
                        </v-col>
                        <v-col md="8">
                            <div id="map3" style="height:30vh;"></div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card>
                    <v-row>
                        <v-col md="4">
                            <v-card-text> Buruburu </v-card-text>
                        </v-col>
                        <v-col md="8">
                            <div id="map4" style="height:30vh;"></div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        
    </v-container>
</template>