export const homepageQuery = `*[_type == "homepage"][0]{
  hero,
  services,
  about,
  testimonials[]->{
    _id,
    name,
    company,
    image,
    quote
  },
  caseStudies[]->{
    _id,
    title,
    description,
    image,
    results
  },
  pricing,
  cta
}`;

export const servicesQuery = `*[_type == "service"]{
  _id,
  title,
  description,
  icon,
  benefits,
  process
}`;

export const testimonialsQuery = `*[_type == "testimonial"]{
  _id,
  name,
  company,
  image,
  quote
}`;

export const caseStudiesQuery = `*[_type == "caseStudy"]{
  _id,
  title,
  description,
  image,
  results
}`;
