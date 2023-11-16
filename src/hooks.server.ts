import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/core/providers/github"

let githubConfig = { clientId: process.env.GITHUB_PROD_ID, clientSecret: process.env.GITHUB_PROD_SECRET }

if (process.env.NODE_ENV === "development") {
  githubConfig = { clientId: process.env.GITHUB_DEV_ID, clientSecret: process.env.GITHUB_DEV_SECRET }
}

export const handle = SvelteKitAuth({
  providers: [
    GitHub(githubConfig),
  ],
})