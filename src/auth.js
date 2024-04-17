import { SvelteKitAuth } from "@auth/sveltekit";
import Google from "@auth/sveltekit/providers/google";

const providers = [Google];

export const { handle } = SvelteKitAuth({
  providers,
});
