<template>
  <ion-page>
        
    <ion-header>
        <ion-toolbar color="tertiary">
            <ion-title>CONTACT'S FAVORITE</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
        <ion-list>
            <ion-list-header>
                <ion-label>Daftar Kontak</ion-label>
            </ion-list-header>

            <ion-item-sliding v-for="i in dataFavorite">
              <ion-item @click="edit">
                <ion-label>
                  <h2>{{ i.name }}</h2>
                  <p>{{ i.phone }}</p>
                  <p>{{ i.email }}</p>
                </ion-label>
              </ion-item>
          
              <ion-item-options>
                <ion-item-option>
                  <ion-icon @click="fav(i, false)" v-if="i.isFav" color="danger" slot="icon-only" :icon="heart"></ion-icon>
                  <ion-icon @click="fav(i, true)" v-else color="danger" slot="icon-only" :icon="heartOutline"></ion-icon>
                  Unvaf
                </ion-item-option>
                <ion-item-option @click="hapus(i)" color="danger">
                  <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                </ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
        </ion-list>

    </ion-content>
</ion-page>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { data } from "../services/contacts";
import { useRouter } from "vue-router";
import { trash, heart, add, heartOutline } from 'ionicons/icons';

const router = useRouter()

const dataFavorite = computed(() => data.value.filter(item => item.isFav == true))

const tambah = () => {
  router.push('/add')
}

const hapus = (item: any) => {
  const index = data.value.indexOf(item)
  data.value.splice(index, 1)
}

const edit = (item: any) => {
  router.push('/add/' + item.id)
}

const fav = (item: any, isFav: boolean) => {
  const index = data.value.findIndex(i => i.id == item.id)
  data.value[index].isFav = isFav
}
</script>

<style></style>