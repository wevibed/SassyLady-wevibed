import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { productEnquiryLink } from "@/lib/site";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const sold = product.availability === "Sold Out";
  const low = product.availability === "Low Stock";

  return (
    <div onClick={() => navigate(`/product/${product.id}`)} className="group cursor-pointer">
      <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
        <Image
          src={product.image_url}
          alt={product.name}
          fittingType="fill"
          className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {product.image_url_2 && (
          <Image
            src={product.image_url_2}
            alt=""
            fittingType="fill"
            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          />
        )}
        {(sold || low) && (
          <div className="absolute top-3 left-3 text-xs font-medium rounded-full bg-foreground text-background px-3 py-1">
            {sold ? "Sold out" : "Low stock"}
          </div>
        )}
        {!sold && (
          <a
            href={productEnquiryLink(product)}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 focus-visible:translate-y-0 transition-transform duration-300 bg-foreground text-background px-4 py-3 flex items-center justify-center gap-2 text-sm"
          >
            <MessageCircle className="w-4 h-4" /> Ask about this pair
          </a>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-heading text-xl leading-tight">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        </div>
        <div className={`font-heading text-xl whitespace-nowrap ${sold ? "text-muted-foreground line-through" : ""}`}>
          {product.price > 0 ? `$${product.price}` : "Ask in-store"}
        </div>
      </div>
      {product.sizes?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.sizes.map((s) => (
            <span key={s} className="text-xs rounded-full border border-border px-2 py-0.5 text-muted-foreground">{s}</span>
          ))}
        </div>
      )}
    </div>
  );
}
