import { showToastFn } from "../stores/store"
import { Container } from "./Container"
import { AiFillGithub, AiFillLinkedin } from 'solid-icons/ai'
import { IoMail } from 'solid-icons/io'
import { Animate } from "./Animate";

export function Contact() {
  return (
    <div class="py-2 px-4" id="stuff">
      <Container>
        <div class="space-y-2 max-w-2xl mx-auto">
          <Socials />
          <Animate initial="translate-y-10 opacity-0" final="translate-y-0 opacity-100" delay={500}>
            <ContactForm />
          </Animate>
        </div>
      </Container>
    </div>
  );
}

function Socials() {

  const email = "mwaurambugua12@gmail.com"

  const copyEmailToClipbard = async () => {
    try {
      await navigator.clipboard.writeText(email)
      showToastFn({ message: "Email copied to clipboard", type: "Success" })
    } catch (err) {
      showToastFn({ message: "Failed to copy", type: "Error" })
    }
  }
  return (
    <Animate
      initial="-translate-x-10 opacity-0"
      final="translate-x-0 opacity-100"
    >
      <div
        class="grid grid-cols-2 gap-4"
      >
        <div class="py-8 px-4 bg-[#18181a] rounded-xl flex hover:bg-[#3f4045] transition-all 
              duration-300 cursor-pointer items-center justify-center group 
          flex-col row-span-1  h-32 col-span-2 md:col-span-1
          md:order-0 order-2">
          <IoMail
            class="mx-auto my-auto md:translate-y-2 group-hover:translate-y-0 group-hover:scale-90
                transition-all duration-500 group-hover:fill-orange-200 size-8 md:size-10 hidden md:block"
          />
          <span class="items-center flex md:-translate-y-2 md:opacity-0 md:scale-x-0 group-hover:opacity-100 group-hover:translate-y-0
                duration-500 transition-all group-hover:scale-x-100">
            <p class="px-2"><span class="font-semibold px-1 text-lg text-gray-500">@</span>mwaurambugua@gmail.com</p>
            <button class="daisy-btn daisy-btn-sm border-none z-50" onclick={copyEmailToClipbard}>
              Copy
            </button>
          </span>
        </div>

        <a href="https://www.linkedin.com/in/mwaura-mbugua/" target="_blank"
          class="p-8 bg-[#18181a] group rounded-xl flex hover:bg-[#3f4045] transition-all 
              duration-300 cursor-pointer md:row-span-2 order-1"
        >
          <AiFillLinkedin
            class="group-hover:fill-orange-200 mx-auto my-auto 
            group-hover:scale-110 transition-all duration-500 size-8 md:size-12"
          />
        </a>

        <Animate initial="-translate-y-20 opacity-0 scale-y-0 md:order-2 order-0"
          final="translate-y-0 opacity-100 scale-y-100"
          delay={50} >
          <a href="https://github.com/MwauratheAlex" target="_blank"
            class="p-8 bg-[#18181a] rounded-xl flex hover:bg-[#3f4045] transition-all  group
              duration-300 cursor-pointer flex-col items-center gap-2 row-span-1">
            <AiFillGithub
              class="group-hover:fill-orange-200 mx-auto my-auto group-hover:scale-110 
              transition-all duration-500 size-8 md:size-10"
            />
            <span class="text-center hidden md:block">
              <pre class="text-xl md:text-2xl group-hover:scale-95 transition-all duration-500">Github</pre>
              <p class=" group-hover:scale-95 transition-all duration-500">See more of my work</p>
            </span>
          </a>
        </Animate>
      </div>
    </Animate>
  );
}

function ContactForm() {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const formData = new FormData(e.target as (HTMLFormElement | undefined));
    const formObject = Object.fromEntries(formData);
    const formJSON = JSON.stringify(formObject);
    console.log(formJSON);
  }

  return (
    <form class="py-4 md:py-8 relative" id="contact-form" onsubmit={handleSubmit}>
      <p class="text-xl md:text-2xl font-bold  text-orange-200/80">
        Contact form
      </p>
      <div class="py-4 space-y-4">
        <label class="w-full flex flex-col items-start px-4 py-2 space-y-0 h-max 
         gap-0 rounded-xl bg-[#18181a] border-none outline-none hover:bg-[#272729] focus-within:bg-[#272729] cursor-text">
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-400 font-semibold">Name</span>
          </div>
          <input type="text" placeholder="John Doe" class="py-1 h-1/2 w-full outline-none" required
            name="name" />
        </label>

        <label class="w-full flex flex-col items-start px-4 py-2 space-y-0 h-max 
         gap-0 rounded-xl bg-[#18181a] border-none outline-none  hover:bg-[#272729] focus-within:bg-[#272729] cursor-text">
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-400 font-semibold">Email</span>
          </div>
          <input type="email" placeholder="mail@site.com" class="py-1 h-1/2 w-full outline-none" required
            name="email" />

        </label>

        <label class="w-full flex flex-col items-start px-4 py-2 space-y-0 h-max 
         gap-0 rounded-xl bg-[#18181a] border-none outline-none hover:bg-[#272729] focus-within:bg-[#272729] cursor-text">
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-400 font-semibold">Message</span>
          </div>
          <textarea
            rows={6}
            placeholder="your message ..."
            class="py-1 w-full outline-none field-sizing-content min-h-28"
            required name="message" />
        </label>

        <button class="daisy-btn daisy-btn-lg w-full bg-[#272729] rounded-xl border-none mt-4
          font-normal text-orange-200/80" type="submit">
          Send Message
        </button>
      </div>
    </form>
  );
}

