<script setup>  

</script>
<template>  
    <h1>Landing Page</h1>
    <v-container max-width="100%">
        <v-row>
            <v-carousel>
                <v-carousel-item src="/victor-freitas-WvDYdXDzkhs-unsplash.jpg" cover></v-carousel-item>
                <v-carousel-item src="/luis-reyes-mTorQ9gFfOg-unsplash.jpg" cover></v-carousel-item>
                <v-carousel-item src="/sven-mieke-MsCgmHuirDo-unsplash.jpg" cover></v-carousel-item>
            </v-carousel>
        </v-row>
    </v-container>
<!-- About Us -->
     <v-container style="background-color:beige" max-width="100%">
        <v-row >
            <v-col md="8" class="text-center">
                <div class="text-display-medium mb-12">About Our Gym</div>
                <div class="text-body-large font-weight-light text-emphasis mb-8">Our gym is dedicated to helping individuals achieve their health and fitness goals in a supportive and motivating environment. We provide modern equipment, professional trainers, and customized workout programs designed for beginners and experienced athletes alike.
      </div>
                
      <div class="text-body-large font-weight-light text-emphasis mb-8">Whether your goal is to build strength, lose weight, improve endurance, or simply live a healthier lifestyle, our facility offers the tools and guidance you need to succeed. We believe that fitness is not just about physical transformation but also about building confidence and discipline.
      </div>
                <div class="text-body-large font-weight-light text-emphasis mb-8">Join our community and experience a space where motivation, commitment, and results come together. At our gym, every workout brings you one step closer to becoming the strongest version of yourself.
      </div>
                <v-btn color="#000035">LEARN MORE</v-btn>
            </v-col>
            <v-col md="4">
                <v-container class="d-flex align-center justify-center fill-height">
                <v-img src="/alexandra-tran-fS3tGOkp0xY-unsplash.jpg"></v-img>
                </v-container>
            </v-col>
        </v-row>
     </v-container>

<!-- Latest News -->
     <v-container>
        <v-row>
            <v-col md="4">
                <v-card>
                    <v-img src="public/master-kamal-srinivas-JXp-ZImaJOw-unsplash.jpg" cover></v-img>
                    <v-card-title>Yoga</v-card-title>
                    <v-card-text>At Yiga Gym, we inspire our members to stay active, build confidence, and become stronger every day. 💪</v-card-text>
                    <v-btn color='#000035'>READ MORE</v-btn>
                </v-card>
            </v-col>
                        <v-col md="4">
                <v-card>
                    <v-img src="public/syed-mohammad-ismail-quli-_Le3AQsFwVg-unsplash.jpg" cover></v-img>
                    <v-card-title>TreadMills</v-card-title>
                    <v-card-text>Treadmills help people run or walk indoors while improving stamina and burning calories</v-card-text>
                    <v-btn color='#000035'>READ MORE</v-btn>
                </v-card>
            </v-col>
                <v-col md="4">
                <v-card>
                    <v-img src="public/nexa-black-gu4bdVTq0CU-unsplash.jpg" cover></v-img>
                    <v-card-title>Heavy Lifting</v-card-title>
                    <v-card-text>Heavy lifting equipment like barbells and dumbbells helps build strength and increase muscle mass.</v-card-text>
                    <v-btn color='#000035'>READ MORE</v-btn>
                </v-card>
            </v-col>
        </v-row>

     </v-container>
<!--Reviews-->
    <v-container>
        <v-row>
            <v-col>
            <v-card color="beige">
                <v-card-text>Sample Review</v-card-text>
                <v-rating :length="5" :size="32" :model-value="3" active-color="primary"></v-rating>
            </v-card>
            </v-col>
                        <v-col>
            <v-card color="beige">
                <v-card-text>Great gym with modern equipment and a motivating atmosphere. The trainers are friendly and very helpful.</v-card-text>
                <v-rating :length="5" :size="32" :model-value="5" active-color="primary"></v-rating>
            </v-card>
            </v-col>
                        <v-col>
            <v-card color="beige">
                <v-card-text>Clean facility and excellent workout space. Perfect place to stay active and reach fitness goals.</v-card-text>
                <v-rating :length="5" :size="32" :model-value="4" active-color="primary"></v-rating>
            </v-card>
            </v-col>
        </v-row>

    </v-container>
    <!--Contact Us-->
    <v-container style="background-color:beige" max-width="100%" >
        <v-row class="text center">
         <div class="text-body-large font-weight-light text-emphasis mb-8">Get in Touch</div>
         <div class="text-body-large font-weight-light text-emphasis mb-8">+254 76 9889 9880 | @macfitgmail.com</div>
         <div class="text-body-large font-weight-light text-emphasis mb-8">Opening Hours</div> 
         <div class="text-body-large font-weight-light text-emphasis mb-8">Mon-Fri: 5.00am - 9.00am | Sat: 5.30am - 6pm| Sun: 9.00am - 4.00pm</div>
         <div class="text-body-large font-weight-light text-emphasis mb-8">MacFitGym, 3RD Floor, Imara Mall, Nairobi</div>  
         <div class="text-body-large font-weight-light text-emphasis mb-8">&copy; 2025 MacFit Gym. Designed by Rutto Alpha</div>
        </v-row>
    </v-container>
</template>
