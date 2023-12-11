# Welcome to my Svelte project!

For my DWDD 3770 RIA I class at UVU

 [VERCEL LINK](https://dwdd-3770-starter-svelte.vercel.app/) :black_cat: :cat2: :black_cat:

## Features

### :vertical_traffic_light: Svelte Components & Routing

I used Svelte's ThemeMenu & LightSwitch to customize my site. I also used Svelte's 'goto' for my site's routing

```typescript
<ThemeMenu />
<LightSwitch />
```

```typescript
import { goto } from '$app/navigation';
```
Find complete code [HERE](src/routes/+layout.svelte)

### :computer_mouse: Captured User Events

I monitored user events such as click and pointer move on my [Events Page](https://dwdd-3770-starter-svelte.vercel.app/tutorial/events)

```typescript
on:click|once={() => alert('clicked')}
```

```typescript
<div on:pointermove={(e) => (m = { x: e.clientX, y: e.clientY })}
		>
```
Find complete code [HERE](src/routes/tutorial/events/+page.svelte)

### :paperclip: Data Bound Elements

I used Svelte's bind:value directive on my [Bindings Page](https://dwdd-3770-starter-svelte.vercel.app/tutorial/bindings)

```typescript
<input type="text" bind:value={name}/>
```

Find complete code [HERE](src/routes/tutorial/bindings/+page.svelte)

### :recycle: Lifecycle Functions

I used both onMount & tick functions on my [Lifecycle Page](https://dwdd-3770-starter-svelte.vercel.app/tutorial/lifecycle)

```typescript
onMount(async () => {
		const songID = Math.floor(Math.random() * 176) + 1;
		const songresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/songs/${songID}`);
        const lyricresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/lyrics/${songID}
`)
		const song = await songresponse.json();
        const lyric = await lyricresponse.json();
		songName = song.song_title;
        songLyric = lyric.lyrics
}
```
```typescript
await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
```
Find complete code [HERE](src/routes/tutorial/lifecycle/+page.svelte)

### :dancer: Motion, animationa & Transitions

Most of these are found on my [Motion Page](https://dwdd-3770-starter-svelte.vercel.app/tutorial/motion) as well as on my sites main navigation

```typescript
<div in:fly={{ y: 200, duration: 2000 }} out:fade>
```

Find complete code [HERE](src/routes/tutorial/motion/+page.svelte)

### :microphone: Outside API

I used this [Taylor Swift API](https://github.com/sarbor/taylor_swift_api) on my [Lifecycle Page](https://dwdd-3770-starter-svelte.vercel.app/tutorial/lifecycle), [Motion Page](https://dwdd-3770-starter-svelte.vercel.app/tutorial/motion) and [Dynamic Route Page](https://dwdd-3770-starter-svelte.vercel.app/taylorswift) 

```typescript
const songresponse = await fetch(`https://taylor-swift-api.sarbo.workers.dev/songs/${songID`);
```

Find complete code [HERE- motion](src/routes/tutorial/motion/+page.svelte), [HERE- lifecycle](src/routes/tutorial/lifecycle/+page.svelte) & [HERE- dynamic](src/routes/taylorswift/+page.svelte)

### :computer: OAuth2

I used OAuth2 to allow users access to my site with GitHub. 

```typescript
import GitHub from "@auth/core/providers/github"
```







