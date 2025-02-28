export const metadata = {
  title: "Social Launch Labs | Build Your Brand Authority",
  description: "We help businesses scale with premium video marketing and AI-powered workflows.",
};

import Hero from '../components/Hero';
import Layout from '../components/Layout';

const mockHeroData = {
  title: "Build Your Brand Authority with Strategic Video",
  description: "We help businesses scale with premium video marketing and AI-powered workflows. Our tailored strategies ensure you stand out and drive results.",
  primaryButton: {
    text: "Get a Free Consultation",
    link: "/contact",
  },
  secondaryButton: {
    text: "Explore",
    link: "/services",
  },
};

export default function Home() {
  return (
    <Layout>
      <section className="container mx-auto px-5 py-16 md:py-24 lg:py-28">
        <Hero 
          title={mockHeroData.title}
          description={mockHeroData.description}
          primaryButton={mockHeroData.primaryButton}
          secondaryButton={mockHeroData.secondaryButton}
        />
      </section>
    </Layout>
  );
}
