import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button, Card, Result, Space, Tag, Typography } from 'antd'
import { Link, useParams } from 'react-router-dom'
import { blogPosts } from '../../data/blog'

const { Title, Paragraph, Text } = Typography

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((entry) => entry.slug === slug)

  if (!post) {
    return (
      <section className="portfolio-section blog-post-page">
        <Result
          status="404"
          title="Post not found"
          subTitle="The article you are looking for is not available."
          extra={
            <Button type="primary">
              <Link to="/blog">Back to Blog</Link>
            </Button>
          }
        />
      </section>
    )
  }

  return (
    <section className="portfolio-section blog-post-page">
      <Button type="link" icon={<ArrowLeftOutlined />} className="blog-back-btn">
        <Link to="/blog">Back to Blog</Link>
      </Button>

      <Card className="blog-post-card">
        <Text className="blog-date">{post.date}</Text>
        <Title level={2} className="blog-post-title">
          {post.title}
        </Title>
        <Space wrap size={8} className="blog-post-tags">
          {post.tags.map((tag) => (
            <Tag key={tag} className="skills-tag">
              {tag}
            </Tag>
          ))}
        </Space>
        {post.content.map((paragraph) => (
          <Paragraph key={paragraph} className="blog-post-paragraph">
            {paragraph}
          </Paragraph>
        ))}
      </Card>
    </section>
  )
}
