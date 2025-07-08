import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Delta – Habit Tracker by Fontaine Labs",
  description: "Delta helps you build better habits, one day at a time. Track, improve, and celebrate your daily progress.",
}

export default function DeltaLayout({ children }: { children: React.ReactNode }) {
  return children
} 