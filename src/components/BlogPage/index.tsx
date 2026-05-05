import { ArrowRightOutlined } from '@ant-design/icons'
import { Button, Card, List, Space, Tag, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blog'

const { Title, Paragraph, Text } = Typography

export function BlogPage() {
  return (
    <section className="portfolio-section blog-page">
      <Text className="experience-kicker">Knowledge Base</Text>
      <Title level={2} className="blog-title">
        Notes and insights
      </Title>
      <Paragraph className="blog-subtitle">
        Notes and practical insights about software engineering, teaching, and project delivery.
      </Paragraph>

      <List
        className="blog-list"
        dataSource={blogPosts}
        renderItem={(post) => (
          <List.Item className="blog-list-item">
            <Card className="blog-card">
              <Text className="blog-date">{post.date}</Text>
              <Title level={4} className="blog-card-title">
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </Title>
              <Paragraph className="blog-preview">{post.preview}</Paragraph>
              <Space wrap size={8}>
                {post.tags.map((tag) => (
                  <Tag key={tag} className="skills-tag">
                    {tag}
                  </Tag>
                ))}
              </Space>
              <div className="blog-read-more">
                <Button type="link" className="blog-read-more-btn" icon={<ArrowRightOutlined />}>
                  <Link to={`/blog/${post.slug}`}>Read Post</Link>
                </Button>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </section>
  )
}
