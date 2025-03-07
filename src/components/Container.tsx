export function Container(props: { children: any }) {
  return (
    <div class="container mx-auto max-w-6xl">
      {props.children}
    </div>
  );

}
