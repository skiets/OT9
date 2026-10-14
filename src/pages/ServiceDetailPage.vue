<template>
  <div v-if="service" class="service-page" :class="{ 'is-dark': isDark, dark: isDark }">
    <header class="detail-header">
      <div class="detail-header-inner">
        <a class="wordmark" :href="baseUrl" aria-label="OT9 Labs home">
          <span class="wordmark-main">OT<span>9</span></span>
          <span class="wordmark-sub">LABS</span>
        </a>

        <nav class="detail-nav" aria-label="Main navigation">
          <a :href="`${baseUrl}#home`">Home</a>
          <a :href="`${baseUrl}#services`" aria-current="page">Services</a>
          <a :href="`${baseUrl}#approach`">Approach</a>
          <a :href="`${baseUrl}#contact`">Contact</a>
        </nav>

        <div class="detail-actions">
          <button class="theme-toggle" type="button"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
            <IconSun v-if="isDark" :size="19" aria-hidden="true" />
            <IconMoon v-else :size="19" aria-hidden="true" />
          </button>
          <a class="detail-email" href="mailto:mac@ot9labs.com">
            <IconMail :size="17" aria-hidden="true" />
            Email us
          </a>
        </div>
      </div>
    </header>

    <main>
      <section class="detail-hero">
        <div class="detail-grid" aria-hidden="true"></div>
        <div class="detail-container detail-hero-inner">
          <a class="back-link" :href="`${baseUrl}#services`">
            <IconArrowLeft :size="16" aria-hidden="true" />
            All services
          </a>
          <div class="detail-intro">
            <div class="detail-icon">
              <component :is="service.icon" :size="27" aria-hidden="true" />
            </div>
            <p class="detail-kicker">{{ service.number }} / {{ service.title }}</p>
          </div>
          <h1>{{ service.headline }}</h1>
          <p class="detail-lead">{{ service.intro }}</p>
          <p class="detail-description">{{ service.description }}</p>
          <a class="detail-primary-link" :href="`${baseUrl}#contact`">
            Talk to our team
            <IconArrowRight :size="17" aria-hidden="true" />
          </a>
        </div>
      </section>

      <template v-if="service.protectionAreas">
        <section class="detail-content">
          <div class="detail-container">
            <div class="detail-section-heading">
              <p class="detail-label">Protection includes</p>
              <h2>Protection built around the person</h2>
              <p>
                We connect cyber, digital, threat, and protective intelligence to help identify risks to high-value individuals and those around them.
              </p>
            </div>
            <ul class="detail-check-grid">
              <li v-for="item in service.protectionAreas" :key="item">
                <IconCircleCheck :size="19" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
            <div class="detail-outcome">
              <span>The outcome</span>
              <p>{{ service.outcome }}</p>
            </div>
          </div>
        </section>
      </template>

      <template v-else-if="service.trainingAreas">
        <section class="detail-content">
          <div class="detail-container">
            <div class="detail-section-heading">
              <p class="detail-label">The OT9 approach</p>
              <h2>Prepare teams to act when it matters</h2>
              <p>
                We develop teams that can maintain awareness, communicate clearly, and make disciplined decisions when conditions are uncertain and time is limited.
              </p>
            </div>
            <ol class="attack-stages readiness-stages">
              <li v-for="(stage, index) in service.readinessStages" :key="stage">
                <div class="attack-stage-card">
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="attack-stage-name">{{ stage }}</span>
                </div>
                <IconArrowRight v-if="index < service.readinessStages.length - 1" :size="15" aria-hidden="true" />
              </li>
            </ol>
          </div>
        </section>
        <section class="detail-content detail-content-muted">
          <div class="detail-container">
            <div class="detail-section-heading">
              <p class="detail-label">Training areas</p>
              <h2>Build capability across the team</h2>
            </div>
            <ul class="detail-check-grid">
              <li v-for="item in service.trainingAreas" :key="item">
                <IconCircleCheck :size="19" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
            <div class="detail-outcome">
              <span>The outcome</span>
              <p>{{ service.outcome }}</p>
            </div>
          </div>
        </section>
      </template>

      <template v-else-if="service.stages">
        <section class="detail-content">
          <div class="detail-container">
            <div class="detail-section-heading">
              <p class="detail-label">Our approach</p>
              <h2>A realistic view of your defenses</h2>
              <p>
                We simulate how a determined adversary could identify an opportunity, gain access, and work toward an objective.
              </p>
            </div>
            <ol class="attack-stages">
              <li v-for="(stage, index) in service.stages" :key="stage">
                <div class="attack-stage-card">
                  <span>{{ String(index + 1).padStart(2, '0') }}</span>
                  <span class="attack-stage-name">{{ stage }}</span>
                </div>
                <IconArrowRight v-if="index < service.stages.length - 1" :size="15" aria-hidden="true" />
              </li>
            </ol>
            <div class="detail-outcome">
              <span>The outcome</span>
              <p>{{ service.outcome }}</p>
            </div>
          </div>
        </section>
      </template>

      <template v-else-if="service.monitoring">
        <section class="detail-content">
          <div class="detail-container">
            <div class="detail-section-heading">
              <p class="detail-label">What we monitor</p>
              <h2>External risk and digital exposure</h2>
              <p>
                We help uncover the signals that traditional perimeter security often misses: lookalikes, impersonation, and compromised legitimacy.
              </p>
            </div>
            <ul class="detail-check-grid">
              <li v-for="item in service.monitoring" :key="item">
                <IconCircleCheck :size="19" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
            <div class="detail-outcome">
              <span>The outcome</span>
              <p>{{ service.outcome }}</p>
            </div>
          </div>
        </section>
      </template>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCircleCheck,
  IconMail,
  IconMoon,
  IconSun,
} from '@tabler/icons-vue'
import { services } from '@/data/homepageServices'

