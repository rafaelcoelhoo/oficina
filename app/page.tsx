import { Hero } from '@/components/home/hero'
import { Services } from '@/components/home/services'
import { About } from '@/components/home/about'
import { Process } from '@/components/home/process'
import { Faq } from '@/components/home/faq'
import { Contact } from '@/components/home/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Process />
      <Faq />
      <Contact />
    </>
  )
}
