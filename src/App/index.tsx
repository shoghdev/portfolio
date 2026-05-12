import { Col, ConfigProvider, Row } from 'antd'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import '../App.css'
import { getAppThemeConfig } from './consts'
import { portfolioData } from '../data/portfolio'
import { PortfolioLayout } from '../layout/PortfolioLayout'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { SkillsSection } from '../components/sections/SkillsSection'
import { EducationSection } from '../components/sections/EducationSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { ContactSection } from '../components/sections/ContactSection'
import { GenerateCvPage } from '../components/GenerateCvPage'
import { BlogPage } from '../components/BlogPage'
import { BlogPostPage } from '../components/BlogPostPage'
import { GetInTouchPage } from '../components/GetInTouchPage'

function App() {
  return (
    <ConfigProvider theme={getAppThemeConfig()}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PortfolioLayout>
                <div className="app-home">
                  <HeroSection
                    firstName={portfolioData.firstName}
                    lastName={portfolioData.lastName}
                    role={portfolioData.role}
                    email={portfolioData.email}
                    phone={portfolioData.phone}
                    socialProfiles={portfolioData.socialProfiles}
                  />
                  <Row gutter={[28, 28]} className="pf-home-split" wrap>
                    <Col xs={24} lg={9} xl={8}>
                      <div className="pf-sidebar-stack">
                        <AboutSection about={portfolioData.about} aboutStack={portfolioData.aboutStack} />
                        <TestimonialsSection testimonials={portfolioData.testimonials} />
                        <SkillsSection technicalSkills={portfolioData.technicalSkills} />
                        <EducationSection education={portfolioData.education} />
                      </div>
                    </Col>
                    <Col xs={24} lg={15} xl={16}>
                      <div className="pf-main-stack">
                        <ExperienceSection experience={portfolioData.experience} />
                        <ProjectsSection projects={portfolioData.projects} />
                      </div>
                    </Col>
                  </Row>
                  <ContactSection email={portfolioData.email} socialProfiles={portfolioData.socialProfiles} />
                </div>
              </PortfolioLayout>
            }
          />
          <Route
            path="/generate-cv"
            element={
              <PortfolioLayout>
                <GenerateCvPage />
              </PortfolioLayout>
            }
          />
          <Route
            path="/blog"
            element={
              <PortfolioLayout>
                <BlogPage />
              </PortfolioLayout>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <PortfolioLayout>
                <BlogPostPage />
              </PortfolioLayout>
            }
          />
          <Route path="/notes" element={<Navigate to="/blog" replace />} />
          <Route
            path="/get-in-touch"
            element={
              <PortfolioLayout>
                <GetInTouchPage />
              </PortfolioLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
