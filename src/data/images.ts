type PortfolioFolderKey = 'originals' | 'technical';

export type PortfolioImage = {
  id: string;
  src: string;
  title: string;
  alt: string;
  folderKey: PortfolioFolderKey;
  folderLabel: string;
  collection: string;
  tags: string[];
  sourceName: string;
};

type FolderConfig = {
  key: PortfolioFolderKey;
  folderLabel: string;
  collection: string;
  intro: string;
  tags: string[];
};

const fallbackSvg = encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1600" role="img" aria-label="Textile portfolio placeholder">
    <rect width="1200" height="1600" fill="#f3ede4"/>
    <rect x="80" y="80" width="1040" height="1440" rx="48" fill="#ffffff" fill-opacity="0.62" stroke="#d7c6af" stroke-width="4"/>
    <text x="600" y="770" text-anchor="middle" font-family="Georgia, serif" font-size="62" fill="#2a2522">Image unavailable</text>
    <text x="600" y="845" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="28" letter-spacing="6" fill="#8b7a66">MINAHIL FATIMA</text>
  </svg>
`);

export const fallbackPortfolioImage: PortfolioImage = {
  id: 'fallback-image',
  src: `data:image/svg+xml;charset=UTF-8,${fallbackSvg}`,
  title: 'Placeholder Image',
  alt: 'Placeholder textile image',
  folderKey: 'originals',
  folderLabel: 'My Creations',
  collection: 'My Creations',
  tags: ['Fallback', 'Missing asset'],
  sourceName: 'fallback',
};

const folderConfig: Record<PortfolioFolderKey, FolderConfig> = {
  originals: {
    key: 'originals',
    folderLabel: 'My Creations',
    collection: 'My Creations',
    intro: 'Original textile designs presented as a clean, premium portfolio body of work.',
    tags: ['Original', 'Textile Design', 'Creative Work'],
  },
  technical: {
    key: 'technical',
    folderLabel: 'Replicas',
    collection: 'Technical Studies & Replica Work',
    intro: 'Pattern recreation studies separated from original artwork to preserve authorship clarity.',
    tags: ['Technical', 'Study', 'Replica'],
  },
};

const originalModulesLower = import.meta.glob<{ default: string }>(['../../my creations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});
const originalModulesExact = import.meta.glob<{ default: string }>(['../../My Creations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});
const originalModulesDesigns = import.meta.glob<{ default: string }>(['../../Designs/My Creations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});
const technicalModulesLower = import.meta.glob<{ default: string }>(['../../replicas/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});
const technicalModulesExact = import.meta.glob<{ default: string }>(['../../Replicas/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});
const technicalModulesDesigns = import.meta.glob<{ default: string }>(['../../Designs/Replicas/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});

const mergeModules = (...modulesList: Array<Record<string, { default: string }>>) => {
  const combined = new Map<string, { default: string }>();

  modulesList.forEach((modules) => {
    Object.entries(modules).forEach(([path, asset]) => {
      combined.set(path, asset);
    });
  });

  return Object.fromEntries(combined);
};

const originalModules = mergeModules(originalModulesLower, originalModulesExact, originalModulesDesigns);
const technicalModules = mergeModules(technicalModulesLower, technicalModulesExact, technicalModulesDesigns);

const naturalSort = (left: string, right: string) =>
  left.localeCompare(right, undefined, { numeric: true, sensitivity: 'base' });

const buildEntries = (folderKey: PortfolioFolderKey, modules: Record<string, { default: string }>): PortfolioImage[] => {
  const config = folderConfig[folderKey];

  return Object.entries(modules)
    .sort(([left], [right]) => naturalSort(left, right))
    .map(([sourcePath, module], index) => {
      const sourceName = sourcePath.split('/').pop()?.replace(/\.[^.]+$/, '') ?? `image-${index + 1}`;
      return {
        id: `${folderKey}-${index + 1}`,
        src: module.default,
        title: sourceName,
        alt: `${config.folderLabel} textile design ${index + 1}`,
        folderKey,
        folderLabel: config.folderLabel,
        collection: config.collection,
        tags: config.tags,
        sourceName,
      };
    });
};

const originalPortfolioImages = buildEntries('originals', originalModules);
const technicalPortfolioImages = buildEntries('technical', technicalModules);

export const portfolioImages: PortfolioImage[] = [...originalPortfolioImages, ...technicalPortfolioImages];

if (portfolioImages.length === 0) {
  console.warn('[TextilePortfolio] No portfolio images were found. Using fallback placeholder content.');
}

if (originalPortfolioImages.length === 0) {
  console.warn('[TextilePortfolio] No My Creations images were found. Check the folder path and filenames.');
}

if (technicalPortfolioImages.length === 0) {
  console.warn('[TextilePortfolio] No Replicas images were found. Check the folder path and filenames.');
}

export const heroImage =
  portfolioImages.find((image) => image.folderKey === 'originals' && image.sourceName === 'Design (54)') ??
  portfolioImages.find((image) => image.folderKey === 'originals') ??
  portfolioImages[0] ??
  fallbackPortfolioImage;

export const originalCollection = {
  key: 'originals',
  title: folderConfig.originals.collection,
  description: folderConfig.originals.intro,
  images: portfolioImages.filter((image) => image.folderKey === 'originals'),
};

export const technicalCollection = {
  key: 'technical',
  title: folderConfig.technical.collection,
  description: folderConfig.technical.intro,
  images: portfolioImages.filter((image) => image.folderKey === 'technical'),
};

export const portfolioCollections = [originalCollection, technicalCollection];

export const groupedImages = portfolioImages.reduce<Record<PortfolioFolderKey, PortfolioImage[]>>(
  (groups, image) => {
    groups[image.folderKey].push(image);
    return groups;
  },
  { originals: [], technical: [] },
);