const route = useRoute()
const baseUrl = import.meta.env.BASE_URL
const isDark = ref(
  typeof window !== 'undefined' &&
    (window.localStorage.getItem('ot9-theme') === 'dark' ||
      (!window.localStorage.getItem('ot9-theme') &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)),
)

const service = computed(() => {
  const match = services.find((item) => item.slug === route.params.slug)
  return match || services[0]
})

function toggleTheme() {
  isDark.value = !isDark.value
  window.localStorage.setItem('ot9-theme', isDark.value ? 'dark' : 'light')
}
</script>

<style scoped>
.service-page {
  --ink: #0a1a45;
  --brand: #2563eb;
  --page: #ffffff;
  --mist: #f3f6fd;
  --soft-text: #69758b;
  color: var(--ink);
  font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
  background: var(--page);
  min-height: 100vh;
}

.service-page.is-dark {
  --ink: #e8eefb;
  --page: #0b1428;
  --mist: #111d35;
  --soft-text: #aab6ce;
  color-scheme: dark;
}

.detail-header {
  position: sticky;
  z-index: 20;
  top: 0;
  background: rgb(255 255 255 / 90%);
  border-bottom: 1px solid #e8edf6;
  backdrop-filter: blur(16px);
}

.service-page.is-dark .detail-header {
  background: rgb(11 20 40 / 90%);
  border-color: #26334b;
}

.detail-header-inner {
  width: min(100% - 3rem, 1280px);
  min-height: 78px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 2rem;
}

.wordmark {
  width: fit-content;
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

.detail-nav {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.detail-nav a {
  color: #42506c;
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 600;
}

.service-page.is-dark .detail-nav a {
  color: #c1cbe0;
}

.detail-actions {
  display: flex;
  justify-self: end;
  align-items: center;
  gap: 0.75rem;
}

.theme-toggle {
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--ink);
  cursor: pointer;
}

.detail-email {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--ink);
  text-decoration: none;
  font-size: 0.84rem;
  font-weight: 700;
}

