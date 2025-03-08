import { cn } from "../lib/utils";
import { selectedPage, setSelectedPage } from "../stores/store";

export function Header() {
  return (
    <div class='flex items-center justify-center py-4 sticky top-0 z-50 backdrop-blur-lg bg-black/50 px-4'>
      <div class="bg-[#272729] w-full md:min-w-xs md:max-w-xs flex justify-between p-1.5 rounded-xl">
        <HeaderButton text="Home" idx={0} />
        <HeaderButton text="Projects" idx={1} />
        <HeaderButton text="Contact" idx={2} />
      </div>
    </div>
  );
}

function HeaderButton(props: { text: string, idx: number }) {
  const handleClick = () => {
    setSelectedPage(props.idx)
    window.scrollTo({ top: 0, behavior: "instant" })
  }
  return (
    <button
      class={cn(
        "flex-1/3  rounded-lg py-1 cursor-pointer",
        "text-gray-400 transition-all duration-75 text-sm",
        { "bg-[#3f4045] hover:bg-[#3f4045] text-orange-200/80": selectedPage() === props.idx },
        { "hover:bg-transparent hover:text-gray-500 ": selectedPage() !== props.idx }
      )}
      onclick={handleClick}
    >
      {props.text}
    </button>
  );
}
