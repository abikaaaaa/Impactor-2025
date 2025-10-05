"use client"

import { useEffect, useRef } from "react"

export function StarsBackground() {
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const container = canvasRef.current
    const starCount = 200

    // Create stars
    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div")
      star.className = "star"
      star.style.left = `${Math.random() * 100}%`
      star.style.top = `${Math.random() * 100}%`
      star.style.animationDelay = `${Math.random() * 100}s`
      star.style.opacity = `${Math.random() * 0.5 + 0.3}`
      container.appendChild(star)
    }

    return () => {
      container.innerHTML = ""
    }
  }, [])

  return <div ref={canvasRef} className="stars-bg" />
}
