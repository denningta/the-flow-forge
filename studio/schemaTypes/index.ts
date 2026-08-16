import {author} from './documents/author'
import {blogPage} from './documents/blogPage'
import {category} from './documents/category'
import {homePage} from './documents/homePage'
import {post} from './documents/post'
import {siteSettings} from './documents/siteSettings'

import {blockContent} from './objects/blockContent'
import {faqItem} from './objects/faqItem'
import {iconFeature} from './objects/iconFeature'
import {iconLabel} from './objects/iconLabel'
import {metric} from './objects/metric'
import {narrativeBlock} from './objects/narrativeBlock'
import {navLink} from './objects/navLink'
import {seo} from './objects/seo'

import {assessmentSection} from './sections/assessmentSection'
import {capabilitiesSection} from './sections/capabilitiesSection'
import {caseStudySection} from './sections/caseStudySection'
import {ctaSection} from './sections/ctaSection'
import {differentiatorsSection} from './sections/differentiatorsSection'
import {faqSection} from './sections/faqSection'
import {heroSection} from './sections/heroSection'
import {industriesSection} from './sections/industriesSection'
import {problemSection} from './sections/problemSection'
import {processSection} from './sections/processSection'

export const schemaTypes = [
  // Documents
  siteSettings,
  homePage,
  blogPage,
  post,
  author,
  category,

  // Home page sections
  heroSection,
  problemSection,
  capabilitiesSection,
  industriesSection,
  differentiatorsSection,
  processSection,
  assessmentSection,
  caseStudySection,
  faqSection,
  ctaSection,

  // Reusable objects
  blockContent,
  faqItem,
  iconFeature,
  iconLabel,
  metric,
  narrativeBlock,
  navLink,
  seo,
]
