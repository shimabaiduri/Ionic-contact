<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="tertiary">
                <ion-buttons slot=start>
                    <ion-button @click="back">
                        <ion-icon slot="icon-only" :icon="arrowBackOutline"></ion-icon>
                    </ion-button>
                </ion-buttons>
                <ion-title>Iterator</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">

            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Iterator</ion-title>
                </ion-toolbar>
            </ion-header>

            <ion-list>

                <ion-list-header>Iterator dengan variabel biasa</ion-list-header>

                <ion-item v-for="item in contacts">
                    <ion-label>
                        <h2>{{ item.nama }}</h2>
                        <p>{{ item.phone }}</p>
                        <p>{{ item.email }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>

            <ion-list>

                <ion-list-header>Iterator dengan variabel ref</ion-list-header>

                <ion-item v-for="item in contactRefs">
                    <ion-label>
                        <h2>{{ item.nama }}</h2>
                        <p>{{ item.phone }}</p>
                        <p>{{ item.email }}</p>
                    </ion-label>
                </ion-item>
            </ion-list>

        </ion-content>
    </ion-page>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { arrowBackOutline } from "ionicons/icons";

const router = useRouter()

const back = () => {
    router.back()
}

const contacts = [
    {
        nama: 'Ayayya',
        phone: "0908090909",
        email: "a@gmail",
    },
    {
        nama: 'Bebebeb',
        phone: "0908090909",
        email: "a@gmail",
    },
    {
        nama: 'Cicicici',
        phone: "0908090909",
        email: "a@gmail",
    },
    {
        nama: 'Didididiw',
        phone: "0908090909",
        email: "a@gmail",
    },
]

const contactRefs = [
{
        nama: 'Ayayya',
        phone: "0908090909",
        email: "a@gmail",
    },
    {
        nama: 'Bebebeb',
        phone: "0908090909",
        email: "a@gmail",
    },
    {
        nama: 'Cicicici',
        phone: "0908090909",
        email: "a@gmail",
    },
    {
        nama: 'Didididiw',
        phone: "0908090909",
        email: "a@gmail",
    },
]
</script>

<style></style>