"use client"

import { useState, useEffect } from "react"

export function useMedia(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches
    }
    return false
  })

  useEffect(() => {
    const matchMedia = window.matchMedia(query)
    const handleChange = () => setMatches(matchMedia.matches)

    // Set up the subscription
    matchMedia.addEventListener("change", handleChange)

    // Update state asynchronously to avoid synchronous setState in effect
    // This ensures we have the correct value when query changes
    requestAnimationFrame(() => {
      setMatches(matchMedia.matches)
    })

    return () => {
      matchMedia.removeEventListener("change", handleChange)
    }
  }, [query])

  return matches
}