import Link from "next/link";
import React from "react";

const notFound = () => {
  return (
    <main className='text-center h-[50vh]'>
      <h2>
        Bienvenue sur notre site en pleine métamorphose ! Nous sommes
        actuellement en train de construire quelque chose d&apos;extraordinaire,
        et vous avez rencontré notre page en chantier.
      </h2>
      <p className="flex gap-2">
        retournez à la
        <Link href={"/"} className='underline'>
          <li>page d&apos;accueil</li>
        </Link>
      </p>
    </main>
  );
};

export default notFound;
