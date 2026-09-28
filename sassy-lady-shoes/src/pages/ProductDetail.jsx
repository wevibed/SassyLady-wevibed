import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MessageCircle, ArrowLeft } from "lucide-react";
import { Image } from "@/components/ui/image";
import { Product } from "@/data/products";
import { productEnquiryLink } from "@/lib/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [size, setSize] = useState(null);

  useEffect(() => {
    setLoading(true);
    Product.get(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-4xl mx-auto px-5 py-32">
          <div className="aspect-[4/5] bg-stone animate-pulse max-w-md" />
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-2xl mx-auto px-5 py-32 text-center">
          <p className="font-heading text-3xl">Piece not found.</p>
          <Link to="/" className="mt-6 inline-block text-[11px] tracking-wide-luxe uppercase border-b border-foreground pb-1">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const sold = product.availability === "Sold Out";
  const images = [product.image_url, product.image_url_2].filter(Boolean);
  const dotColor = sold ? "bg-muted-foreground" : product.availability === "Low Stock" ? "bg-accent" : "bg-foreground";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-[1400px] mx-auto px-5 md:px-10 py-8 md:py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase text-muted-foreground hover:text-foreground mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
        </Link>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="space-y-3">
            {images.map((src, i) => (
              <div key={i} className="aspect-[4/5] bg-stone overflow-hidden">
                <Image src={src} alt={product.name} fittingType="fill" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="md:sticky md:top-28 md:self-start">
            <div className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground">{product.category}</div>
            <h1 className="font-heading text-4xl md:text-5xl mt-2">{product.name}</h1>
            <div className="mt-4 text-2xl">
              ${product.price} <span className="text-sm text-muted-foreground">{product.currency}</span>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] tracking-wide-luxe uppercase">
              <span className={`inline-block w-2 h-2 rounded-full ${dotColor}`} />
              {product.availability}
            </div>

            {product.description && (
              <p className="mt-6 text-muted-foreground leading-relaxed">{product.description}</p>
            )}

            {product.sizes?.length > 0 && (
              <div className="mt-8">
                <div className="text-[11px] tracking-wide-luxe uppercase text-muted-foreground mb-3">Select Size</div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`min-w-[3rem] px-3 py-2.5 text-sm border transition-colors ${
                        size === s
                          ? "border-foreground bg-foreground text-background"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {sold ? (
              <div className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 text-[11px] tracking-wide-luxe uppercase bg-stone text-muted-foreground">
                <MessageCircle className="w-4 h-4" /> Currently Sold Out
              </div>
            ) : (
              <a
                href={productEnquiryLink(product, size)}
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full flex items-center justify-center gap-2 px-6 py-4 text-[11px] tracking-wide-luxe uppercase bg-foreground text-background hover:bg-accent hover:text-foreground transition-colors"
              >
                <MessageCircle className="w-4 h-4" /> Enquire on WhatsApp
              </a>
            )}
            {!sold && (
              <p className="mt-3 text-xs text-muted-foreground text-center">
                No account needed — we'll confirm availability at the Eastgate Centre stall.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}