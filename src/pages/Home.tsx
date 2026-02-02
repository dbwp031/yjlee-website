import { Link } from 'react-router-dom';
import { Hero, ProjectCard, BlogPostCard } from '../components/sections';
import { Button } from '../components/common';
import { featuredProjects } from '../data/projects';
import { blogPosts } from '../data/posts';

export function Home() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Hero />

      {/* About Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                I'm a backend engineer with a passion for building robust, scalable systems. With years of
                experience in distributed systems, I enjoy tackling complex architectural challenges and
                creating elegant solutions.
              </p>
              <p>
                My expertise spans database optimization, API design, microservices architecture, and cloud
                infrastructure. I believe in writing clean, maintainable code and building systems that can
                grow with the business.
              </p>
              <p>
                When I'm not coding, I enjoy writing about software engineering best practices and sharing
                knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="section-padding bg-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Projects</h2>
            <Link to="/projects" className="text-blue-600 hover:text-blue-700 font-medium">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Recent Posts</h2>
            <Link to="/blog" className="text-blue-600 hover:text-blue-700 font-medium">
              View all &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or partnerships.
          </p>
          <Button href="mailto:hello@yjlee.dev" variant="primary" size="lg" external>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
