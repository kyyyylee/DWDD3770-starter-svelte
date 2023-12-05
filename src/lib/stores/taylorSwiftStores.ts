import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
export const twentyFiveSongsStore = writable([]);

interface Song {
    songName: string;
    songID: number;
}

export const taylorSwiftStore: Writable<Song[]> = writable([]);