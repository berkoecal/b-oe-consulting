import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/content/articles";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("de-CH", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

const categoryColors: Record<string, string> = {
  "Data Strategy": "text-violet-400 bg-violet-400/10 border-violet-400/20",
  "Artificial Intelligence": "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  "Cloud Platforms": "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

export async function generateStaticParams() {
  const locales = ["de", "en"];
  return locales.flatMap((locale) =>
    articles.map((article) => ({ locale, slug: article.slug }))
  );
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const colorClass = categoryColors[article.category] || "text-gray-400 bg-white/5 border-white/10";

  return (
    <main className="relative min-h-screen bg-background text-foreground pt-36 pb-24 overflow-hidden">
      {/* Soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />

      <article className="container mx-auto px-6 max-w-3xl relative z-10">
        {/* Back link */}
        <Link
          href={`/${locale}/news`}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-primary-400 transition-colors mb-12 uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle Beiträge
        </Link>

        {/* Category */}
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border mb-6 ${colorClass}`}>
          {article.category}
        </span>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-4">
          {article.title}
        </h1>

        {/* Subtitle */}
        <p className="text-xl text-primary-400/80 font-medium mb-8 leading-relaxed">
          {article.subtitle}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-6 text-sm text-gray-500 mb-12 pb-8 border-b border-white/[0.07]">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formatDate(article.date)}
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {article.readTime} Min. Lesezeit
          </span>
          <span className="text-gray-600">Berk Öcal · Helvata Consulting</span>
        </div>

        {/* Body — rendered as HTML */}
        <div
          className="prose-article"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Back to all */}
        <div className="mt-20 pt-10 border-t border-white/[0.07]">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-primary-500/40 hover:text-primary-400 text-gray-400 rounded-sm text-sm font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Alle Beiträge
          </Link>
        </div>
      </article>
    </main>
  );
}
