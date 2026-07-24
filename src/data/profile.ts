export const profile = {
  name: 'Minahil Fatima',
  title: 'Senior Textile Designer',
  location: 'Lahore, Punjab, Pakistan',
  email: 'malikminahi@gmail.com',
  phone: '+92 322 5602965',
  linkedin: '',
  summary:
    'Creative and detail-oriented textile designer with hands-on experience in digital textile design, pattern development, and colorway creation for fashion and textile brands. Specializing in ethnic, floral, abstract, and fashion-forward print collections that move cleanly from concept to production.',
  about:
    'Minahil Fatima is a textile designer focused on digital print development, seamless repeat construction, and commercially relevant colorway exploration. Her portfolio highlights original textile artwork, refined production-ready layouts, and disciplined surface pattern work supported by CAD and Photoshop-based workflows.',
  philosophy:
    'The design approach balances creative expression with market relevance, with emphasis on repeat clarity, fabric suitability, and clean handoff to production teams.',
  specialties: [
    'Digital textile design',
    'Pattern and repeat development',
    'Colorway and print variation creation',
    'Fabric design and development',
    'Textile illustration',
    'Traditional fine art applications',
  ],
  goals:
    'To contribute to international textile and fashion teams where strong trend awareness, production accuracy, and a polished design sensibility are essential.',
  experience: [
    {
      company: 'Great Yumi Textile',
      role: 'Textile Designer',
      duration: '1 Year 5 Months',
      contributions: [
        'Developed innovative textile print collections aligned with seasonal market trends.',
        'Created seamless repeat patterns for a range of fabric applications.',
        'Designed ethnic, floral, abstract, and fashion-forward prints.',
        'Prepared colorways and print variations for buyer approval.',
      ],
      responsibilities: [
        'Coordinated closely with production teams to maintain design-to-production accuracy.',
        'Monitored market trends to keep collections commercially competitive.',
        'Managed artwork refinement and final output for presentation and approval.',
      ],
    },
    {
      company: 'AL-RIYAZ Textile',
      role: 'Textile Designer',
      duration: '2 Years',
      contributions: [
        'Created digital textile designs using Photoshop and CAD software.',
        'Developed repeat patterns for commercial print collections.',
        'Produced multiple colorway and print variations per design.',
        'Conducted market trend research to inform new collections.',
      ],
      responsibilities: [
        'Collaborated with buyers and production teams on design specifications.',
        'Maintained design consistency across seasonal development cycles.',
        'Supported the translation of concepts into market-ready textile artwork.',
      ],
    },
    {
      company: 'RADO Textile',
      role: 'Textile Designer',
      duration: '8 Months',
      contributions: [
        'Developed digital print collections for seasonal releases.',
        'Designed textile repeats across multiple fabric categories.',
        'Edited and refined artwork using Adobe Photoshop.',
        'Prepared production-ready design files.',
      ],
      responsibilities: [
        'Assisted senior designers on seasonal collection development.',
        'Ensured artwork conformed to handoff standards and production needs.',
        'Supported rapid design iteration for buyer and internal review.',
      ],
    },
    {
      company: 'MAA Textile',
      role: 'Textile Designer',
      duration: '5 Months',
      contributions: [
        'Assisted senior designers with print and pattern development.',
        'Created original textile motifs and repeat layouts.',
        'Modified and refreshed existing print collections.',
        'Prepared finalized artwork for production handoff.',
      ],
      responsibilities: [
        'Supported artwork organization and preparation under senior direction.',
        'Maintained consistency between creative development and output files.',
        'Contributed to the refinement of existing commercial print ranges.',
      ],
    },
    {
      company: 'Sitara Textile Mills Ltd',
      role: 'Textile Design Intern',
      duration: '06 Months · Faisalabad, Pakistan',
      contributions: [
        'Assisted in textile production processes and workflow coordination.',
        'Learned industrial textile printing techniques and standards.',
        'Supported fabric quality inspection procedures.',
      ],
      responsibilities: [
        'Worked alongside senior designers on textile development projects.',
        'Built familiarity with industrial production environments.',
        'Observed and supported handoff and inspection procedures.',
      ],
    },
    {
      company: 'Opera Textile Pvt Ltd',
      role: 'Textile Design Intern',
      duration: '06 Months · Lahore, Pakistan',
      contributions: [
        'Assisted with textile print development and design revisions.',
        'Performed Photoshop-based textile editing and artwork preparation.',
        'Created repeat designs for review by senior designers.',
      ],
      responsibilities: [
        'Learned production preparation and file-handoff processes.',
        'Contributed to practical design revisions under supervision.',
        'Strengthened foundational digital textile workflow skills.',
      ],
    },
  ],
  education: [
    {
      school: 'University of Sargodha',
      degree: 'BS Textile Designing',
      duration: 'Punjab, Pakistan',
    },
    {
      school: 'Punjab Group of Colleges',
      degree: 'Intermediate (Pre-Medical)',
      duration: 'Punjab, Pakistan',
    },
  ],
  skills: {
    'Textile Design': ['Digital textile design', 'Fabric development', 'Textile illustration'],
    'Surface Pattern Design': ['Pattern development', 'Repeat layouts', 'Motif composition'],
    'Repeat Development': ['Seamless repeats', 'Production-ready files', 'Category adaptation'],
    'Colorway Development': ['Print variations', 'Buyer options', 'Color exploration'],
    'Market Research': ['Trend analysis', 'Commercial awareness', 'Seasonal direction'],
    'Traditional Fine Art': ['Embroidery', 'Painting', 'Hand-drawn motif studies'],
  },
  software: ['Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'CAD Design Software', 'Microsoft Excel'],
  socialLinks: [] as { label: string; href: string }[],
  cvDownloadHref: '/Minahil_Fatima_CV.pdf',
};

export type ExperienceEntry = (typeof profile.experience)[number];