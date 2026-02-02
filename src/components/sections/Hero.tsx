import { Button } from '../common';

export function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">이유제 (YJ Lee)</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Backend Developer with AI research experience. Building data-driven services with Spring and ML technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/projects" size="lg">
              View Projects
            </Button>
            <Button href="/cv" variant="outline" size="lg">
              See My CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
