import { For } from "solid-js";
import { Project, PROJECTS } from "../data";
import { Container } from "./Container";
import { AiFillGithub, AiOutlineLink } from 'solid-icons/ai'


import { IconTypes } from "solid-icons";
import { Animate } from "./Animate";

export function Projects() {
  return (
    <div class="pb-4 px-4">
      <Container>
        <div class="space-y-6">
          <For each={PROJECTS}>
            {(project) => (
              <ProjectCard project={project} />
            )}
          </For>
        </div >
      </Container>
    </div >
  );
}

function ProjectCard(props: { project: Project }) {
  const { project } = props;

  return (
    <div class={`flex gap-4 overflow-hidden`}>
      <div class="flex-1/2 h-80 rounded-lg overflow-hidden hidden md:block">
        <img src={project.img} class="object-cover h-full w-full opacity-[98%]" />
      </div>
      <div class="flex-1/2 flex flex-col gap-4 w-full">
        <Animate class="grow" initial="translate-y-10 opacity-0" final="translate-0 opacity-100">
          <div class="px-4 md:px-8 h-full py-4 space-y-2 flex flex-col justify-center  bg-[#18181a]
         rounded-2xl ">
            <div class="font-semibold text-xl md:text-2xl">
              <pre class="text-orange-200">{project.title}</pre>
            </div>
            <div>
              <pre class="whitespace-pre-wrap text-gray-200 tracking-wide">
                {project.description}
              </pre>
            </div>
            <div class="flex gap-2">
              <For each={project.technologies}>
                {tech => (
                  <div class="bg-gray-200 dark:bg-gray-800 p-1 md:px-4 rounded text-sm">
                    {tech}
                  </div>
                )}
              </For>
            </div>
          </div>
        </Animate>
        <div class="flex gap-4 w-full bg-transparent rounded-xl items-end justify-end
          flex-col">
          <Animate class="w-full" initial="opacity-0 translate-y-10"
            final="opacity-100 translate-y-0" delay={100}>
            <ProjectCardBtn href={project.git} icon={AiFillGithub} />
          </Animate>
          <Animate class="w-full" initial="opacity-0" final="opacity-100" delay={200}>
            <ProjectCardBtn href={project.liveLink} icon={AiOutlineLink} />
          </Animate>
        </div>
      </div>
    </div>
  );
}

function ProjectCardBtn(props: { href: string, icon: IconTypes }) {
  return (
    <a class="daisy-btn border-none w-full rounded-xl bg-[#18181a] group
      hover:bg-[#272729]"
      href={props.href} target="_blank">
      <props.icon size={24} class="group-hover:scale-105 group-hover:fill-orange-200 
        transition-all duration-300" />
    </a >
  );
}
