<template>
  <div class="services-page">
    <header class="services-header">
      <a class="wordmark" :href="baseUrl" aria-label="OT9 Labs home">
        <span class="wordmark-main">OT<span>9</span></span>
        <span class="wordmark-sub">LABS</span>
      </a>
      <nav aria-label="Main navigation">
        <a :href="baseUrl">Home</a>
        <a :href="`${baseUrl}services`" aria-current="page">Services</a>
        <a :href="`${baseUrl}#approach`">Approach</a>
        <a :href="`${baseUrl}#contact`">Contact</a>
      </nav>
      <a class="email-link" href="mailto:mac@ot9labs.com">Email us</a>
    </header>

    <main>
      <section class="services-hero">
        <p class="eyebrow">OT9 LABS / SERVICES</p>
        <h1>ONE SECURITY PARTNER. FIVE LAYERS OF PROTECTION.</h1>
        <p class="services-lead">
          Security is no longer confined to the network perimeter. Modern threats move across
          technology, identities, people, organizations, and the physical world. Effective
          security must do the same.
        </p>
        <p>
          OT9 Labs provides an integrated security capability across five critical dimensions,
          built for the reality of modern threats—where cyber, physical, human, and organizational
          risks increasingly intersect.
        </p>
      </section>

      <section class="service-list" aria-label="OT9 Labs services">
        <article v-for="service in services" :key="service.slug" class="service-detail">
          <div class="service-number">{{ service.number }}</div>
          <div class="service-content">
            <div class="service-heading">
              <component :is="service.icon" :size="25" aria-hidden="true" />
              <p>{{ service.title }}</p>
            </div>
            <h2>{{ service.headline }}</h2>
            <p class="service-intro">{{ service.intro }}</p>
            <p class="service-description">{{ service.description }}</p>

            <div v-for="section in service.sections" :key="section.label" class="service-section">
              <h3>{{ section.label }}</h3>
              <p v-if="section.intro">{{ section.intro }}</p>
              <ul v-if="section.items">
                <li v-for="item in section.items" :key="item">
                  <IconCircleCheck :size="17" aria-hidden="true" />
                  {{ item }}
                </li>
              </ul>
              <ol v-if="section.flow" class="service-flow">
                <li v-for="(step, index) in section.flow" :key="step">
                  <span>{{ step }}</span>
                  <IconArrowRight v-if="index < section.flow.length - 1" :size="15" aria-hidden="true" />
                </li>
              </ol>
            </div>

            <div class="service-outcome">
              <span>THE OUTCOME</span>
              <p>{{ service.outcome }}</p>
            </div>
            <a class="service-detail-link" :href="`${baseUrl}services/${service.slug}`">
              OPEN SERVICE PAGE
              <IconArrowRight :size="16" aria-hidden="true" />
            </a>
          </div>
        </article>
      </section>

      <section class="team-sport">
        <div class="team-sport-heading">
          <p class="eyebrow">THE OT9 PERSPECTIVE</p>
          <h2>{{ securityPositioning.title }}</h2>
          <div class="team-sport-mark" aria-hidden="true">
            <IconShield :size="32" />
            <span></span>
            <IconTarget :size="32" />
            <span></span>
            <IconUsersGroup :size="32" />
          </div>
        </div>
        <div class="team-sport-copy">
          <div class="team-sport-principles">
            <p v-for="paragraph in securityPositioning.paragraphs.slice(0, 3)" :key="paragraph">
              {{ paragraph }}
            </p>
          </div>
          <p class="team-sport-emphasis">{{ securityPositioning.paragraphs[3] }}</p>
          <p class="team-sport-conclusion">{{ securityPositioning.paragraphs[4] }}</p>
        </div>
      </section>

      <section class="security-layers-section">
        <p class="eyebrow">ONE SECURITY PARTNER. FIVE LAYERS OF PROTECTION.</p>
        <h2>CAPABILITIES THAT WORK TOGETHER.</h2>
        <p>
          Together, these capabilities create a security model built for the reality of modern
          threats—where cyber, physical, human, and organizational risks increasingly intersect.
        </p>
        <div class="layers-grid">
          <article v-for="layer in securityLayers" :key="layer.dimension" class="layer-card">
            <p>{{ layer.dimension }}</p>
            <h3>{{ layer.service }}</h3>
            <span>{{ layer.description }}</span>
          </article>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import {
  IconArrowRight,
  IconCircleCheck,
  IconShield,
  IconTarget,
  IconUsersGroup,
} from '@tabler/icons-vue'
import {
  securityLayers,
  securityPositioning,
  services,
} from '@/data/homepageServices'

