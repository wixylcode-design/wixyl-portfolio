
import { Container } from "@/components/container";

const swatches = [
  { name: "Brand", classes: "bg-brand" },
  { name: "Action", classes: "bg-action" },
  { name: "Foreground", classes: "bg-foreground" },
  { name: "Surface", classes: "bg-surface border border-foreground/20" },
];

export default function Home() {
  return (
    <main className="py-16">
      <Container>

        <p className="text-sm font-semibold uppercase tracking-widest text-accent">
          Token preview
        </p>

       
        <h1 className="mt-3 text-4xl font-bold leading-tight md:text-6xl">
          I design brands and build the software behind them.
        </h1>
        <p className="mt-5 max-w-xl text-muted">
          Fast, responsive websites and apps that make businesses look as good
          as they work.
        </p>

        
        <div className="mt-8 flex flex-wrap gap-3">
          
          <a
            href="#"
            className="rounded-xl bg-action px-6 py-3 font-semibold text-white"
          >
            Hire me
          </a>
          
          <a
            href="#"
            className="rounded-xl border-2 border-brand px-6 py-3 font-semibold"
          >
            View projects
          </a>
        </div>

        {/* Responsive grid: 1 column on phones, 2 from "sm", 4 from "lg" */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        
          {swatches.map((s) => (
            <div key={s.name} className="rounded-2xl bg-surface p-4">
              {/* The colored sample box */}
              <div className={`h-20 rounded-xl ${s.classes}`} />
              <p className="mt-3 font-semibold">{s.name}</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}