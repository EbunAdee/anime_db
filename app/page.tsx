import LoadMore from "../components/LoadMore";
import { fetchAnime } from "./action";

export async function Page(): Promise<JSX.Element> {
  const data = await fetchAnime(1);

  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore />
    </main>
  );
}

export default Page;

// import LoadMore from "../components/LoadMore";
// import { fetchAnime } from "./action";

// export async function Home() {
//   const data = await fetchAnime(1);

//   return (
//     <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
//       <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data}
//       </section>
//       <LoadMore />
//     </main>
//   );
// }

// export default Home;

// ========================================================================================================

// import LoadMore from "../components/LoadMore";
// import { fetchAnime } from "./action";

// export async function Home(): Promise<JSX.Element> {
//   const data = await fetchAnime(1);

//   return (
//     <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
//       <h2 className="text-3xl text-white font-bold">Explore Anime</h2>

//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data}
//       </section>
//       <LoadMore />
//     </main>
//   );
// }

// export default Home;

// ========================================================================================================

// import LoadMore from "../components/LoadMore";
// import { fetchMovies } from "./action";

// export async function Home() {
//   const data = await fetchMovies(1);

//   return (
//     <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
//       <h2 className="text-3xl text-white font-bold">Explore Disney Movies</h2>

//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data}
//       </section>
//       <LoadMore />
//     </main>
//   );
// }

// export default Home;

// ========================================================================================================

// import LoadMore from "../components/LoadMore";
// import { fetchAnime } from "./action";

// export async function Home() {
//   const data = await fetchAnime(1);

//   return (
//     <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
//       <h2 className="text-3xl text-white font-bold">
//         Explore Disney Characters
//       </h2>

//       <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
//         {data}
//       </section>
//       <LoadMore />
//     </main>
//   );
// }

// export default Home;

