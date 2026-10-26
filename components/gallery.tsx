const images = [
  {
    src: "/hotel/03.jpg",
    alt: "Spacious capsule pod interior with built-in TV",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/hotel/07.jpg",
    alt: "Capsule pod with personal TV and reading light",
    span: "",
  },
  {
    src: "/hotel/05.jpg",
    alt: "Lobby with stacked capsule pods and lockers",
    span: "",
  },
  {
    src: "/hotel/02.jpg",
    alt: "Futuristic capsule pod with control panel",
    span: "",
  },
  {
    src: "/hotel/04.jpg",
    alt: "Bright shared lounge with bar seating",
    span: "",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Take a look around
          </p>
          <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            Inside Happy Lounge
          </h2>
        </div>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[200px]">
          {images.map((img) => (
            <div
              key={img.src}
              className={`overflow-hidden rounded-2xl ${img.span}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
