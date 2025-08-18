import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, ChevronRight, MessageCircle } from "lucide-react";
import type { Metadata } from "next";
import PlaceholderImage from "@/components/PlaceholderImage";

export const metadata: Metadata = {
  title: "Blog Post | Marblex - Premium Marble Exporters",
  description: "Read our detailed blog post about marble and natural stone topics.",
  keywords: "marble blog post, natural stone article, marble industry insights",
};

// This would typically come from a CMS or database
const recentPosts = [
  {
    title: "How To Create Marble Staircase With Lighting",
    slug: "how-to-create-marble-staircase-with-lighting",
    date: "NOVEMBER 2, 2022",
    comments: 0
  },
  {
    title: "In Home Choose A Light Floor If At All Possible",
    slug: "in-home-choose-a-light-floor-if-at-all-possible",
    date: "NOVEMBER 2, 2022",
    comments: 0
  },
  {
    title: "How To Protect A Bathroom With Marble Surface?",
    slug: "how-to-protect-a-bathroom-with-marble-surface",
    date: "NOVEMBER 2, 2022",
    comments: 0
  },
  {
    title: "Choose Water Resistant Flooring At Your Home",
    slug: "choose-water-resistant-flooring-at-your-home",
    date: "NOVEMBER 2, 2022",
    comments: 0
  },
  {
    title: "What Kind Of Flooring Was Best For My Art Studio?",
    slug: "what-kind-of-flooring-was-best-for-my-art-studio",
    date: "NOVEMBER 2, 2022",
    comments: 0
  }
];

const recentComments = [
  {
    author: "Peter Fernandez",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    post: "How To Create Marble Staircase With Lighting",
    date: "Nov 2, 2022"
  },
  {
    author: "John Doe",
    comment: "Ut elit tellus, luctus nec ullamcorper mattis.",
    post: "In Home Choose A Light Floor If At All Possible",
    date: "Nov 2, 2022"
  },
  {
    author: "Admin",
    comment: "Thank you for your comment!",
    post: "How To Protect A Bathroom With Marble Surface?",
    date: "Nov 2, 2022"
  }
];

const categories = [
  { name: "Flooring", count: 5 },
  { name: "Marble", count: 8 },
  { name: "Renovation", count: 3 },
  { name: "Stone", count: 6 },
  { name: "Tiles", count: 4 },
  { name: "Design", count: 2 }
];

const archives = [
  { month: "November 2022", count: 10 },
  { month: "October 2022", count: 8 }
];

const tags = ["Granite", "Laminate", "Marble", "Stone"];

