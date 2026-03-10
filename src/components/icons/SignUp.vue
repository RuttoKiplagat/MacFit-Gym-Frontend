<script setup>  
  import { ref } from 'vue'

  const rules = {
    required: value => !!value || 'Required.',
    min: v => v.length >= 8 || 'Min 8 characters',
    emailMatch: () => (`The email and password you entered don't match`),
  }

  const show1 = ref(false)
  const show2 = ref(true)
  const password = ref(null)
  const confirmPassword= ref(null)
  const show1confirm = ref(false)
</script>
<template>  
    <v-container style="background-color:beige" width="50%" class="text-center mt-12">
        <v-row>
            <v-col md="12">
                <v-form>
                  <v-row>
                    <v-col md="12">
                        <v-icon color="#3A4B68" icon="mdi-dumbbell">

                        </v-icon>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                        <div class="text-display-small font-weight-medium">Sign up into MacFit Gym</div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">Firstname</div></v-col>
                    <v-col md="6"><v-text-field variant="outlined"></v-text-field></v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">Lastname</div></v-col>
                    <v-col md="6"><v-text-field variant="outlined"></v-text-field></v-col>
                  </v-row>
                  <v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">phone</div></v-col>
                    <v-col md="6"><v-text-field variant="outlined"></v-text-field></v-col>
                  </v-row><v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">email</div></v-col>
                    <v-col md="6"><v-text-field variant="outlined" type="number"></v-text-field></v-col>
                  </v-row>
                    <v-row>
                    <v-col md=""><div class="text-title-large font-weight-medium text-right">Password</div></v-col>
                        <v-col md=""><v-text-field             
                            v-model="password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            variant="outlined"
                            @click:append="show1 = !show1">
                    </v-text-field></v-col>
                
                  </v-row>
              <v-row>
                    <v-col md=""><div class="text-title-large font-weight-medium text-right">Confirm Password</div></v-col>
                        <v-col md=""><v-text-field             
                            v-model="confirmPassword"
                            :append-icon="show1Confirm ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="[rules.required, rules.min]"
                            :type="show1 ? 'text' : 'password'"
                            variant="outlined"
                            @click:append="show1 = !show1">
                    </v-text-field></v-col>
                
                  </v-row>
                  <v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">Gender</div>
                        <v-radio-group inline>
                        <v-radio label="Male" value="male"></v-radio>
                        <v-radio label="Female" value="female"></v-radio>
                        
                        </v-radio-group>
                    </v-col>

                  </v-row>
                  <v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">Date Input</div></v-col>
                    <v-col>
                        <v-date-input label="Date input">

                    </v-date-input>
                    </v-col>

                  </v-row>
                  <v-row>
                    <v-col md="6"><div class="text-title-large font-weight-medium text-right">Gym Location</div></v-col>
                        <v-select
                        label="Select"
                        :items="['CBD', 'Westlands', 'Buruburu', 'Imara', 'Kitengela', 'Juja']"
                        variant="outlined"
                        ></v-select>
                  </v-row>
                  <v-col md="12">
                    <v-btn color="#000035" variant="elevated">Log in</v-btn>
                  </v-col>
                  <v-row>
                    <v-col md="12">
                        <div>New MacFit Gym? Create an account</div>
                    </v-col>
                  </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>