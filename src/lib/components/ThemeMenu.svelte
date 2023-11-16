<script lang="ts">
    import { theme } from '$lib/stores/theme';
</script>
    
    <div class="flex items-center border border-surface-700 bg-surface-900 pl-2 rounded-full">
    <i class="fa-solid fa-palette text-white"></i>
    <select class="bg-surface-900 cursor-pointer border-none rounded-full w-4 h-8 pl-0" bind:value={$theme}>
        <option value="modern">modern</option>
        <option value="wintry">wintry</option>
        <option value="skeleton">skeleton</option>
        <option value="crimson">crimson</option>
        <option value="seafoam">seafoam</option>
        <option value="vintage">vintage</option>
        <option value="hamlindigo">hamlindigo</option>
        <option value="rocket">rocket</option>
        <option value="sahara">sahara</option>
    </select>
    </div>
