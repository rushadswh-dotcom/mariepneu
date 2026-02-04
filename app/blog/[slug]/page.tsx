import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogArticles, getArticleBySlug } from "@/lib/blog-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowLeft, Phone } from "lucide-react";

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: "Article non trouvé - VoltAuto",
    };
  }

  return {
    title: `${article.title} - VoltAuto Dépannage St-Étienne`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles from same category
  const relatedArticles = blogArticles
    .filter(a => a.category === article.category && a.slug !== article.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au blog
          </Link>

          <Badge variant="secondary" className="mb-4">
            {article.category}
          </Badge>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-balance">
            {article.title}
          </h1>
          
          <div className="mt-6 flex items-center gap-4 text-gray-500">
            <span>
              {new Date(article.date).toLocaleDateString('fr-FR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {article.readTime} de lecture
            </span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-a:text-[#0077ff] prose-a:no-underline hover:prose-a:underline"
          >
            {article.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-900">{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-xl font-semibold mt-6 mb-3 text-gray-900">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('- ')) {
                return <li key={index} className="text-gray-600 ml-4">{paragraph.replace('- ', '')}</li>;
              }
              if (paragraph.startsWith('| ')) {
                return null; // Skip table formatting for simplicity
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return <p key={index} className="font-semibold text-gray-900 my-4">{paragraph.replace(/\*\*/g, '')}</p>;
              }
              if (paragraph.trim() === '') {
                return null;
              }
              return <p key={index} className="text-gray-600 my-4 leading-relaxed">{paragraph}</p>;
            })}
          </div>

          {/* CTA Box */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#0077ff] to-[#0066dd] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Besoin d&apos;une intervention ?</h3>
            <p className="text-blue-100 mb-6">
              Notre équipe est disponible 24h/24 à St-Étienne et ses alentours pour tous vos problèmes de pneus, batteries et diagnostic.
            </p>
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <a href="tel:+33768546529">
                <Phone className="h-5 w-5" />
                07 68 54 65 29
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articles similaires</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((relatedArticle) => (
                <Link 
                  key={relatedArticle.slug} 
                  href={`/blog/${relatedArticle.slug}`}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <Badge variant="secondary" className="text-xs mb-3">
                    {relatedArticle.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 hover:text-[#0077ff] transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
