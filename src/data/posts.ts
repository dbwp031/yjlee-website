import type { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-apis',
    title: 'Building Scalable APIs: Lessons Learned',
    date: '2024-12-15',
    excerpt:
      'Practical insights from building APIs that handle millions of requests. Covering rate limiting, caching strategies, and database optimization.',
    tags: ['backend', 'api', 'scalability'],
    content: `
# Building Scalable APIs: Lessons Learned

After years of building backend systems, I've learned that scalability isn't just about handling more requests—it's about designing systems that grow gracefully.

## Key Principles

### 1. Design for Failure

Every external dependency will fail at some point. Build your systems with circuit breakers, retries with exponential backoff, and graceful degradation.

\`\`\`go
func fetchWithRetry(url string, maxRetries int) (*Response, error) {
    for i := 0; i < maxRetries; i++ {
        resp, err := fetch(url)
        if err == nil {
            return resp, nil
        }
        time.Sleep(time.Duration(math.Pow(2, float64(i))) * time.Second)
    }
    return nil, ErrMaxRetriesExceeded
}
\`\`\`

### 2. Cache Strategically

Not all data needs real-time accuracy. Identify what can be cached and for how long.

- **Static data**: Cache aggressively (hours/days)
- **User preferences**: Cache with moderate TTL (minutes)
- **Real-time data**: Use cache-aside pattern with short TTL

### 3. Database Optimization

Your database is often the bottleneck. Key strategies:

- Use connection pooling
- Add appropriate indexes (but not too many)
- Consider read replicas for read-heavy workloads
- Implement query result caching

## Conclusion

Scalability is a journey, not a destination. Start simple, measure everything, and optimize based on real data.
    `,
  },
  {
    slug: 'microservices-vs-monolith',
    title: 'Microservices vs Monolith: Making the Right Choice',
    date: '2024-11-20',
    excerpt:
      'When should you choose microservices over a monolith? A practical guide based on team size, complexity, and business requirements.',
    tags: ['architecture', 'microservices', 'design'],
    content: `
# Microservices vs Monolith: Making the Right Choice

The microservices vs monolith debate continues, but the answer is almost always "it depends."

## When to Start with a Monolith

- **Small team (< 10 engineers)**: Communication overhead of microservices isn't worth it
- **Unclear domain boundaries**: You need to understand your domain before splitting it
- **Speed to market**: Monoliths are faster to develop initially

## When to Consider Microservices

- **Independent scaling needs**: Different parts of your system have vastly different load patterns
- **Multiple teams**: Teams can own and deploy services independently
- **Technology diversity**: Different problems benefit from different tech stacks

## The Modular Monolith: A Middle Ground

Consider a modular monolith: a single deployable unit with clear internal boundaries.

\`\`\`
src/
├── modules/
│   ├── users/
│   │   ├── api/
│   │   ├── domain/
│   │   └── infrastructure/
│   ├── orders/
│   │   ├── api/
│   │   ├── domain/
│   │   └── infrastructure/
│   └── payments/
│       ├── api/
│       ├── domain/
│       └── infrastructure/
└── shared/
\`\`\`

This approach gives you clear boundaries without the operational complexity of distributed systems.

## Key Takeaway

Don't let architecture astronauts convince you that microservices are always the answer. Choose the architecture that fits your current needs, not your imagined future scale.
    `,
  },
  {
    slug: 'effective-database-indexing',
    title: 'Effective Database Indexing: A Practical Guide',
    date: '2024-10-05',
    excerpt:
      'Understanding when and how to use database indexes effectively. Common pitfalls and best practices for PostgreSQL.',
    tags: ['database', 'postgresql', 'performance'],
    content: `
# Effective Database Indexing: A Practical Guide

Database indexes are powerful but often misunderstood. Let's demystify them.

## How Indexes Work

An index is a separate data structure that maintains a sorted copy of selected columns, with pointers to the actual rows.

Think of it like a book's index: instead of reading every page to find "PostgreSQL," you look it up in the index and go directly to the relevant pages.

## Types of Indexes in PostgreSQL

### B-tree (Default)
Best for: equality and range queries
\`\`\`sql
CREATE INDEX idx_users_email ON users(email);
-- Good for: WHERE email = 'user@example.com'
-- Good for: WHERE created_at > '2024-01-01'
\`\`\`

### Hash
Best for: equality comparisons only
\`\`\`sql
CREATE INDEX idx_users_email_hash ON users USING hash(email);
-- Good for: WHERE email = 'user@example.com'
-- NOT good for: WHERE email LIKE 'user%'
\`\`\`

### GIN (Generalized Inverted Index)
Best for: arrays, full-text search, JSONB
\`\`\`sql
CREATE INDEX idx_posts_tags ON posts USING gin(tags);
-- Good for: WHERE tags @> ARRAY['backend']
\`\`\`

## Common Pitfalls

1. **Over-indexing**: Each index slows down writes
2. **Ignoring composite index order**: Put high-cardinality columns first
3. **Not using EXPLAIN ANALYZE**: Always verify index usage

## The Golden Rule

Add indexes based on actual query patterns, not assumptions. Use \`pg_stat_user_indexes\` to find unused indexes.
    `,
  },
];
