import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { blogArticles } from "@/lib/blog-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog - VoltAuto Dépannage | Conseils et astuces automobile",
  description: "Découvrez nos articles sur le dépannage automobile, l'entretien de vos pneus et batteries, et tous nos conseils pour prendre soin de votre véhicule à St-Étienne.",
};

export default function BlogPage() {
  const categories = [...new Set(blogArticles.map(a => a.category))];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Blog VoltAuto
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Conseils et astuces automobile
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Retrouvez tous nos articles pour entretenir votre véhicule, comprendre les pannes courantes et savoir réagir en cas d&apos;urgence.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant="outline" 
                className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-[#0077ff] transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {new Date(article.date).toLocaleDateString('fr-FR', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="mt-4 flex items-center text-[#0077ff] text-sm font-medium group-hover:gap-2 transition-all">
                      Lire l&apos;article
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0077ff]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Besoin d&apos;un dépannage ?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe intervient 24h/24 à St-Étienne et ses alentours pour tous vos problèmes de pneus et batteries.
          </p>
          <a 
            href="tel:+41779696962"
            className="inline-flex items-center gap-2 bg-white text-[#0077ff] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Appelez le +41 77 969 69 62
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
