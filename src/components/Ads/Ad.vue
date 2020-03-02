<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="d-flex justify-center">
        <div v-if="!loading">
          <v-card width="600px">
            <v-img height="300px" :src="ad.imageSrc"></v-img>
            <v-card-text>
              <h1 class="text--primary">{{ad.title}}</h1>
              <p class="pt-3">{{ad.description}}</p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <app-edit-ad-modal :ad="ad" v-if="isOwner"></app-edit-ad-modal>
              <app-buy-modal :ad="ad"></app-buy-modal>
            </v-card-actions>
          </v-card>
        </div>
        <div v-else class="text-center pt-5">
          <v-progress-circular :size="100" :width="4" color="purple" indeterminate></v-progress-circular>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from "./EditAdModal";

export default {
  props: ["id"],
  computed: {
    ad() {
      const id = this.id;
      return this.$store.getters.adById(id);
    },
    loading() {
      return this.$store.getters.loading;
    },
    isOwner() {
      return this.ad.ownerId === this.$store.getters.user.id;
    }
  },
  components: {
    appEditAdModal: EditAdModal
  }
};
</script>