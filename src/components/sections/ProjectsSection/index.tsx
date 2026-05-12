import { GlobalOutlined, RightOutlined } from '@ant-design/icons'
import { Card, List, Typography } from 'antd'
import { SectionReveal } from '../../common/SectionReveal'
import type { ProjectsSectionProps } from './types'

const { Title } = Typography

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <SectionReveal id="projects" className="pf-section pf-section-main">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-projects-card">
        <Title level={2} className="pf-card-title">
          Key projects
        </Title>
        <List
          className="pf-projects-ant-list"
          itemLayout="horizontal"
          dataSource={projects}
          renderItem={(project) => (
            <List.Item className="pf-projects-ant-item">
              <div className="pf-projects-list-leading">
                <GlobalOutlined className="pf-projects-globe" aria-hidden />
              </div>
              <List.Item.Meta
                title={<span className="pf-projects-name">{project.title}</span>}
                description={
                  project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="pf-projects-url">
                      {project.liveUrl.replace(/^https?:\/\//, '')}
                    </a>
                  ) : null
                }
              />
            </List.Item>
          )}
        />
        <a href="#projects" className="pf-projects-view-all">
          View all projects
          <RightOutlined className="pf-projects-view-all-icon" aria-hidden />
        </a>
      </Card>
    </SectionReveal>
  )
}
