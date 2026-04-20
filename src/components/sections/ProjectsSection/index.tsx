import { GithubOutlined, LinkOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Space, Tag, Typography } from 'antd'
import type { ProjectsSectionProps } from './types'

const { Title, Paragraph } = Typography

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="portfolio-section projects-section">
      <div className="projects-header">
        <Title level={2}>Selected Works</Title>
        <a href="#projects" className="projects-view-more">
          View Portfolio
        </a>
      </div>
      <Row gutter={[16, 16]}>
        {projects.map((project) => (
          <Col xs={24} md={project.title === projects[0].title ? 16 : 8} key={project.title}>
            <Card
              title={project.title}
              className={project.title === projects[0].title ? 'project-card project-card-large' : 'project-card'}
            >
              <div className="project-card-media" />
              <Paragraph>{project.description}</Paragraph>
              <Space wrap className="projects-tech-stack">
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
