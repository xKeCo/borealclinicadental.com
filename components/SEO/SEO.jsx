// Next
import Head from "next/head";

export function SEO({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Sitio web oficial de Boreal Clinica Dental"
        />
        <link rel="icon" href="/Logo/logo.png" />
      </Head>
    </div>
  );
}
