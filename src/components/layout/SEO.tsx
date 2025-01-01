import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function SEO({ 
  title = 'Esports League Nepal',
  description = 'Join Esports League Nepal for thrilling gaming tournaments and events. Connect with Nepal\'s esports community and showcase your competitive gaming skills.',
  image = '/Public/Images/logo.png',
  url = 'https://www.eslnnepal.com'
}: SEOProps) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Esports League Nepal",
          "url": url,
          "logo": image,
          "description": description,
          "sameAs": [
            "https://www.facebook.com/people/Esports-League-Nepal/61568314285888/",
            "https://www.instagram.com/esln.2024/",
            "https://www.youtube.com/channel/UC7C1uYr_yinSR6IgxVKeYxw"
          ]
        })}
      </script>
    </Helmet>
  );
}