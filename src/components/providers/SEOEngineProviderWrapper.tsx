'use client';

import React from 'react';
import { SEOEngineProvider } from '@/data/seo-engine-context';

export default function SEOEngineProviderWrapper({ children }: { children: React.ReactNode }) {
  return <SEOEngineProvider>{children}</SEOEngineProvider>;
}
