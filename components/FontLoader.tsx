'use client'

import { useEffect } from 'react'

export default function FontLoader() {
  useEffect(() => {
    // Check if fonts are already loaded
    if (document.querySelector('link[href*="fonts.googleapis.com"]')) {
      return
    }

    // Create font link elements with optimized loading
    const fontLink = document.createElement('link')
    fontLink.rel = 'stylesheet'
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
    fontLink.media = 'print'
    fontLink.onload = () => {
      fontLink.media = 'all'
    }
    
    // Add error handling
    fontLink.onerror = () => {
      console.warn('Failed to load Google Fonts, using system fallbacks')
    }
    
    document.head.appendChild(fontLink)
    
    // Preload critical font files
    const preloadInter = document.createElement('link')
    preloadInter.rel = 'preload'
    preloadInter.href = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
    preloadInter.as = 'font'
    preloadInter.type = 'font/woff2'
    preloadInter.crossOrigin = 'anonymous'
    
    const preloadPlayfair = document.createElement('link')
    preloadPlayfair.rel = 'preload'
    preloadPlayfair.href = 'https://fonts.gstatic.com/s/playfairdisplay/v36/nuFiD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDYbtXK-F2qO0isEw.woff2'
    preloadPlayfair.as = 'font'
    preloadPlayfair.type = 'font/woff2'
    preloadPlayfair.crossOrigin = 'anonymous'
    
    document.head.appendChild(preloadInter)
    document.head.appendChild(preloadPlayfair)
    
    return () => {
      if (document.head.contains(fontLink)) {
        document.head.removeChild(fontLink)
      }
      if (document.head.contains(preloadInter)) {
        document.head.removeChild(preloadInter)
      }
      if (document.head.contains(preloadPlayfair)) {
        document.head.removeChild(preloadPlayfair)
      }
    }
  }, [])

  return null
}
