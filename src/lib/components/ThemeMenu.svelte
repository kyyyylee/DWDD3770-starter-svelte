<script lang="ts">
    import { theme } from '$lib/stores/theme';
</script>
    
    <div class="flex items-center bg-surface-200 pl-4 pr-2 rounded-full">
    <i class="fa-solid fa-palette text-primary-500"></i>
    <select class="bg-surface-200 cursor-pointer border-none appearance-none rounded-full w-4 pl-0" bind:value={$theme}>
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
