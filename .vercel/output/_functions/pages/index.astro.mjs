import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderTransition } from '../chunks/astro/server_fH9AuEq-.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$Layout } from '../chunks/Layout_CmP__hHN.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const books = await getCollection("books");
  console.log(books);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Dev Books, libros para programadores bkns" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid place-items-center"> <h1 class="text-center text-7xl font-extrabold mb-24">
Dev 💻
<span class="block">Books</span> </h1> </main> <section aria-label="Libros recomendados para programadores"> <div class="px-4 mx-auto max-w-screen-xl"> <div class="grid gap-6 md:grid-cols-2"> ${books.map((book) => {
    const { slug, data } = book;
    const { title, author, img, readtime, description, buy } = data;
    return renderTemplate`<article class="flex"> <a${addAttribute(`/libro/${slug}`, "href")} class="mb-2 xl:mb-0 transition hover:scale-110"> <img class="mr-5 w-48 rounded"${addAttribute(`/${img}`, "src")}${addAttribute(title, "alt")}${addAttribute(renderTransition($$result2, "vfusj6vm", "", `img-${slug}`), "data-astro-transition-scope")}> </a> <div class="flex flex-col justify-center"> <h2 class="mb-2 text-2xl font-bold leading-tight text-black"${addAttribute(renderTransition($$result2, "mf7yhkup", "", `title-${title}`), "data-astro-transition-scope")}> ${title} </h2> <p class="mb-4 text-gray-800 max-w-sm">${description}</p> <span class="text-xs">⌛ Lectura en ${readtime} minutos</span> </div> </article>`;
  })} </div> </div> </section> ` })}`;
}, "D:/Progra/Youtube/Astro/Astro 5 - Server Islands - Midu/src/pages/index.astro", "self");

const $$file = "D:/Progra/Youtube/Astro/Astro 5 - Server Islands - Midu/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
