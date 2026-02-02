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
                안녕하세요. AI 연구와 서비스 개발 경험이 모두 있는 개발자 이유제입니다. 학부생 시절 AI에 관심을 가지고
                딥러닝 연구실 학부연구생과 AI 회사에서 인턴으로 근무하며 AI에 대한 이해와 실무능력을 쌓았습니다.
              </p>
              <p>
                이후 개발에 흥미를 느껴 백엔드 개발자로 근무하며 국가법령정보 플랫폼 고도화, 전략물자관리 서비스 재구축,
                서울지하철 데이터 API 개방 등 다양한 프로젝트에 참여했습니다. 트랜잭션 구조 설계 및 개선,
                Sentence Transformer 모델을 활용한 데이터 분석 시스템 구축 경험이 있습니다.
              </p>
              <p>
                이제는 AI와 개발이 동떨어진 기술이 아니라고 생각합니다. AI를 하나의 기술 스택으로서
                더욱 향상된 서비스를 제공하는 개발을 지향합니다.
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
          <Button href="mailto:dbwp031@gmail.com" variant="primary" size="lg" external>
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  );
}
