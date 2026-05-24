import Script from 'next/script';

type WebApplicationSchema = {
  '@context': 'https://schema.org';
  '@type': 'WebApplication';
  name: string;
  applicationCategory: 'MultimediaApplication';
  operatingSystem: 'Any';
  offers: {
    '@type': 'Offer';
    price: '0';
    priceCurrency: 'USD';
  };
  description: string;
  url: string;
  image?: string;
  author?: {
    '@type': 'Organization' | 'Person';
    name: string;
    url?: string;
  };
  featureList?: string[];
};

type OrganizationSchema = {
  '@context': 'https://schema.org';
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  sameAs?: string[];
  contactPoint?: {
    '@type': 'ContactPoint';
    contactType: string;
    email?: string;
  };
};

type BreadcrumbSchema = {
  '@context': 'https://schema.org';
  '@type': 'BreadcrumbList';
  itemListElement: Array<{
    '@type': 'ListItem';
    position: number;
    name: string;
    item?: string;
  }>;
};

type StructuredDataProps = {
  data: WebApplicationSchema | OrganizationSchema | BreadcrumbSchema | Record<string, unknown>;
};

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="beforeInteractive"
    />
  );
}

export function generateWebAppSchema(locale: string): WebApplicationSchema {
  const baseUrl = 'https://openvid.dev';

  const content: Record<string, {name: string, description: string, features: string[]}> = {
    es: {
      name: 'openvid - Editor de Video Online',
      description: 'Editor de video online gratuito con IA.',
      features: [],
    },
    en: {
      name: 'openvid - Online Video Editor',
      description: 'Free AI-powered online video editor.',
      features: [],
    },
    zh: {
      name: 'openvid - 在线视频编辑器',
      description: '免费的AI驱动在线视频编辑器。屏幕录制，电影级缩放，专业模型，无水印高清导出。',
      features: ['高清屏幕录制', 'AI电影级缩放', '专业设备模型', '无水印', '高质量导出', '免费在线编辑器'],
    },
  };

  const currentContent = content[locale] || content.zh;
  const { name, description, features } = currentContent;

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description,
    url: baseUrl,
    image: `${baseUrl}/images/metadata/preview-openvid.jpg`,
    author: {
      '@type': 'Person',
      name: 'Cristian Olivera',
      url: baseUrl,
    },
    featureList: features,
  };
}

export function generateOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'openvid',
    url: 'https://openvid.dev',
    logo: 'https://openvid.dev/images/metadata/favicon.svg',
    sameAs: [
      'https://twitter.com/openviddev',
      'https://github.com/openviddev',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'support@openvid.dev',
    },
  };
}
