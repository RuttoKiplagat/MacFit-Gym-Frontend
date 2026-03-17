<script setup>  
import { ref, onMounted, onUnmounted } from 'vue'

// Video hero state
const videoLoaded = ref(false)
const isPlaying = ref(true)

// Schedule state
const selectedDay = ref(new Date().getDay())
const scheduleRef = ref(null)

const days = [
  { id: 0, name: 'Sun', full: 'Sunday' },
  { id: 1, name: 'Mon', full: 'Monday' },
  { id: 2, name: 'Tue', full: 'Tuesday' },
  { id: 3, name: 'Wed', full: 'Wednesday' },
  { id: 4, name: 'Thu', full: 'Thursday' },
  { id: 5, name: 'Fri', full: 'Friday' },
  { id: 6, name: 'Sat', full: 'Saturday' }
]

// Gym schedule data
const schedule = {
  1: [ // Monday
    { time: '06:00', class: 'HIIT Blast', trainer: 'Mike T.', duration: '45 min', intensity: 'High', spots: 12 },
    { time: '08:00', class: 'Power Yoga', trainer: 'Sarah L.', duration: '60 min', intensity: 'Medium', spots: 20 },
    { time: '10:00', class: 'CrossFit Fundamentals', trainer: 'Coach Dave', duration: '60 min', intensity: 'High', spots: 15 },
    { time: '17:30', class: 'Boxing Conditioning', trainer: 'Mike T.', duration: '45 min', intensity: 'High', spots: 10 },
    { time: '19:00', class: 'Spin & Burn', trainer: 'Jessica R.', duration: '45 min', intensity: 'Medium', spots: 25 }
  ],
  2: [ // Tuesday
    { time: '06:30', class: 'Strength 101', trainer: 'Coach Dave', duration: '60 min', intensity: 'Medium', spots: 16 },
    { time: '09:00', class: 'Pilates Core', trainer: 'Emma W.', duration: '50 min', intensity: 'Low', spots: 18 },
    { time: '17:00', class: 'Combat Fitness', trainer: 'Alex K.', duration: '60 min', intensity: 'High', spots: 14 },
    { time: '18:30', class: 'Evening Flow Yoga', trainer: 'Sarah L.', duration: '60 min', intensity: 'Low', spots: 22 }
  ],
  3: [ // Wednesday
    { time: '06:00', class: 'Bootcamp', trainer: 'Mike T.', duration: '45 min', intensity: 'High', spots: 20 },
    { time: '07:30', class: 'Kettlebell Power', trainer: 'Coach Dave', duration: '45 min', intensity: 'Medium', spots: 12 },
    { time: '18:00', class: 'Zumba Dance', trainer: 'Maria G.', duration: '60 min', intensity: 'Medium', spots: 30 },
    { time: '19:30', class: 'Recovery Stretch', trainer: 'Emma W.', duration: '30 min', intensity: 'Low', spots: 25 }
  ],
  4: [ // Thursday
    { time: '06:30', class: 'Upper Body Focus', trainer: 'Alex K.', duration: '50 min', intensity: 'Medium', spots: 16 },
    { time: '08:00', class: 'Vinyasa Yoga', trainer: 'Sarah L.', duration: '75 min', intensity: 'Medium', spots: 20 },
    { time: '17:30', class: 'Functional Fitness', trainer: 'Coach Dave', duration: '60 min', intensity: 'High', spots: 18 },
    { time: '19:00', class: 'TRX Suspension', trainer: 'Mike T.', duration: '45 min', intensity: 'Medium', spots: 12 }
  ],
  5: [ // Friday
    { time: '06:00', class: 'Friday Fire', trainer: 'Mike T.', duration: '45 min', intensity: 'High', spots: 15 },
    { time: '09:00', class: 'Mobility & Flex', trainer: 'Emma W.', duration: '45 min', intensity: 'Low', spots: 20 },
    { time: '17:00', class: 'Weekend Warrior Prep', trainer: 'Coach Dave', duration: '60 min', intensity: 'High', spots: 20 },
    { time: '18:30', class: 'Sunset Spin', trainer: 'Jessica R.', duration: '45 min', intensity: 'Medium', spots: 25 }
  ],
  6: [ // Saturday
    { time: '08:00', class: 'Community WOD', trainer: 'Coach Dave', duration: '60 min', intensity: 'High', spots: 30 },
    { time: '10:00', class: 'Family Fitness', trainer: 'Sarah L.', duration: '45 min', intensity: 'Low', spots: 25 },
    { time: '11:30', class: 'Open Gym', trainer: 'Staff', duration: '180 min', intensity: 'Self-paced', spots: 50 }
  ],
  0: [ // Sunday
    { time: '09:00', class: 'Sunday Reset Yoga', trainer: 'Sarah L.', duration: '90 min', intensity: 'Low', spots: 20 },
    { time: '11:00', class: 'Active Recovery', trainer: 'Emma W.', duration: '45 min', intensity: 'Low', spots: 18 },
    { time: '14:00', class: 'Open Gym', trainer: 'Staff', duration: '240 min', intensity: 'Self-paced', spots: 50 }
  ]
}

