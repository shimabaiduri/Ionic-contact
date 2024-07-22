<template>
    <ion-page>
        
        <ion-header>
            <ion-toolbar>
                <ion-title>Todo Apps</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content :fullscreen="true">
            <ion-list>
                <ion-list-header>
                    <ion-label>TODO TODO NZ</ion-label>
                </ion-list-header>

                <ion-item>
                    <ion-label>
                        <h2>Nz</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Nz</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Nz</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Nz</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Nz</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </ion-label>
                </ion-item>
                <ion-item>
                    <ion-label>
                        <h2>Nz</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </ion-label>
                </ion-item>
            </ion-list>
            
            <ion-fab slot="fixed" horizontal="end" vertical="bottom">
                <ion-fab-button color="success">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
  import { add } from 'ionicons/icons';
</script>

<style>
ion-content {
    height: 90%;
}
</style>