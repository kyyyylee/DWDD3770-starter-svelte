<script lang="ts">
    import { theme } from '$lib/stores/theme';
    
    </script>
    
    <div class="flex">
    <select class="select" bind:value={$theme}>
        <option value="wintry">wintry</option>
        <option value="skeleton">skeleton</option>
        <option value="crimson">crimson</option>
        <option value="seafoam">seafoam</option>
        <option value="modern">modern</option>
        <option value="vintage">vintage</option>
        <option value="hamlindigo">hamlindigo</option>
        <option value="rocket">rocket</option>
        <option value="sahara">sahara</option>
    </select>
    </div>
