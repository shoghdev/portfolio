import { GlobalOutlined } from '@ant-design/icons'
import { Button, Card, List, Typography } from 'antd'
import { SectionReveal } from '../../common/SectionReveal'
import type { ProjectsSectionProps } from './types'
import {useState} from "react"

const { Title } = Typography

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [showMore, setShowMore] = useState(false)
  const INITIAL_COUNT = 5
  const visibleProjects = showMore
    ? projects
    : projects.slice(0, INITIAL_COUNT)

  return (
    <SectionReveal id="projects" className="pf-section pf-section-main">
      <Card bordered={false} className="pf-surface-card pf-main-card pf-projects-card">
        <Title level={2} className="pf-card-title">
          Key projects
        </Title>
        <List
          className="pf-projects-ant-list"
          itemLayout="horizontal"
          dataSource={visibleProjects}
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
        {projects.length > INITIAL_COUNT && (
          <div className="pf-projects-show-more">
            <Button
              type="link"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </Button>
          </div>
        )}
      </Card>
    </SectionReveal>
  )
}
