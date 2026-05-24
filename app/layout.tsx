import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://openvid.dev'),
  title: {
    default: "openvid - 制作专业的演示视频，在几秒内完成编辑",
    template: "%s | openvid",
  },
  description: "在几秒内制作电影级演示和编辑视频。添加平滑缩放、模型、自定义背景，并导出专业演示。",
  applicationName: "openvid",
  keywords: [
    "openvid",
    "视频编辑",
    "zoom video",
    "屏幕录制",
    "演示制作",
    "电影感运镜",
    "mockups",
    "Cristian Olivera",
  ],
  authors: [{ name: "Cristian Olivera" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://openvid.dev/",
  },
  icons: {
    icon: "/images/metadata/favicon.svg",
    shortcut: "/images/metadata/shortcut.svg",
    apple: "/images/metadata/apple.svg",
  },
  openGraph: {
    type: "website",
    url: "https://openvid.dev/",
    title: "openvid - Crea demos profesionales y edita en segundos",
    description:
      "Añade zooms suaves, mockups, personaliza fondos y exporta demos profesionales sin editores complejos.",
    images: [
      {
        url: "https://openvid.dev/images/metadata/preview-openvid.jpg",
        width: 1200,
        height: 630,
        alt: "openvid - Creador de demos, Graba Pantalla y Editor de Video",
      },
    ],
    locale: "es_ES",
    siteName: "openvid",
  },
  twitter: {
    card: "summary_large_image",
    title: "openvid - Crea demos profesionales y edita en segundos",
    description:
      "Añade zooms suaves, mockups, personaliza fondos y exporta demos profesionales sin editores complejos.",
    images: ["https://openvid.dev/images/metadata/preview-openvid.jpg"],
    creator: "@cristianolivera",
    site: "@openviddev",
  },
  other: {
    "msapplication-TileColor": "#1f2937",
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}