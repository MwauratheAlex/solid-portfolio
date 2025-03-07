import { createEffect, createSignal, onCleanup, onMount } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";
import { cn } from "../lib/utils";
import { selectedPage } from "../stores/store";

interface AnimateProps {
  children: JSX.Element;
  initial: string;
  final: string;
  delay?: number;
  class?: string;
}

export function Animate(props: AnimateProps) {
  const [isVisible, setIsVisible] = createSignal(false);
  let ref;
  let observer: IntersectionObserver | null = null;

  onMount(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    );
    if (ref) observer.observe(ref);
    onCleanup(() => {
      observer?.disconnect()
      observer = null;
    });
  })

  createEffect(() => {
    selectedPage();
    setIsVisible(false);
    if (ref && observer) {
      observer.observe(ref);
    }
  });


  return (
    <div
      ref={ref}
      class={cn(
        `${props.initial}`,
        isVisible() && props.final,
        "transition-all duration-500",
        props.class,
      )}
      style={{ "transition-delay": `${props.delay || 0}ms` }}
    >
      {props.children}
    </div>
  );
}

function test() {
  return (
    <div class="h-min">
    </div>
  );
}
