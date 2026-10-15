<template>
  <div
    v-if="service"
    class="service-page"
    :class="{ 'is-dark': isDark, dark: isDark }"
  >
    <header class="detail-header">
      <div class="detail-header-inner">
        <a class="wordmark" :href="baseUrl" aria-label="OT9 Labs home">
          <span class="wordmark-main">OT<span>9</span></span>
          <span class="wordmark-sub">LABS</span>
        </a>

        <Menubar
          :model="navigation"
          class="detail-menubar"
          aria-label="Main navigation"
        >
          <template #buttonicon>
            <IconMenu2 :size="20" aria-hidden="true" />
          </template>
        </Menubar>

        <div class="detail-actions">
          <button
            class="theme-toggle"
            type="button"
            :aria-label="
              isDark ? 'Switch to light mode' : 'Switch to dark mode'
            "
            @click="toggleTheme"
          >
            <IconSun v-if="isDark" :size="19" aria-hidden="true" />
            <IconMoon v-else :size="19" aria-hidden="true" />
          </button>
          <a class="detail-email" href="mailto:nyx@ot9labs.com">
            <IconMail :size="17" aria-hidden="true" />
            Email Us
          </a>
        </div>
      </div>
    </header>

    <main>
      <section class="detail-hero">
        <div class="detail-grid" aria-hidden="true"></div>
        <div class="detail-container detail-hero-inner">
          <div class="detail-hero-copy">
            <a class="back-link" :href="`${baseUrl}#services`">
              <IconArrowLeft :size="16" aria-hidden="true" />
              All Services
            </a>
            <div class="detail-intro">
              <div class="detail-icon">
                <component :is="service.icon" :size="27" aria-hidden="true" />
              </div>
              <p class="detail-kicker">
                {{ service.number }} / {{ service.title }}
              </p>
            </div>
            <h1>{{ service.headline }}</h1>
            <p class="detail-lead">{{ service.intro }}</p>
            <p class="detail-description">{{ service.description }}</p>
            <a class="detail-primary-link" :href="`${baseUrl}#contact`">
              Talk to Our Team
              <IconArrowRight :size="17" aria-hidden="true" />
            </a>
          </div>

          <aside class="service-brief" aria-label="Service overview">
            <div class="brief-emblem" aria-hidden="true">
              <span class="brief-orbit brief-orbit-one"></span>
              <span class="brief-orbit brief-orbit-two"></span>
              <div class="brief-icon">
                <component :is="service.icon" :size="31" />
              </div>
              <span class="brief-number">{{ service.number }}</span>
            </div>
            <div class="brief-heading">
              <p>OT9 SERVICE BRIEF</p>
              <h2>{{ service.title }}</h2>
            </div>
            <div class="brief-divider"></div>
            <p class="brief-list-label">INSIDE THIS SERVICE</p>
            <ul class="brief-sections">
              <li v-for="section in service.sections" :key="section.label">
                <span>{{ section.label }}</span>
                <span class="brief-section-count">
                  {{
                    section.items
                      ? `${section.items.length} AREAS`
                      : `${section.flow.length} STEPS`
                  }}
                </span>
              </li>
            </ul>
            <span class="brief-index">OT9 / {{ service.number }}</span>
          </aside>
        </div>
      </section>

      <section
        v-for="(section, index) in service.sections"
        :key="section.label"
        class="detail-content"
        :class="{ 'detail-content-muted': index % 2 === 1 }"
      >
        <div class="detail-container">
          <div class="detail-section-top">
            <span class="detail-section-number" aria-hidden="true">
              {{ String(index + 1).padStart(2, "0") }}
            </span>
            <div class="detail-section-heading">
              <p class="detail-label">{{ section.label }}</p>
              <p v-if="section.intro">{{ section.intro }}</p>
            </div>
          </div>
          <ul v-if="section.items" class="detail-check-grid">
            <li v-for="item in section.items" :key="item">
              <IconCircleCheck :size="19" aria-hidden="true" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <ol v-if="section.flow" class="service-flow">
            <li v-for="(step, index) in section.flow" :key="step">
              <span class="flow-step-number">
                {{ String(index + 1).padStart(2, "0") }}
              </span>
              <span class="flow-step-label">{{ step }}</span>
              <IconArrowRight
                v-if="index < section.flow.length - 1"
                class="flow-step-arrow"
                :size="16"
                aria-hidden="true"
              />
            </li>
          </ol>
        </div>
      </section>

      <section class="detail-content">
        <div class="detail-container">
          <div class="detail-outcome">
            <span class="outcome-icon" aria-hidden="true">
              <IconCircleCheck :size="23" />
            </span>
            <div class="outcome-copy">
              <span class="outcome-kicker">THE OUTCOME</span>
              <p>{{ service.outcome }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import Menubar from "primevue/menubar";
import {
  IconArrowLeft,
  IconArrowRight,
  IconCircleCheck,
  IconMail,
  IconMenu2,
  IconMoon,
  IconSun,
} from "@tabler/icons-vue";
import { services } from "@/data/homepageServices";

const route = useRoute();
const baseUrl = import.meta.env.BASE_URL;
const navigation = [
  { label: "Home", url: `${baseUrl}#home` },
  { label: "About Us", url: `${baseUrl}#about` },
  { label: "Services", url: `${baseUrl}#services`, class: "is-current" },
  { label: "Team Sport", url: `${baseUrl}#team-sport` },
  { label: "Contact", url: `${baseUrl}#contact` },
];
const isDark = ref(
  typeof window !== "undefined" &&
    (window.localStorage.getItem("ot9-theme") === "dark" ||
      (!window.localStorage.getItem("ot9-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)),
);

const service = computed(() => {
  const match = services.find((item) => item.slug === route.params.slug);
  return match || services[0];
});

function toggleTheme() {
  isDark.value = !isDark.value;
  window.localStorage.setItem("ot9-theme", isDark.value ? "dark" : "light");
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
  font-family: "Montserrat", ui-sans-serif, system-ui, sans-serif;
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

.detail-menubar {
  border: 0;
  padding: 0;
  background: transparent;
}

.detail-menubar :deep(.p-menubar-root-list) {
  gap: 0.2rem;
}

.detail-menubar :deep(.p-menubar-item-link) {
  padding: 0.7rem 0.9rem;
  border-radius: 8px;
  color: #42506c;
  font-size: 0.84rem;
  font-weight: 600;
}

.detail-menubar :deep(.p-menubar-item-link:hover) {
  color: var(--brand);
  background: #f3f6fd;
}

.detail-menubar :deep(.p-menubar-item.is-current .p-menubar-item-link) {
  position: relative;
  color: var(--brand);
  background: #e8f0ff;
  font-weight: 800;
}

.detail-menubar :deep(.p-menubar-item.is-current .p-menubar-item-link)::after {
  position: absolute;
  right: 0.9rem;
  bottom: 0.32rem;
  left: 0.9rem;
  height: 3px;
  border-radius: 2px;
  background: currentColor;
  content: "";
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

.service-page.is-dark .detail-menubar :deep(.p-menubar-item-link) {
  color: #c1cbe0;
}

.service-page.is-dark .detail-menubar :deep(.p-menubar-item-link:hover),
.service-page.is-dark .detail-menubar :deep(.p-menubar-button:hover) {
  color: #fff;
  background: #1a2b4c;
}

.service-page.is-dark
  .detail-menubar
  :deep(.p-menubar-item.is-current .p-menubar-item-link) {
  color: #9fc0ff;
  background: #1a2e52;
}

.detail-hero {
  position: relative;
  background:
    radial-gradient(ellipse at 82% 34%, rgb(96 165 250 / 16%), transparent 34%),
    linear-gradient(135deg, #eef3fc 0%, #f8faff 54%, #edf3ff 100%);
  padding: 4rem 0 4.5rem;
  overflow: hidden;
}

.service-page.is-dark .detail-hero {
  background:
    radial-gradient(ellipse at 82% 34%, rgb(37 99 235 / 20%), transparent 34%),
    linear-gradient(135deg, #111d35 0%, #0b1428 54%, #101d38 100%);
}

.detail-grid {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M48 0H0V48' fill='none' stroke='%2396a9cc' stroke-opacity='.28' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 48px 48px;
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 18%,
    #000 82%,
    transparent 100%
  );
  opacity: 0.4;
}

.detail-container {
  width: min(100% - 3rem, 1180px);
  margin-inline: auto;
  position: relative;
  z-index: 1;
}

.detail-hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.75fr);
  align-items: center;
  gap: clamp(2.5rem, 7vw, 6rem);
}

.detail-hero-copy {
  max-width: 760px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--brand);
  text-decoration: none;
  font-weight: 700;
  transition: gap 180ms ease;
}

.back-link:hover {
  gap: 0.75rem;
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
  text-transform: uppercase;
  text-wrap: balance;
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
  box-shadow: 0 10px 24px rgb(37 99 235 / 22%);
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;
}

.detail-primary-link:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgb(37 99 235 / 30%);
}

.service-brief {
  position: relative;
  min-height: 380px;
  padding: 1.6rem;
  overflow: hidden;
  border: 1px solid rgb(148 163 184 / 24%);
  border-radius: 1.25rem;
  background: rgb(255 255 255 / 72%);
  box-shadow:
    0 24px 70px rgb(20 45 92 / 10%),
    inset 0 1px rgb(255 255 255 / 85%);
  backdrop-filter: blur(16px);
}

.service-brief::before {
  position: absolute;
  top: -5.5rem;
  right: -5rem;
  width: 14rem;
  height: 14rem;
  border: 1px solid rgb(37 99 235 / 12%);
  border-radius: 50%;
  content: "";
}

.service-page.is-dark .service-brief {
  border-color: rgb(148 163 184 / 18%);
  background: rgb(17 29 53 / 76%);
  box-shadow:
    0 24px 70px rgb(0 0 0 / 22%),
    inset 0 1px rgb(255 255 255 / 5%);
}

.brief-emblem {
  position: relative;
  display: grid;
  width: 8.3rem;
  height: 8.3rem;
  place-items: center;
  margin: 0 auto 1.4rem;
}

.brief-orbit {
  position: absolute;
  inset: 0.2rem;
  border: 1px solid rgb(37 99 235 / 22%);
  border-radius: 50%;
}

.brief-orbit-one {
  transform: rotate(-25deg) scaleX(0.72);
}

.brief-orbit-two {
  transform: rotate(35deg) scaleX(0.72);
}

.brief-icon {
  z-index: 1;
  display: grid;
  width: 4.2rem;
  height: 4.2rem;
  place-items: center;
  border: 1px solid rgb(37 99 235 / 22%);
  border-radius: 1.3rem;
  background: linear-gradient(145deg, rgb(255 255 255 / 92%), #e4edff);
  color: var(--brand);
  box-shadow: 0 10px 30px rgb(37 99 235 / 14%);
}

.service-page.is-dark .brief-icon {
  background: linear-gradient(145deg, #1a2c4e, #12203a);
}

.brief-number {
  position: absolute;
  right: 0.15rem;
  bottom: 0.7rem;
  color: rgb(37 99 235 / 28%);
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -0.08em;
}

.brief-heading p,
.brief-list-label {
  margin: 0;
  color: var(--brand);
  font-size: 0.64rem;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.brief-heading h2 {
  margin: 0.45rem 0 0;
  color: var(--ink);
  font-size: 1rem;
  letter-spacing: 0.02em;
  line-height: 1.5;
}

.brief-divider {
  height: 1px;
  margin: 1.15rem 0;
  background: linear-gradient(90deg, rgb(37 99 235 / 36%), transparent);
}

.brief-sections {
  display: grid;
  gap: 0.8rem;
  margin: 0.8rem 0 1.3rem;
  padding: 0;
  list-style: none;
}

.brief-sections li {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 0.8rem;
  color: var(--ink);
  font-size: 0.68rem;
  font-weight: 700;
}

.brief-section-count {
  flex: none;
  color: var(--soft-text);
  font-size: 0.58rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brief-index {
  position: absolute;
  right: 1.6rem;
  bottom: 1.25rem;
  color: var(--soft-text);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.detail-content {
  position: relative;
  padding: 4.5rem 0;
}

.detail-section-top {
  display: grid;
  grid-template-columns: 3.5rem minmax(0, 1fr);
  gap: 1rem;
  align-items: start;
  max-width: 820px;
}

.detail-section-heading {
  max-width: 720px;
}

.detail-section-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border: 1px solid rgb(37 99 235 / 20%);
  border-radius: 1rem;
  background: rgb(37 99 235 / 7%);
  color: var(--brand);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.04em;
}

.detail-label {
  margin: 0 0 0.7rem;
  color: var(--brand);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  font-weight: 800;
}

.detail-section-heading > .detail-label {
  margin: 0 0 0.7rem;
}

.detail-section-heading > p:not(.detail-label) {
  margin: 0.9rem 0 0;
  color: var(--soft-text);
  line-height: 1.8;
}

.service-flow {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
  align-items: stretch;
  gap: 0.85rem;
  list-style: none;
  margin: 2rem 0 0 4.5rem;
  padding: 0;
}

.service-flow li {
  display: flex;
  align-items: center;
  min-width: 0;
  min-height: 5rem;
  gap: 0.8rem;
  padding: 0.85rem 1rem;
  border: 1px solid rgb(148 163 184 / 20%);
  border-radius: 0.8rem;
  background: var(--page);
  box-shadow: 0 7px 20px rgb(20 45 92 / 5%);
}

.flow-step-number {
  display: grid;
  width: 1.7rem;
  height: 1.7rem;
  flex: none;
  place-items: center;
  border: 1px solid rgb(37 99 235 / 22%);
  border-radius: 0.55rem;
  background: rgb(37 99 235 / 8%);
  color: var(--brand);
  font-size: 0.6rem;
  font-weight: 800;
}

.flow-step-label {
  min-width: 0;
  color: var(--ink);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  line-height: 1.5;
  overflow-wrap: anywhere;
}

.flow-step-arrow {
  flex: none;
  margin-left: auto;
  padding: 0.25rem;
  box-sizing: content-box;
  border-radius: 50%;
  background: rgb(37 99 235 / 9%);
  color: var(--brand);
}

.detail-check-grid {
  list-style: none;
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.85rem;
  margin-left: 4.5rem;
}

.detail-check-grid li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  background: var(--page);
  border: 1px solid rgb(148 163 184 / 20%);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  color: var(--ink);
  line-height: 1.55;
  box-shadow: 0 8px 22px rgb(20 45 92 / 4%);
  transition:
    transform 180ms ease,
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.detail-check-grid li:hover {
  transform: translateY(-2px);
  border-color: rgb(37 99 235 / 32%);
  box-shadow: 0 12px 28px rgb(20 45 92 / 9%);
}

.service-page.is-dark .detail-check-grid li {
  background: #101b31;
  border-color: rgb(148 163 184 / 16%);
  box-shadow: 0 8px 22px rgb(0 0 0 / 10%);
}

.detail-check-grid svg {
  color: #4ade80;
  flex: none;
}

.detail-outcome {
  display: grid;
  grid-template-columns: 3.25rem minmax(0, 1fr);
  align-items: start;
  gap: 1.25rem;
  margin-top: 2rem;
  padding: 2rem 2.25rem;
  border: 1px solid rgb(148 163 184 / 20%);
  border-left: 3px solid var(--brand);
  border-radius: 1rem;
  background: var(--page);
  box-shadow: 0 10px 30px rgb(20 45 92 / 5%);
}

.outcome-copy {
  max-width: 740px;
}

.outcome-icon {
  display: grid;
  width: 3.1rem;
  height: 3.1rem;
  place-items: center;
  border: 1px solid rgb(37 99 235 / 18%);
  border-radius: 0.9rem;
  background: rgb(37 99 235 / 8%);
  color: var(--brand);
}

.outcome-kicker {
  display: block;
  color: var(--brand);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 800;
}

.detail-outcome p {
  margin: 0.65rem 0 0;
  color: var(--ink);
  font-size: clamp(1.25rem, 2.4vw, 1.9rem);
  line-height: 1.4;
  letter-spacing: -0.035em;
  font-weight: 700;
  text-wrap: balance;
}

.service-page.is-dark .detail-outcome {
  border-color: rgb(148 163 184 / 16%);
  border-left-color: #60a5fa;
  background: #101b31;
  box-shadow: 0 10px 30px rgb(0 0 0 / 12%);
}

.service-page.is-dark .outcome-icon {
  border-color: rgb(96 165 250 / 24%);
  background: rgb(37 99 235 / 14%);
  color: #93c5fd;
}

.service-page.is-dark .outcome-kicker {
  color: #93c5fd;
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

@media (max-width: 960px) {
  .detail-header-inner {
    grid-template-columns: 1fr auto;
    gap: 1rem;
  }

  .detail-menubar {
    width: 100%;
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: stretch;
    margin-top: -0.3rem;
  }

  .service-page.is-dark .detail-menubar :deep(.p-menubar-root-list) {
    border: 1px solid #293b5b;
    border-radius: 10px;
    background: #121f37;
    box-shadow: 0 16px 32px rgb(0 0 0 / 28%);
  }
}

@media (max-width: 900px) {
  .detail-hero-inner {
    grid-template-columns: 1fr;
  }

  .service-brief {
    width: min(100%, 480px);
    min-height: auto;
    justify-self: center;
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

  .detail-menubar {
    margin: 0 0 0.55rem;
  }

  .detail-check-grid,
  .attack-stages {
    grid-template-columns: 1fr;
  }

  .detail-hero {
    padding: 3rem 0;
  }

  .detail-hero-inner {
    gap: 2.5rem;
  }

  .detail-section-top {
    grid-template-columns: 2.75rem minmax(0, 1fr);
    gap: 0.75rem;
  }

  .detail-section-number {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.8rem;
  }

  .detail-check-grid,
  .service-flow {
    margin-left: 3.5rem;
  }

  .detail-content {
    padding: 3.25rem 0;
  }

  .detail-intro {
    align-items: flex-start;
  }
}

@media (max-width: 420px) {
  .detail-check-grid,
  .service-flow {
    margin-left: 0;
  }

  .service-flow li {
    gap: 0.6rem;
  }

  .flow-step-label {
    font-size: 0.68rem;
  }

  .service-brief {
    padding: 1.25rem;
  }

  .detail-outcome {
    grid-template-columns: 2.5rem minmax(0, 1fr);
    gap: 0.85rem;
    padding: 1.25rem;
  }

  .outcome-icon {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
  }

  .brief-sections li {
    font-size: 0.62rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .back-link,
  .detail-primary-link,
  .detail-check-grid li {
    transition: none;
  }
}
</style>
