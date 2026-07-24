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

const originalModules = import.meta.glob<{ default: string }>(['../../my creations/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});
const technicalModules = import.meta.glob<{ default: string }>(['../../replicas/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}'], {
  eager: true,
});

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

export const portfolioImages: PortfolioImage[] = [
  ...buildEntries('originals', originalModules),
  ...buildEntries('technical', technicalModules),
];

export const heroImage =
  portfolioImages.find((image) => image.folderKey === 'originals' && image.sourceName === 'Design (54)') ??
  portfolioImages.find((image) => image.folderKey === 'originals') ??
  portfolioImages[0];

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