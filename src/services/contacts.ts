import { ref } from "vue";
import { useStorage } from "@vueuse/core";

type Contact = {
    id?: any
    name?: string
    phone?: string
    email?: string
    adress?: string
    gender?: number
    isFav?: boolean
}

export const data = useStorage<Contact[]>('app-contacts', [])