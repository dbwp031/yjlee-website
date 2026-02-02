import type { CVData } from '../types';

export const cvData: CVData = {
  summary:
    'Backend engineer with expertise in designing and building scalable distributed systems. Passionate about clean architecture, performance optimization, and developer tooling. Experienced in leading technical initiatives and mentoring junior developers.',

  experience: [
    {
      id: 'exp-1',
      company: 'Tech Company',
      role: 'Senior Backend Engineer',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      endDate: 'Present',
      description: [
        'Architected and implemented a high-throughput event processing system handling 10M+ events daily',
        'Led migration from monolithic architecture to microservices, reducing deployment time by 80%',
        'Designed and built internal developer platform tools improving team productivity by 40%',
        'Mentored junior engineers and conducted technical interviews',
      ],
      techStack: ['Go', 'Kubernetes', 'PostgreSQL', 'Kafka', 'Redis'],
    },
    {
      id: 'exp-2',
      company: 'Startup Inc',
      role: 'Backend Engineer',
      location: 'New York, NY',
      startDate: '2019-06',
      endDate: '2021-12',
      description: [
        'Built RESTful APIs serving 1M+ daily active users with 99.9% uptime',
        'Implemented real-time notification system using WebSockets and message queues',
        'Optimized database queries reducing average response time by 60%',
        'Developed CI/CD pipelines and automated testing infrastructure',
      ],
      techStack: ['Python', 'Django', 'PostgreSQL', 'RabbitMQ', 'Docker'],
    },
    {
      id: 'exp-3',
      company: 'Software Corp',
      role: 'Junior Developer',
      location: 'Boston, MA',
      startDate: '2017-08',
      endDate: '2019-05',
      description: [
        'Developed and maintained backend services for e-commerce platform',
        'Implemented payment processing integration with multiple providers',
        'Created automated reporting tools for business analytics',
      ],
      techStack: ['Java', 'Spring Boot', 'MySQL', 'AWS'],
    },
  ],

  education: [
    {
      id: 'edu-1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2013',
      endDate: '2017',
      description: 'Focus on distributed systems and algorithms',
    },
  ],

  skills: [
    {
      category: 'Languages',
      items: ['Go', 'Python', 'Java', 'Rust', 'TypeScript', 'SQL'],
    },
    {
      category: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
    },
    {
      category: 'Infrastructure',
      items: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform'],
    },
    {
      category: 'Messaging',
      items: ['Kafka', 'RabbitMQ', 'Redis Pub/Sub', 'gRPC'],
    },
    {
      category: 'Tools & Practices',
      items: ['Git', 'CI/CD', 'Monitoring', 'Testing', 'Agile'],
    },
  ],
};
