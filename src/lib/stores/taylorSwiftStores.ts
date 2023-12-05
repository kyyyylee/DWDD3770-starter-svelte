import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';
export const taylorSwiftStore: Writable<Song[]> = writable([]);

interface Song {
    songName: string;
    songID: number;
}

