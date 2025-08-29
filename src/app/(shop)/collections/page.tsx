import Link from "next/link";
import Image from "next/image";

const collections = [
  {
    name: "Season 9",
    slug: "s-9",
    imageUrl: "/img/collections/collection-09/thumbnail/PCS Cover Facebook 1.jpg",
    description: "Season 9 exclusive drop",
  },
  {
    name: "Season 8",
    slug: "s-8",
    imageUrl: "/img/collections/collection-08/lifestyle/PCS 0975.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 7",
    slug: "s-7",
    imageUrl: "/img/collections/collection-07/lifestyle/_MEN4209.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 6",
    slug: "s-6",
    imageUrl: "/img/collections/collection-06/lifestyle/MEN_0085.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 5",
    slug: "s-5",
    imageUrl: "/img/collections/collection-05/lifestyle/NAN09992.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 4",
    slug: "s-4",
    imageUrl: "/img/collections/collection-04/lifestyle/8R5A5034.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 3",
    slug: "s-3",
    imageUrl: "/img/collections/collection-03/lifestyle/IMG_4001.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 2",
    slug: "s-2",
    imageUrl: "/img/collections/collection-02/mockups/PCS Front White.jpg",
    description: "Season 10 exclusive drop",
  },
  {
    name: "Season 1",
    slug: "s-1",
    imageUrl: "/img/collections/collection-01/lifestyle/_DSC1660.jpg",
    description: "Season 10 exclusive drop",
  },
];

export default function CollectionsPage() {
  return (
    <main className="max-w-[120rem] mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-10 text-center">Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map(({ name, slug, imageUrl, description }) => (
          <Link
            key={slug}
            href={`/collections/${slug}`}
            className="group relative block overflow-hidden shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            aria-label={`View collection ${name}`}
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={name}
                fill
                className="contrast-110 brightness-90 saturate-60 object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h2 className="text-xl font-bold">{name}</h2>
                {description && (
                  <p className="mt-1 text-sm opacity-90">{description}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>


  );
}
