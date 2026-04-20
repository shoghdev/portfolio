import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import type { Project } from '../../types/portfolio'

const { Title, Paragraph } = Typography

type ProjectsSectionProps = {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="portfolio-section">
      <Title level={2}>Projects</Title>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} md={12} key={project.title}>
            <Card title={project.title}>
              <Paragraph>{project.description}</Paragraph>
              <Space wrap style={{ marginBottom: 12 }}>
                {project.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </Space>
              <Space>
                {project.liveUrl ? (
                  <Button icon={<LinkOutlined />} href={project.liveUrl} target="_blank">
                    Live
                  </Button>
                ) : null}
                {project.repoUrl ? (
                  <Button icon={<GithubOutlined />} href={project.repoUrl} target="_blank">
                    Repository
                  </Button>
                ) : null}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
