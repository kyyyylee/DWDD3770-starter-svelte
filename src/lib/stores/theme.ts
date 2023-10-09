import {writable} from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = 'modern';
const initialValue = browser ? localStorage.getItem('theme') : defaultValue;

export const theme = writable(initialValue);

theme.subscribe(value => {
    if (browser) {
        localStorage.setItem('theme', value as string);
        //document.body.setAttribute('data-theme', value as string)
        document.body.dataset.theme = value as string
    }
});