.detail-hero {
  position: relative;
  background: linear-gradient(180deg, #e8eefb 0%, #f5f7fc 100%);
  padding: 4rem 0 3rem;
  overflow: hidden;
}

.service-page.is-dark .detail-hero {
  background: linear-gradient(180deg, #111d35 0%, #0b1428 100%);
}

.detail-grid {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M48 0H0V48' fill='none' stroke='%2396a9cc' stroke-opacity='.28' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 48px 48px;
  mask-image: linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
  opacity: 0.4;
}

.detail-container {
  width: min(100% - 3rem, 1180px);
  margin-inline: auto;
  position: relative;
  z-index: 1;
}

.detail-hero-inner {
  max-width: 820px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--brand);
  text-decoration: none;
  font-weight: 700;
}

.detail-intro {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1.5rem;
}

.detail-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.9rem;
  background: rgba(37, 99, 235, 0.12);
  color: var(--brand);
}

.detail-kicker {
  margin: 0;
  color: var(--brand);
  font-size: 0.76rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
}

.detail-hero h1 {
  margin: 1.1rem 0 0;
  font-size: clamp(2.5rem, 4.5vw, 4.5rem);
  line-height: 1.06;
  letter-spacing: -0.07em;
}

.detail-lead {
  margin: 1rem 0 0;
  font-size: 1.08rem;
  line-height: 1.85;
  max-width: 760px;
  color: var(--soft-text);
}

.detail-description {
  margin: 1rem 0 0;
  max-width: 760px;
  color: var(--soft-text);
  font-size: 0.96rem;
  line-height: 1.85;
}

.detail-primary-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  padding: 0.95rem 1.4rem;
  border-radius: 8px;
  background: linear-gradient(135deg, #38bdf8, #2563eb);
  color: white;
  text-decoration: none;
  font-weight: 700;
}

.detail-content {
  padding: 4rem 0;
}

.detail-section-heading {
  max-width: 720px;
}

.detail-label {
  margin: 0 0 0.7rem;
  color: var(--brand);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 800;
}

.detail-section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.detail-section-heading p {
  margin: 0.9rem 0 0;
  color: var(--soft-text);
  line-height: 1.8;
}

.detail-check-grid {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.detail-check-grid li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 14px;
  padding: 1rem 1.2rem;
  color: var(--ink);
}

.service-page.is-dark .detail-check-grid li {
  background: rgba(15, 23, 42, 0.4);
  border-color: rgba(148, 163, 184, 0.18);
}

.detail-check-grid svg {
  color: #4ade80;
  flex: none;
}

.detail-outcome {
  margin-top: 2rem;
  padding: 1.5rem 1.4rem;
  border-left: 3px solid var(--brand);
  border-radius: 12px;
  background: var(--mist);
}

.detail-outcome span {
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--brand);
  font-weight: 800;
}

.detail-outcome p {
  margin: 0.7rem 0 0;
  color: var(--soft-text);
  line-height: 1.8;
}

.attack-stages {
  list-style: none;
  padding: 0;
  margin: 2rem 0 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.attack-stages li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.attack-stage-card {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 100%;
  padding: 0.9rem 1rem;
  border: 1px solid rgba(148, 163, 184, 0.22);
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.02);
}

.service-page.is-dark .attack-stage-card {
  background: rgba(15, 23, 42, 0.35);
}

.attack-stage-card span:first-child {
  display: inline-flex;
  width: 2.1rem;
  height: 2.1rem;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background: rgba(37, 99, 235, 0.12);
  color: var(--brand);
  font-weight: 800;
}

.attack-stage-name {
  font-weight: 700;
  color: var(--ink);
}

.detail-content-muted {
  background: var(--mist);
}

@media (max-width: 900px) {
  .detail-header-inner {
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }

  .detail-nav {
    grid-column: 1 / -1;
    justify-self: center;
    margin-top: -0.35rem;
  }

  .detail-check-grid,
  .attack-stages {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 680px) {
  .detail-header-inner,
  .detail-container {
    width: min(100% - 2rem, 1280px);
  }

  .detail-header-inner {
    min-height: 68px;
  }

  .detail-nav {
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .detail-check-grid,
  .attack-stages {
    grid-template-columns: 1fr;
  }

  .detail-hero {
    padding-top: 3rem;
  }

  .detail-intro {
    align-items: flex-start;
  }
}
</style>
