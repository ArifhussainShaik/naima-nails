'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function Analytics() {
  useReportWebVitals((metric) => {
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      switch (metric.name) {
        case 'FCP':
          // First Contentful Paint
          console.log('FCP:', metric.value)
          break
        case 'LCP':
          // Largest Contentful Paint
          console.log('LCP:', metric.value)
          break
        case 'CLS':
          // Cumulative Layout Shift
          console.log('CLS:', metric.value)
          break
        case 'FID':
          // First Input Delay
          console.log('FID:', metric.value)
          break
        case 'TTFB':
          // Time to First Byte
          console.log('TTFB:', metric.value)
          break
        default:
          break
      }

      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }
    }
  })

  return null
}