const baseUrl = import.meta.env.BASE_URL
</script>

<style scoped>
.services-page {
  --ink: #0a1a45;
  --brand: #2563eb;
  --muted: #69758b;
  --line: #e6ebf3;
  min-height: 100vh;
  padding: 0 max(1.25rem, calc((100vw - 1180px) / 2)) 5rem;
  color: var(--ink);
  background: #fff;
  font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
}

.services-header {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  border-bottom: 1px solid var(--line);
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 0.43rem;
  color: var(--ink);
  text-decoration: none;
}

.wordmark-main {
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.09em;
  line-height: 1;
}

.wordmark-main span {
  color: var(--brand);
}

.wordmark-sub {
  margin-top: 0.35rem;
  font-size: 0.57rem;
  font-weight: 800;
  letter-spacing: 0.24em;
}

.services-header nav {
  display: flex;
  gap: 1.4rem;
}

.services-header nav a,
.email-link {
  color: var(--ink);
  font-size: 0.82rem;
  font-weight: 700;
  text-decoration: none;
}

.services-hero {
  max-width: 900px;
  padding: 5rem 0 4rem;
}

.eyebrow,
.service-heading p,
.service-section h3,
.service-outcome span,
.layer-card > p {
  color: var(--brand);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.eyebrow {
  margin: 0 0 0.9rem;
}

.services-hero h1 {
  margin: 0;
  font-size: clamp(2.2rem, 5vw, 4.3rem);
  line-height: 1.08;
  letter-spacing: -0.065em;
  text-transform: uppercase;
}

.services-hero > p:not(.eyebrow) {
  max-width: 800px;
  margin: 1.15rem 0 0;
  color: var(--muted);
  line-height: 1.85;
}

.services-hero .services-lead {
  color: var(--ink) !important;
  font-size: 1.15rem;
  font-weight: 600;
}

.service-detail {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: 1.5rem;
  padding: 3.5rem 0;
  border-top: 1px solid var(--line);
}

.service-number {
  color: #9aabc9;
  font-size: 1.25rem;
  font-weight: 800;
}

.service-content {
  max-width: 980px;
}

.service-heading {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.service-heading svg {
  flex: none;
  color: var(--brand);
}

.service-heading p {
  margin: 0;
}

.service-content > h2,
.security-layers-section > h2 {
  margin: 0.8rem 0 0;
  font-size: clamp(1.8rem, 3.4vw, 2.9rem);
  letter-spacing: -0.055em;
  line-height: 1.15;
  text-transform: uppercase;
}

.service-intro,
.service-description,
.service-section > p,
.team-sport > p:not(.eyebrow),
.security-layers-section > p:not(.eyebrow) {
  max-width: 860px;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.85;
}

.service-intro {
  margin: 1rem 0 0;
  color: var(--ink);
  font-size: 1.05rem;
  font-weight: 600;
}

.service-description {
  margin: 0.75rem 0 0;
}

.service-section {
  margin-top: 2rem;
}

.service-section h3 {
  margin: 0;
}

.service-section > p {
  margin: 0.65rem 0 0;
}

.service-section ul {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 1rem;
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
}

.service-section ul li {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  color: var(--ink);
  font-size: 0.84rem;
  line-height: 1.6;
}

.service-section ul svg {
  flex: none;
  margin-top: 0.1rem;
  color: #22a66f;
}

.service-flow {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.65rem;
  list-style: none;
  margin: 1rem 0 0;
  padding: 0;
}

.service-flow li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.service-flow li span {
  padding: 0.65rem 0.8rem;
  border: 1px solid #d9e5fa;
  border-radius: 8px;
  background: #f3f7ff;
  color: var(--ink);
  font-size: 0.7rem;
  font-weight: 800;
}

.service-flow svg {
  color: var(--brand);
}

.service-outcome {
  margin-top: 2rem;
  padding: 1.25rem 1.4rem;
  border-left: 3px solid var(--brand);
  border-radius: 10px;
  background: #f3f6fd;
}

.service-outcome span {
  font-size: 0.65rem;
}

.service-outcome p {
  margin: 0.45rem 0 0;
  font-weight: 800;
  line-height: 1.65;
}

.service-detail-link {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1rem;
  color: var(--brand);
  font-size: 0.72rem;
  font-weight: 800;
  text-decoration: none;
}

.service-detail-link:hover svg {
  transform: translateX(3px);
}

.service-detail-link svg {
  transition: transform 180ms ease;
}

.team-sport,
.security-layers-section {
  margin-top: 2rem;
  padding: 2.25rem;
  border-radius: 16px;
}

.security-layers-section .eyebrow {
  margin-bottom: 1rem;
}

.team-sport {
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: 3rem;
  padding: 3rem;
  color: #e8eefb;
  background:
    radial-gradient(ellipse at 8% 0%, rgb(37 99 235 / 27%), transparent 38%),
    linear-gradient(135deg, #08142d, #101f3d 62%, #0b1730);
}

.team-sport .eyebrow {
  margin-bottom: 0.9rem;
  color: #8eb4ff;
}

.team-sport-heading h2 {
  margin: 0;
  color: #fff;
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.07em;
  line-height: 0.98;
}

.team-sport-mark {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
  color: #8eb4ff;
}

.team-sport-mark span {
  width: 1.5rem;
  height: 1px;
  background: linear-gradient(90deg, #477de1, rgb(142 180 255 / 20%));
}

.team-sport-copy {
  padding-left: 1.5rem;
  border-left: 1px solid rgb(142 180 255 / 32%);
}

.team-sport-principles {
  display: grid;
  gap: 0.8rem;
}

.team-sport-principles p {
  margin: 0;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 700;
}

.team-sport-emphasis {
  margin: 1.3rem 0 0 !important;
  color: #a9c8ff !important;
  font-weight: 700;
}

.team-sport-conclusion {
  margin: 1rem 0 0 !important;
  color: #b9c6dd !important;
}

.security-layers-section > p:not(.eyebrow) {
  margin: 0.8rem 0 0;
}

.layers-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.layer-card {
  position: relative;
  padding: 1rem;
  border: 1px solid var(--line);
  border-top: 2px solid var(--brand);
  border-radius: 10px;
  background: #fff;
}

.layer-card > p {
  margin: 0;
  font-size: 0.62rem;
}

.layer-card h3 {
  margin: 0.55rem 0 0;
  font-size: 0.78rem;
  line-height: 1.5;
  text-transform: uppercase;
}

.layer-card span {
  display: block;
  margin-top: 0.5rem;
  color: var(--muted);
  font-size: 0.73rem;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .layers-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .services-header {
    min-height: 70px;
    gap: 0.5rem;
  }

  .services-header nav {
    gap: 0.55rem;
  }

  .services-header nav a,
  .email-link {
    font-size: 0.68rem;
  }

  .services-hero {
    padding-top: 3.5rem;
  }

  .service-detail {
    grid-template-columns: 1fr;
    gap: 0.8rem;
    padding: 2.5rem 0;
  }

  .service-section ul,
  .layers-grid {
    grid-template-columns: 1fr;
  }

  .team-sport,
  .security-layers-section {
    padding: 1.4rem;
  }

  .team-sport {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .team-sport-copy {
    padding-left: 1rem;
  }
}
</style>
