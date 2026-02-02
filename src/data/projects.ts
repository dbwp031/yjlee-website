import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'api-gateway',
    title: 'Distributed API Gateway',
    description: 'High-performance API gateway with rate limiting, authentication, and request routing capabilities.',
    longDescription: 'A scalable API gateway built to handle millions of requests per day. Features include JWT authentication, rate limiting per client, request/response transformation, and comprehensive logging.',
    techStack: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/yjlee/api-gateway',
    featured: true,
  },
  {
    id: 'event-processor',
    title: 'Real-time Event Processor',
    description: 'Event-driven microservice for processing and aggregating streaming data in real-time.',
    longDescription: 'Processes millions of events per hour using Apache Kafka. Implements exactly-once semantics and supports complex event processing patterns.',
    techStack: ['Java', 'Spring Boot', 'Kafka', 'Apache Flink', 'Elasticsearch'],
    githubUrl: 'https://github.com/yjlee/event-processor',
    featured: true,
  },
  {
    id: 'db-migration-tool',
    title: 'Database Migration Tool',
    description: 'CLI tool for managing database schema migrations with rollback support and version control.',
    techStack: ['Python', 'SQLAlchemy', 'PostgreSQL', 'MySQL', 'Click'],
    githubUrl: 'https://github.com/yjlee/db-migrate',
    featured: true,
  },
  {
    id: 'monitoring-dashboard',
    title: 'Infrastructure Monitoring Dashboard',
    description: 'Real-time monitoring solution for distributed systems with alerting and visualization.',
    techStack: ['Go', 'Prometheus', 'Grafana', 'InfluxDB', 'React'],
    githubUrl: 'https://github.com/yjlee/infra-monitor',
    demoUrl: 'https://monitor-demo.yjlee.dev',
  },
  {
    id: 'cache-layer',
    title: 'Distributed Cache Layer',
    description: 'Multi-tier caching solution with automatic invalidation and cache-aside pattern implementation.',
    techStack: ['Rust', 'Redis', 'Memcached', 'gRPC'],
    githubUrl: 'https://github.com/yjlee/cache-layer',
  },
  {
    id: 'log-aggregator',
    title: 'Log Aggregation Service',
    description: 'Centralized logging service that collects, processes, and indexes logs from distributed services.',
    techStack: ['Go', 'Elasticsearch', 'Logstash', 'Kibana', 'gRPC'],
    githubUrl: 'https://github.com/yjlee/log-aggregator',
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
