<script>
  import { SignIn } from "@auth/sveltekit/components";
</script>

<div class="flex justify-center items-center h-full">
  <div
    class="rounded-md bg-utility/20 border-[1px] border-utility/50 p-8 rounded shadow-md"
  >
    <h2 class="text-2xl font-bold mb-4 text-center">
      <span class="text-primary">Register/login</span>
    </h2>
    <div>
      <SignIn provider="google" signInPage="signin" className="w-full">
        <div
          slot="submitButton"
          class="bg-primary/50 text-white rounded py-2 px-4 hover:bg-primary/75 transition-colors duration-200"
        >
          <span> Signin with google </span>
        </div>
      </SignIn>
    </div>
  </div>
</div>
