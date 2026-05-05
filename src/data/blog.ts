export type BlogPost = {
  slug: string
  title: string
  date: string
  preview: string
  content: string[]
  tags: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'scalable-react-architecture',
    title: 'Building Scalable React Architecture',
    date: 'May 2026',
    preview:
      'A practical guide for structuring React apps with clear boundaries, reusable UI patterns, and predictable state.',
    tags: ['React', 'Architecture', 'Frontend'],
    content: [
      'Scalable React systems start with clear separation of concerns. Keep presentational components focused on rendering and move orchestration logic into hooks and section-level containers.',
      'When complexity grows, naming and folder structure become a product decision. Consistent component boundaries reduce onboarding time and prevent accidental coupling.',
      'A stable design system helps teams move faster. Shared tokens, reusable variants, and strict TypeScript props make UI decisions explicit and maintainable.',
      'Performance is usually won through small improvements: avoiding unnecessary re-renders, memoizing expensive calculations, and shipping less JavaScript by default.',
    ],
  },
  {
    slug: 'teaching-robotics-through-projects',
    title: 'Teaching Robotics Through Project-Based Learning',
    date: 'Apr 2026',
    preview:
      'How hands-on robotics modules help students build stronger problem-solving skills and engineering confidence.',
    tags: ['Education', 'Robotics', 'STEM'],
    content: [
      'Project-based learning keeps abstract concepts grounded in visible outcomes. Students can connect algorithms and control logic to real behavior in robots and devices.',
      'The best sessions combine constraints and creativity. A clear objective with room for iteration encourages independent exploration and teamwork.',
      'Debugging becomes a teaching tool, not a failure point. Step-by-step diagnostics build resilience and communication habits that carry into software engineering roles.',
    ],
  },
  {
    slug: 'laravel-react-delivery-workflow',
    title: 'Laravel + React Delivery Workflow',
    date: 'Mar 2026',
    preview:
      'A delivery workflow for building reliable full-stack products with Laravel APIs and React frontends.',
    tags: ['Laravel', 'React', 'Full-Stack'],
    content: [
      'A strong Laravel + React workflow starts with API contracts. Early alignment between backend and frontend reduces rework and improves release quality.',
      'Backend reliability comes from thoughtful validation, clear domain logic, and predictable response structures. Frontend reliability comes from resilient loading and error states.',
      'Shipping quality means treating performance, accessibility, and maintainability as first-class requirements, not post-launch fixes.',
    ],
  },
]
