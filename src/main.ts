import Vue, { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import client from '@/pocketbase'
import { pocketBaseSymbol } from '@/symbols/injectionSymbols'
import { createPinia } from 'pinia'
//import Vue from 'vue'
//import VCalendar from 'v-calendar'
import { Calendar, DatePicker } from 'v-calendar'
//import {setupCalendar} from "v-calendar"

//declare module 'v-calendar'



createApp(App).use(router).use(createPinia()).component("Calendar", Calendar)
    .component("DatePicker", DatePicker).provide(pocketBaseSymbol, client).mount('#app');