const meta = [
  "Log in",
  "Entries feed",
  "Comments feed",
  "WordPress.org"
];

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <PlaceholderImage 
            text="Blog Post Hero" 
            height="100%" 
            className="brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 container max-w-screen-xl mx-auto px-4 py-32 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            In Home Choose A Light Floor If At All Possible
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Link href="/" className="flex items-center hover:text-amber-500 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-amber-500 transition-colors">
              Blog
            </Link>
            <span className="mx-2">›</span>
            <span>Details</span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 md:py-24">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <Image
                  src="/images/blog/light-floor.jpg"
                  alt="Light Floor Interior"
                  width={800}
                  height={500}
                  className="rounded-lg"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">Ideas For Designing A Home With Stone</h2>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <div className="grid grid-cols-2 gap-6 my-8">
                  <Image
                    src="/images/blog/kitchen-1.jpg"
                    alt="Kitchen Design"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                  <Image
                    src="/images/blog/kitchen-2.jpg"
                    alt="Kitchen Design"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>

                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <blockquote className="border-l-4 border-amber-500 pl-4 italic my-8 py-2 text-lg">
                  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                </blockquote>

                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Waterfall Edge Bookmatching</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <Image
                  src="/images/blog/kitchen-3.jpg"
                  alt="Kitchen Design"
                  width={800}
                  height={400}
                  className="rounded-lg my-8"
                />

                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>

                <div className="flex items-center gap-4 mt-12">
                  <span className="font-semibold">Tags:</span>
                  <div className="flex gap-2">
                    {tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tag/${tag.toLowerCase()}`}
                        className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-amber-500 hover:text-white transition-colors"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-8 border-t border-b py-4">
                  <Link href="/blog/previous-post" className="flex items-center gap-2 hover:text-amber-500">
                    <ChevronRight className="h-4 w-4 rotate-180" />
                    <div>
                      <div className="text-sm">How To Create Marble</div>
                      <div className="text-sm">Staircase With Lighting</div>
                    </div>
                  </Link>
                  <Link href="/blog/next-post" className="flex items-center gap-2 hover:text-amber-500">
                    <div className="text-right">
                      <div className="text-sm">How To Protect A Bathroom</div>
                      <div className="text-sm">With Marble Surface</div>
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-12">
                <h3 className="text-2xl font-bold mb-8">5 Comments</h3>

                <div className="space-y-8">
                  {/* Comment */}
                  <div className="flex gap-4 pb-6 border-b">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                      <Image
                        src="/images/team/person-1.jpg"
                        alt="John Doe"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">John Doe</h4>
                        <span className="text-muted-foreground text-sm">Nov 2, 2022</span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                      </p>
                      <button className="text-amber-500 text-sm font-medium">Reply</button>
                    </div>
                  </div>

                  {/* Reply */}
                  <div className="flex gap-4 ml-12 pb-6 border-b">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                      <Image
                        src="/images/team/person-2.jpg"
                        alt="Admin"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Admin</h4>
                        <span className="text-muted-foreground text-sm">Nov 2, 2022</span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        Thank you for your comment!
                      </p>
                      <button className="text-amber-500 text-sm font-medium">Reply</button>
                    </div>
                  </div>

                  {/* More comments */}
                  <div className="flex gap-4 pb-6 border-b">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                      <Image
                        src="/images/team/person-3.jpg"
                        alt="Peter Fernandez"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Peter Fernandez</h4>
                        <span className="text-muted-foreground text-sm">Nov 2, 2022</span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                      </p>
                      <button className="text-amber-500 text-sm font-medium">Reply</button>
                    </div>
                  </div>

                  <div className="flex gap-4 pb-6 border-b">
                    <div className="w-12 h-12 rounded-full bg-muted flex-shrink-0 overflow-hidden">
                      <Image
                        src="/images/team/person-4.jpg"
                        alt="Admin"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">Admin</h4>
                        <span className="text-muted-foreground text-sm">Nov 2, 2022</span>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        Thank you for your feedback! We appreciate it.
                      </p>
                      <button className="text-amber-500 text-sm font-medium">Reply</button>
                    </div>
                  </div>
                </div>

                {/* Comment Form */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold mb-8">Write A Reply Or Comment</h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border bg-white"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 rounded-lg border bg-white"
                      />
                    </div>
                    <input
                      type="url"
                      placeholder="Your URL"
                      className="w-full px-4 py-3 rounded-lg border bg-white"
                    />
                    <textarea
                      placeholder="Your Comment"
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border bg-white"
                    ></textarea>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                      POST COMMENT
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Search */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full px-4 py-3 rounded-lg border bg-white"
                />
                <button className="absolute right-4 top-1/2 -translate-y-1/2">
                  🔍
                </button>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-xl font-bold mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="border-b pb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-amber-500 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Comments */}
              <div>
                <h3 className="text-xl font-bold mb-6">Recent Comments</h3>
                <div className="space-y-4">
                  {recentComments.map((comment, index) => (
                    <div key={index} className="border-b pb-3">
                      <p className="text-sm">
                        <span className="font-medium">{comment.author}</span> on{" "}
                        <Link
                          href={`/blog/${comment.post.toLowerCase().replace(/\s+/g, '-')}`}
                          className="hover:text-amber-500 transition-colors"
                        >
                          {comment.post}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Archives */}
              <div>
                <h3 className="text-xl font-bold mb-6">Archives</h3>
                <div className="space-y-2">
                  {archives.map((archive, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <Link
                        href={`/blog/archive/${archive.month.toLowerCase().replace(/\s+/g, '-')}`}
                        className="hover:text-amber-500 transition-colors"
                      >
                        {archive.month}
                      </Link>
                      <span className="text-muted-foreground">({archive.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold mb-6">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-2">
                      <Link
                        href={`/blog/category/${category.name.toLowerCase()}`}
                        className="hover:text-amber-500 transition-colors"
                      >
                        {category.name}
                      </Link>
                      <span className="text-muted-foreground">({category.count})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meta */}
              <div>
                <h3 className="text-xl font-bold mb-6">Meta</h3>
                <div className="space-y-2">
                  {meta.map((item, index) => (
                    <div key={index} className="border-b pb-2">
                      <Link
                        href="#"
                        className="hover:text-amber-500 transition-colors"
                      >
                        {item}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xl font-bold mb-6">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase()}`}
                      className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-amber-500 hover:text-white transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 