const stats = [
  { number: '15K+', label: 'Active Members', icon: 'mdi-account-group' },
  { number: '50+', label: 'Weekly Classes', icon: 'mdi-calendar-check' },
  { number: '25', label: 'Expert Trainers', icon: 'mdi-dumbbell' },
  { number: '12K', label: 'Sq Ft Facility', icon: 'mdi-home-modern' }
]

const features = [
  { title: 'Premium Equipment', desc: 'Top-tier Rogue, Hammer Strength, and Technogym equipment', icon: 'mdi-weight-lifter' },
  { title: 'Recovery Zone', desc: 'Sauna, cold plunge, and Normatec compression therapy', icon: 'mdi-spa' },
  { title: '24/7 Access', desc: 'Round-the-clock entry with secure app-based access', icon: 'mdi-clock-outline' },
  { title: 'Nutrition Bar', desc: 'Protein shakes, healthy meals, and supplements on-site', icon: 'mdi-nutrition' }
]

// Methods
const toggleVideo = () => {
  const video = document.querySelector('.hero-video')
  if (video) {
    if (isPlaying.value) video.pause()
    else video.play()
    isPlaying.value = !isPlaying.value
  }
}

const bookClass = (classItem) => {
  alert(`Booking: ${classItem.class} at ${classItem.time} with ${classItem.trainer}`)
}

const scrollToSchedule = () => {
  scheduleRef.value?.scrollIntoView({ behavior: 'smooth' })
}

// Intensity color mapping
const getIntensityColor = (intensity) => {
  const colors = {
    'High': 'error',
    'Medium': 'warning',
    'Low': 'success',
    'Self-paced': 'info'
  }
  return colors[intensity] || 'grey'
}
</script>
<template>  
  <v-container>
    <v-row>
      <div CLASS="text-display-medium mb-12" color="beige">WELCOME TO MACFIT GYM</div>
    </v-row>
  </v-container>
<!--Our Services-->
<v-container>
  <v-row>
    <v-col md="6">
      <v-card>
        <v-img src="/ps.jpg"></v-img>
        <v-card-title>Personal Training</v-card-title>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card>
        <v-img src="/st.jpg"></v-img>
        <v-card-title>Strength Training</v-card-title>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col md="6">
      <v-card>
        <v-img src="/madison-lavern-CDJCAcAAPlU-unsplash.jpg"></v-img>
        <v-card-title>Yoga</v-card-title>
      </v-card>
    </v-col>
    <v-col md="6">
      <v-card>
        <v-img src="/.jpg"></v-img>
        <v-card-title>Zumba Dance</v-card-title>
      </v-card>
    </v-col>
  </v-row>
