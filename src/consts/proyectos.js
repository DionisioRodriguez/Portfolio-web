import CSS from "@icons/Css.astro"
import Tailwind from "@icons/Tailwind.astro"
import HTML from "@icons/Html.astro"
import Astro from "@icons/Astro.astro"
import JavaScript from "@icons/JavaScript.astro"

const TAGS = {
  HTML: {
    name: "HTML",
    icon: HTML,
    class: "bg-amber-600/50 text-white"
  },
  CSS: {
    name: "CSS",
    icon: CSS,
    class: "bg-blue-700/70 text-white"
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: Tailwind,
    class: "bg-sky-500/80 text-white"
  },
  ASTRO: {
    name: "Astro",
    icon: Astro,
    class: "bg-black/75 text-white"
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: JavaScript,
    class: "bg-yellow-300/50 text-white"
  }
}

export const PROYECTOS = [
  {
    tituloProyecto: "DR-carshop - E-commerce",
    descripcion: "Es una tienda basada en los productos de la marca Toxic Shine. Fue parte de la entrega final del curso de JavaScript y Actualmente es mi web personal para la venta de productos.",
    img: "../proyectos/dr-carshop.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    github: "https://github.com/DionisioRodriguez/DR-carshop",
    link: "https://github.com/DionisioRodriguez/DR-carshop",
    class: "bg-linear-to-br from-neutral-500 to-gray-600"
  },
  {
    tituloProyecto: "DR-carshop - E-commerce",
    descripcion: "Es una tienda basada en los productos de la marca TOXIC SHINE, fue parte de la entrega final del curso de JavaScript y Actualmente es mi web personal para la venta de mis productos.",
    img: "../proyectos/dr-carshop.webp",
    tags: [TAGS.HTML, TAGS.CSS, TAGS.JAVASCRIPT],
    github: "https://github.com/DionisioRodriguez/DR-carshop",
    link: "https://github.com/DionisioRodriguez/DR-carshop"
  },
]