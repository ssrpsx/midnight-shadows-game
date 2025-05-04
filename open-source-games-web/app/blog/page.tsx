"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, X } from 'lucide-react'

// Sample blog data with tags and slugs
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    excerpt: "Learn the basics of React and how to create your first component.",
    date: "May 1, 2025",
    tags: ["React", "JavaScript", "Frontend"],
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Advanced TypeScript Patterns",
    slug: "advanced-typescript-patterns",
    excerpt: "Explore advanced TypeScript patterns to improve your code quality.",
    date: "April 28, 2025",
    tags: ["TypeScript", "JavaScript", "Programming"],
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "Building Responsive UIs with Tailwind",
    slug: "building-responsive-uis-with-tailwind",
    excerpt: "Learn how to create beautiful responsive interfaces using Tailwind CSS.",
    date: "April 25, 2025",
    tags: ["CSS", "Tailwind", "Frontend", "Design"],
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Server Components in Next.js",
    slug: "server-components-in-nextjs",
    excerpt: "Understand how Server Components work in Next.js and when to use them.",
    date: "April 22, 2025",
    tags: ["Next.js", "React", "Server Components"],
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "State Management with Zustand",
    slug: "state-management-with-zustand",
    excerpt: "Simplify your state management with Zustand, a lightweight state management library.",
    date: "April 19, 2025",
    tags: ["JavaScript", "State Management", "React"],
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "API Routes in Next.js",
    slug: "api-routes-in-nextjs",
    excerpt: "Learn how to create and use API routes in your Next.js applications.",
    date: "April 16, 2025",
    tags: ["Next.js", "API", "Backend"],
    readTime: "5 min read",
  },
]

// Get all unique tags from blog posts
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags))).sort()

export default function BlogPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter posts based on selected tags
  const filteredPosts =
    selectedTags.length > 0
      ? blogPosts.filter((post) => selectedTags.some((tag) => post.tags.includes(tag)))
      : blogPosts

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  // Clear all selected tags
  const clearTags = () => setSelectedTags([])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Our Blog</h1>
          <p className="text-muted-foreground">Insights, thoughts, and knowledge from our team</p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-sm font-medium">Filter by tags:</span>
            {selectedTags.length > 0 && (
              <Button variant="ghost" size="sm" onClick={clearTags} className="h-7 px-2 text-xs">
                Clear all <X className="ml-1 h-3 w-3" />
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/90"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {selectedTags.length > 0 && (
          <p className="mb-4 text-sm text-muted-foreground">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"} with selected tags
          </p>
        )}

        <div className="grid gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <Link href={`/blog/${post.slug}`} className="group">
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </Link>
                <CardDescription className="flex justify-between items-center">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge
                      key={`${post.id}-${tag}`}
                      variant="secondary"
                      className="cursor-pointer"
                      onClick={() => !selectedTags.includes(tag) && toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-sm font-medium text-primary hover:underline flex items-center"
                >
                  Read more <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No posts found</h3>
            <p className="text-muted-foreground">Try selecting different tags or clear the filters</p>
            <Button variant="outline" onClick={clearTags} className="mt-4">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
