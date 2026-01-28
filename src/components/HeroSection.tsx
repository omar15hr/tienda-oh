import { Breadcrumbs } from "./ui/BreadCrumbs";

interface Props {
  title: string;
  description: string;
}

export default function HeroSection({ title }: Props) {
  return (
    <main className="max-w-7xl px-6">
      <Breadcrumbs />
      <section className="z-20 flex flex-col items-center justify-center gap-4 text-center sm:gap-6">
        <h1 className="text-6xl font-bold font-montserrat">
          {title}
        </h1>
      </section>
    </main>
  );
}
