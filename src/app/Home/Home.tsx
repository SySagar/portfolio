import { Helmet } from "react-helmet-async";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <Helmet>
        <title>Soumya Sagar | Home</title>
        <meta name="description" content="Soumya Sagar's Portfolio" />
        <meta
          name="keywords"
          content="Soumya Sagar, Sagar, Portfolio, Software Developer, India"
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <p className="text-2xl">Home</p>
    </div>
  );
}
