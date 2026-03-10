<script setup>  

</script>
<template>  
    <v-container style="background-color:beige" >
        <v-row>
            <div class="text-display-medium mb-12">Bundles and Pricing</div>

        </v-row>
        <v-row>
            <v-col md="3">
                <v-card class="text-center">
                    <v-icon color="#000035" icon="mdi-calendar-export-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#000035">Daily Pass</v-card-title>
                    <v-card-text color="#000035">Ksh 500</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center">
                    <v-icon color="#000035" icon="mdi-calendar-end-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#000035">One Month</v-card-title>
                    <v-card-text color="#000035">Ksh 7200</v-card-text>
                </v-card>
            </v-col>
                 <v-col md="3">
                <v-card class="text-center">
                    <v-icon color="#000035" icon="mdi-calendar-end-outline" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#000035">3 Month</v-card-title>
                    <v-card-text color="#000035">Ksh 18000</v-card-text>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card class="text-center">
                    <v-icon color="#000035" icon="mdi-calendar-import" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#000035">6 Months</v-card-title>
                    <v-card-text color="#000035">Ksh 40000</v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row >
            <v-col md="12">
                <v-card class="text-center">
                    <v-icon color="#000035" icon="mdi-calendar-import" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#000035">12 Months</v-card-title>
                    <v-card-text color="#000035">Ksh 60000</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!--What's included-->
    <v-container>
        <v-row>
            <div class="text-display-medium mb-12">What is included in your membership</div>
        </v-row>
        <v-row>
            <v-col md="3">
            <v-card class="title center">
                <v-icon color="#000035" icon="mdi-arm-flex" size="large" class="mt-8"></v-icon>
                <v-card-title>Unlimited group acces</v-card-title>
                <v-card-text></v-card-text>
            </v-card>
            </v-col>
            <v-col md="3">
            <v-card class="text center">
                <v-icon color="#000035" icon="mdi-alarm-multiple" size="large" class="mt-8"></v-icon>
                <v-card-title>24/7 Gym acces</v-card-title>
                <v-card-text></v-card-text>
            </v-card>
            </v-col>
                        <v-col md="3">
            <v-card class="text center">
                <v-icon color="#000035" icon="mdi-dumbbell" size="large" class="mt-8"></v-icon>
                <v-card-title>Men's and Ladies Zones</v-card-title>
                <v-card-text></v-card-text>
            </v-card>
            </v-col>
                        <v-col md="3">
            <v-card class="text center">
                <v-icon color="#000035" icon="mdi-food-fork-drink" size="large" class="mt-8"></v-icon>
                <v-card-title>Nutrition</v-card-title>
                <v-card-text></v-card-text>
            </v-card>
            </v-col>

        </v-row>
           <v-row>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-parking" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Free parking</v-card-title>
                </v-card>
            </v-col>
            <v-col md="3">
                <v-card>
                    <v-icon color="#3A4B68" icon="mdi-shower-head" size="large" class="mt-8"></v-icon>
                    <v-card-title color="#3A4B68">Showers</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
            <div  color=#FF7F50 class="text-display-medium mb-12">How to join</div>
        </v-row>
        <v-row>
            <v-col>
                <v-list>
                    <v-list-item>1. Select your preferred membership plan.</v-list-item>
                    <v-list-item>2. Visit us or fill out the online form.</v-list-item>
                    <v-list-item>3. Make a secure payment at the front desk.</v-list-item>
                    <v-list-item>4. Begin your fitness journey immediately!</v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>