</v-container>
<!-- Dedicated Men's and Ladie's Gym -->
     <v-container style="background-color:beige" max-width="100%">
        <v-row >
            <v-col md="8" class="text-center">
                <div class="text-display-medium mb-12">Dedicated Men's and Ladie's Gym</div>
                <div class="text-body-large font-weight-light text-emphasis mb-8">Power, strength, and focus. Train harder in a space built for men who want real results. 💪
      </div>
                
      <div class="text-body-large font-weight-light text-emphasis mb-8">Strong, confident, unstoppable. A comfortable space designed for women to train and shine. ✨
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
      <div class="macfit-homepage">
    <!-- Navigation -->
    <v-app-bar flat class="px-4" color="transparent" absolute>
      <v-toolbar-title class="text-h4 font-weight-bold text-white">
        <span class="text-primary">MAC</span>FIT
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn variant="text" color="white" class="d-none d-md-flex">Classes</v-btn>
      <v-btn variant="text" color="white" class="d-none d-md-flex">Trainers</v-btn>
      <v-btn variant="text" color="white" class="d-none d-md-flex">Membership</v-btn>
      <v-btn variant="text" color="white" class="d-none d-md-flex">About</v-btn>
      <v-btn color="primary" variant="elevated" class="ml-4 font-weight-bold">
        Join Now
      </v-btn>
    </v-app-bar>

    <!-- Hero Section with Video Background -->
    <section class="hero-section">
      <div class="video-container">
        <video 
          class="hero-video"
          autoplay 
          muted 
          loop 
          playsinline
          @loadeddata="videoLoaded = true"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-man-doing-push-ups-in-a-gym-4076-large.mp4" type="video/mp4">
        </video>
        <div class="video-overlay"></div>
      </div>

      <v-container class="hero-content fill-height">
        <v-row align="center" justify="center" class="fill-height">
          <v-col cols="12" md="10" lg="8" class="text-center text-white">
            <v-fade-transition>
              <div v-show="videoLoaded">
                <h1 class="text-h2 text-md-h1 font-weight-black mb-6 hero-title">
                  FORGE YOUR
                  <span class="text-primary">LEGACY</span>
                </h1>
                <p class="text-h6 text-md-h5 mb-8 hero-subtitle font-weight-light">
                  State-of-the-art facility. World-class trainers. Unstoppable community.
                  <br class="d-none d-md-block">
                  Your transformation starts here.
                </p>
                <div class="d-flex flex-column flex-sm-row justify-center gap-4">
                  <v-btn 
                    size="x-large" 
                    color="primary" 
                    variant="elevated"
                    class="font-weight-bold px-8"
                    prepend-icon="mdi-calendar-check"
                    @click="scrollToSchedule"
                  >
                    View Schedule
                  </v-btn>
                  <v-btn 
                    size="x-large" 
                    color="white" 
                    variant="outlined"
                    class="font-weight-bold px-8"
                    prepend-icon="mdi-play-circle"
                  >
                    Virtual Tour
                  </v-btn>
                </div>
              </div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>

      <!-- Video Controls -->
      <v-btn
        icon
        variant="text"
        color="white"
        class="video-control"
        @click="toggleVideo"
      >
        <v-icon size="32">{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
      </v-btn>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator">
        <v-icon icon="mdi-chevron-down" size="32" color="white" class="bounce"></v-icon>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section py-8 bg-surface">
      <v-container>
        <v-row>
          <v-col v-for="(stat, index) in stats" :key="index" cols="6" md="3">
            <v-card flat class="text-center pa-4 stat-card">
              <v-icon :icon="stat.icon" size="48" color="primary" class="mb-2"></v-icon>
              <div class="text-h4 font-weight-bold text-primary">{{ stat.number }}</div>
              <div class="text-body-2 text-grey">{{ stat.label }}</div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-background">
      <v-container>
        <v-row class="mb-12">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-4">WHY <span class="text-primary">MACFIT</span>?</h2>
            <p class="text-body-1 text-grey max-width-600 mx-auto">
              Premium fitness experience designed for serious results and community connection
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="(feature, index) in features" :key="index" cols="12" md="6" lg="3">
            <v-hover v-slot="{ isHovering, props }">
              <v-card
                v-bind="props"
                :elevation="isHovering ? 8 : 2"
                class="pa-6 h-100 feature-card"
                :class="{ 'on-hover': isHovering }"
              >
                <v-icon :icon="feature.icon" size="56" color="primary" class="mb-4"></v-icon>
                <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
                <p class="text-body-2 text-grey">{{ feature.desc }}</p>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Schedule Section -->
    <section ref="scheduleRef" class="schedule-section py-16 bg-surface-variant">
      <v-container>
        <v-row class="mb-8">
          <v-col cols="12" class="text-center">
            <h2 class="text-h3 font-weight-bold mb-4">CLASS <span class="text-primary">SCHEDULE</span></h2>
            <p class="text-body-1 text-grey">Book your spot in our premium small-group classes</p>
          </v-col>
        </v-row>

        <!-- Day Selector -->
        <v-row class="mb-6">
          <v-col cols="12">
            <v-card flat class="day-selector pa-2">
              <v-slide-group v-model="selectedDay" show-arrows center-active>
                <v-slide-group-item
                  v-for="day in days"
                  :key="day.id"
                  v-slot="{ isSelected, toggle }"
                  :value="day.id"
                >
                  <v-btn
                    :color="isSelected ? 'primary' : 'grey-lighten-2'"
                    :variant="isSelected ? 'elevated' : 'flat'"
                    class="ma-2 day-btn"
                    rounded="lg"
                    @click="toggle"
                  >
                    <div class="d-flex flex-column">
                      <span class="text-caption font-weight-bold">{{ day.name }}</span>
                      <span class="text-caption" v-if="isSelected">{{ day.full }}</span>
                    </div>
                  </v-btn>
                </v-slide-group-item>
              </v-slide-group>
            </v-card>
          </v-col>
        </v-row>

        <!-- Schedule Grid -->
        <v-row>
          <v-col cols="12">
            <v-fade-transition mode="out-in">
              <div :key="selectedDay" class="schedule-grid">
                <v-row>
                  <v-col 
                    v-for="(session, index) in schedule[selectedDay]" 
                    :key="index"
                    cols="12" 
                    md="6" 
                    lg="4"
                  >
                    <v-hover v-slot="{ isHovering, props }">
                      <v-card
                        v-bind="props"
                        :elevation="isHovering ? 8 : 2"
                        class="class-card pa-4"
                        :class="{ 'on-hover': isHovering }"
                      >
                        <div class="d-flex justify-space-between align-start mb-3">
                          <div>
                            <div class="text-h5 font-weight-bold text-primary">{{ session.time }}</div>
                            <div class="text-body-2 text-grey">{{ session.duration }}</div>
                          </div>
                          <v-chip
                            :color="getIntensityColor(session.intensity)"
                            size="small"
                            variant="tonal"
                            class="font-weight-bold"
                          >
                            {{ session.intensity }}
                          </v-chip>
                        </div>
                        
                        <h4 class="text-h6 font-weight-bold mb-2">{{ session.class }}</h4>
                        <div class="d-flex align-center mb-3 text-body-2">
                          <v-icon icon="mdi-account" size="16" class="mr-1"></v-icon>
                          <span class="text-grey">{{ session.trainer }}</span>
                        </div>
                        
                        <div class="d-flex justify-space-between align-center mt-4">
                          <div class="text-caption text-grey">
                            <v-icon icon="mdi-account-group" size="16" class="mr-1"></v-icon>
                            {{ session.spots }} spots left
                          </div>
                          <v-btn
                            color="primary"
                            variant="elevated"
                            size="small"
                            @click="bookClass(session)"
                            :disabled="session.spots === 0"
                          >
                            Book Now
                          </v-btn>
                        </div>
                      </v-card>
                    </v-hover>
                  </v-col>
                </v-row>
              </div>
            </v-fade-transition>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CTA Section -->
    <section class="cta-section py-16 bg-primary">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" md="8" class="text-center text-white">
            <h2 class="text-h3 font-weight-bold mb-4">READY TO START?</h2>
            <p class="text-h6 mb-8 font-weight-light">
              Join MacFit today and get your first week free. No commitment required.
            </p>
            <div class="d-flex flex-column flex-sm-row justify-center gap-4">
              <v-btn color="white" size="x-large" variant="elevated" class="font-weight-bold text-primary">
                Claim Free Week
              </v-btn>
              <v-btn color="white" size="x-large" variant="outlined" class="font-weight-bold">
                View Memberships
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- Footer -->
    <v-footer class="bg-surface py-12">
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="mb-6 mb-md-0">
            <div class="text-h4 font-weight-bold mb-4">
              <span class="text-primary">MAC</span>FIT
            </div>
            <p class="text-body-2 text-grey mb-4">
              Premium fitness facility dedicated to helping you achieve your strongest self through community, coaching, and cutting-edge facilities.
            </p>
            <div class="d-flex gap-2">
              <v-btn icon="mdi-instagram" variant="text" color="grey"></v-btn>
              <v-btn icon="mdi-facebook" variant="text" color="grey"></v-btn>
              <v-btn icon="mdi-youtube" variant="text" color="grey"></v-btn>
              <v-btn icon="mdi-twitter" variant="text" color="grey"></v-btn>
            </div>
          </v-col>
          <v-col cols="6" md="2">
            <h4 class="text-subtitle-1 font-weight-bold mb-4">Quick Links</h4>
            <div class="d-flex flex-column gap-2">
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Classes</a>
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Trainers</a>
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Schedule</a>
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Pricing</a>
            </div>
          </v-col>
          <v-col cols="6" md="2">
            <h4 class="text-subtitle-1 font-weight-bold mb-4">Company</h4>
            <div class="d-flex flex-column gap-2">
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">About</a>
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Careers</a>
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Press</a>
              <a href="#" class="text-body-2 text-grey text-decoration-none hover-primary">Contact</a>
            </div>
          </v-col>
          <v-col cols="12" md="4">
            <h4 class="text-subtitle-1 font-weight-bold mb-4">Newsletter</h4>
            <p class="text-body-2 text-grey mb-4">Get fitness tips and exclusive offers</p>
            <v-text-field
              variant="outlined"
              density="compact"
              placeholder="Enter your email"
              append-inner-icon="mdi-send"
              hide-details
              class="bg-surface"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider class="my-8"></v-divider>
        <div class="text-center text-body-2 text-grey">
          © 2024 MacFit Gym. All rights reserved.
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<style scoped>
.macfit-homepage {
  font-family: 'Inter', system-ui, sans-serif;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.hero-subtitle {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  line-height: 1.6;
}

.video-control {
  position: absolute;
  bottom: 100px;
  right: 40px;
  z-index: 3;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.video-control:hover {
  opacity: 1;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

/* Stats Section */
.stats-section {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.stat-card {
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
}

/* Feature Cards */
.feature-card {
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.feature-card.on-hover {
  transform: translateY(-8px);
  border-color: rgb(var(--v-theme-primary));
}

/* Schedule Section */
.schedule-section {
  background: linear-gradient(135deg, rgb(var(--v-theme-surface)) 0%, rgb(var(--v-theme-background)) 100%);
}

.day-selector {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 16px;
}

.day-btn {
  min-width: 80px;
  height: 64px;
  transition: all 0.3s ease;
}

.class-card {
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.class-card.on-hover {
  border-left-color: rgb(var(--v-theme-primary));
  transform: translateX(4px);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, rgb(var(--v-theme-primary)) 0%, rgb(var(--v-theme-primary-darken-1)) 100%);
}

/* Utility Classes */
.gap-4 {
  gap: 16px;
}

.max-width-600 {
  max-width: 600px;
}

.hover-primary:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

/* Responsive Adjustments */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem !important;
  }
  
  .video-control {
    bottom: 80px;
    right: 20px;
  }
}

@media (max-width: 600px) {
  .hero-section {
    min-height: 500px;
  }
  
  .hero-title {
    font-size: 2rem !important;
  }
}
</style>