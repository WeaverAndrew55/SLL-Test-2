import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '../lib/sanity'

interface ButtonProps {
  text: string;
  link: string;
}

interface HeroProps {
  title: string;
  description?: string;
  image?: any;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

export default function Hero({ 
  title, 
  description, 
  image, 
  primaryButton, 
  secondaryButton 
}: HeroProps) {
  return (
    <section id="hero-section" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-10xl">
              {title}
            </h1>
            {description && (
              <p className="md:text-md">
                {description}
              </p>
            )}
            {(primaryButton || secondaryButton) && (
              <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
                {primaryButton && (
                  <Link href={primaryButton.link} className="inline-flex items-center justify-center rounded-md bg-primary-blue px-6 py-3 text-white transition-colors hover:bg-dark-blue">
                    {primaryButton.text}
                  </Link>
                )}
                {secondaryButton && (
                  <Link href={secondaryButton.link} className="inline-flex items-center justify-center rounded-md border border-primary-blue px-6 py-3 text-primary-blue transition-colors hover:bg-soft-blue/20">
                    {secondaryButton.text}
                  </Link>
                )}
              </div>
            )}
          </div>
          <div>
            {image && (
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image 
                  src={urlFor(image).url()}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}