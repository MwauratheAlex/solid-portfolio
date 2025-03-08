import { For, JSXElement } from "solid-js";
import { TECHNOLOGIES } from "../data";
import { Container } from "./Container";
import { cn } from "../lib/utils";
import { AiFillCheckCircle } from 'solid-icons/ai'
import { SiTablecheck } from 'solid-icons/si'
import { Animate } from "./Animate";

export function Home() {
  return (
    <div class="py-2 text-gray-200 px-4 overflow-hidden">
      <Container>
        <Animate class='grid grid-cols-1 md:grid-cols-3 gap-4 md:w-4xl mx-auto'
          initial="scale-90"
          final="scale-100"
        >

          {/*paragraph*/}
          <Animate class='w-full max-w-screen md:col-span-2 min-h-44 py-2 rounded-xl bg-[#18181a] flex justify-center items-center px-4
             md:order-1 order-2 duration-500'
            initial="translate-x-10 opacity-0"
            final="translate-x-0 opacity-100"

          >
            <pre class='whitespace-pre-wrap text-balance'>
              Hello👋🏽, my name is Mbugua. I am an Engineer based in Nairobi, Kenya 🇰🇪.
              I hold a bachelors degree in Electrical and Electronic Engineering from JKUAT,
              and a software Engineering certification from ALX Africa. I do love building things
              and tinkering with new technologies.
            </pre>
          </Animate>

          {/* education */}
          <Animate class='w-full row-span-2 rounded-xl bg-[#18181a] md:bg-transparent border 
            border-gray-900 md:order-2 order-5 p-4 
            flex justify-center items-center px-4 md:px-8 duration-500'
            initial="translate-y-10 opacity-0"
            final="translate-y-0 opacity-100"
          >
            <div class="w-full">
              <pre class="font-semibold text-xl text-gray-400 tracking-wide py-2">
                Education
              </pre>
              <Education />
            </div>
          </Animate>

          {/* Experience */}
          <Animate class='w-full row-span-2 rounded-xl bg-[#18181a] border 
            border-gray-900 md:order-3 order-4 p-4 md:bg-transparent
            flex justify-center items-center px-4 md:px-8 duration-500 max-w-screen'
            initial="-translate-y-10 opacity-0"
            final="translate-y-0 opacity-100"
          >
            <div class="w-full">
              <pre class="font-semibold text-xl tracking-wide text-gray-400 py-2">Experience</pre>
              <Experience />
            </div>
          </Animate>

          {/*name*/}
          <div class='w-full md:aspect-square justify-center rounded-xl
             bg-[#18181a] flex flex-col p-4 md:items-center md:order-4 order-1'
          >
            <span class='space-y-2 md:w-min'>
              <div class='font-semibold text-lg md:text-2xl'>
                <pre class='tracking-widest md:tracking-wide'>
                  Mwaura Mbugua
                </pre>
              </div>
              <div class='font-bold text-xl md:text-3xl text-orange-200/80'>
                <pre class='whitespace-pre-wrap tracking-wide'>
                  FullStack Developer
                </pre>
              </div>
            </span>
          </div>

          {/*tech stack*/}
          <Animate class='w-full md:col-span-2 h-44 rounded-xl bg-[#18181a] flex items-center justify-center
            md:order-5 order-3 duration-500 max-w-screen'
            initial="-translate-x-10 opacity-0"
            final="translate-x-0 opacity-100"
          >
            <div class='p-4 '>
              <pre class='font-semibold text-xl tracking-wide text-gray-400'>
                Technologies
              </pre>
              <div class='flex justify-between flex-wrap items-center gap-2 md:gap-4 py-2 mt-2'>
                <For each={TECHNOLOGIES}>
                  {tech => (
                    <div class='daisy-btn daisy-btn-square grow bg-transparent daisy-tooltip' data-tip={tech.name}>
                      <tech.icon class={cn(tech.color, "opacity-80 size-8")} />
                    </div>
                  )}
                </For>
              </div>
            </div>
          </Animate>

        </Animate>
      </Container>
    </div>
  );
}

function Experience() {
  return (
    <ul class="daisy-timeline daisy-timeline-snap-icon daisy-timeline-vertical 
       max-md:daisy-timeline-compact">
      <TimelineItem title="JKUAT" subtitle="Robotics Engineer" start />
      <TimelineItem title="Psalmchmart Ltd" subtitle="Embedded Systems Engineering Intern" />
      <TimelineItem title="KPLC" subtitle="Electrical Engineering Intern" />
      <TimelineItem title="KTDA - Makomboki" subtitle="Electrical Engineering Intern" end />
    </ul>
  );
}

function Education() {
  return (
    <ul class="daisy-timeline daisy-timeline-snap-icon daisy-timeline-vertical 
       max-md:daisy-timeline-compact">
      <TimelineItem title="ALX Africa (2024)" subtitle="Software Engineering" start>
        <ul class="daisy-list gap-2 mt-2">
          <li class="daisy-list-row py-1 flex gap-1 pl-2">
            <SiTablecheck size={20} class="p-1 fill-orange-200/20" />
            <div class="">
              Systems Engineering/Devops
            </div>
          </li>
          <li class="daisy-list-row py-1 flex gap-1 pl-2">
            <SiTablecheck size={20} class="p-1 fill-orange-200/20" />
            Low level programming
          </li>
          <li class="daisy-list-row py-1 flex gap-1 pl-2">
            <SiTablecheck size={20} class="p-1 fill-orange-200/20" />
            High level programming
          </li>
          <li class="daisy-list-row py-1 flex gap-1 pl-2">
            <SiTablecheck size={20} class="p-1 fill-orange-200/20" />
            Linux
          </li>
        </ul>
      </TimelineItem>
      <TimelineItem title="JKUAT (2023)" subtitle="BSc. Electrical and Electronic Engineering" end />
    </ul>
  );
}

function TimelineItem(props: { title: string, subtitle: string, children?: JSXElement, start?: boolean, end?: boolean }) {
  return (
    <li class="w-min">
      {!props.start && <hr class="bg-orange-200/20" />}
      <div class="daisy-timeline-middle">
        <AiFillCheckCircle size={20} class="fill-orange-300/30" />
      </div>
      <div class="daisy-timeline-end md:mb-4">
        <div class="font-mono text-nowrap italic  text-gray-400">{props.title}</div>
        <div class="text-base font-semibold w-52">{props.subtitle}</div>
        {props.children}
      </div>
      {!props.end && <hr class="bg-orange-200/20" />}
    </li>);
}

