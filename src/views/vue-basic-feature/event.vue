<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons slot=start>
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Event</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Event</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-button @dblclick="showAlert" expand="block" fill="solid" color="tertiary">
                Click Double
            </ion-button>

            <ion-button @click="showAlert" expand="block" fill="solid" color="tertiary">
                Click Cekali
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

const router = useRouter()

const back = () => {
    router.back()
}

const showAlert = () => {
    alert('Tombol Ditekan')
}
</script>

<style></style>