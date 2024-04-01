import Head from 'next/head';

export default function PageHeadElement({ pageTitle, faviconUrl }: { pageTitle: string, faviconUrl: string }) {
  return (
    <Head>
      <link rel="icon" type="image/x-icon" href={faviconUrl} />
      <title>{ pageTitle }</title>
    </Head>
  );
}
