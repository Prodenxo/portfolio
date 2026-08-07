import PortfolioPage from '@/components/portfolio-page'
import ScrollProgress from '@/components/scroll-progress'
import SiteHeader from '@/components/site-header'

export default function Home () {
  return (
    <>
      <ScrollProgress />
      <SiteHeader />
      <PortfolioPage />
    </>
  )
}
