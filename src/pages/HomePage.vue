<template>
    <div class="site-shell" :class="{ 'is-dark': isDark, dark: isDark }">
        <Toast position="top-right">
            <template #closeicon="{ class: closeIconClass }">
                <IconX :size="16" :class="closeIconClass" aria-hidden="true" />
            </template>
        </Toast>

        <header class="site-header">
            <div class="header-inner">
                <a class="wordmark" href="#" aria-label="OT9 Labs home">
                    <span class="wordmark-main">OT<span>9</span></span>
                    <span class="wordmark-sub">LABS</span>
                </a>

                <Menubar :model="navigation" class="site-menubar" aria-label="Main navigation">
                    <template #buttonicon>
                        <IconMenu2 :size="20" aria-hidden="true" />
                    </template>
                </Menubar>

                <div class="header-actions">
                    <Button type="button" class="theme-toggle" text rounded
                        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                        :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
                        <IconSun v-if="isDark" :size="19" aria-hidden="true" />
                        <IconMoon v-else :size="19" aria-hidden="true" />
                    </Button>
                    <Button as="a" href="mailto:mac@ot9labs.com" label="Email us"
                        :class="['header-cta', isDark ? 'text-black!' : 'text-white!']">
                        <template #icon>
                            <IconMail :size="17" aria-hidden="true" />
                        </template>
                    </Button>
                </div>
            </div>
        </header>

        <main>
            <section id="home" class="hero-section">
                <div class="hero-grid-art" aria-hidden="true"></div>
                <div class="section-container hero-grid">
                    <div class="hero-copy reveal-on-load">
                        <p class="eyebrow hero-eyebrow">
                            <span class="eyebrow-dot"></span>
                            OT9 LABS
                        </p>
                        <h1>Cybersecurity <span class="hero-highlight">beyond </span>the perimeter.</h1>
                        <p class="hero-description">
                            We help organizations and leaders uncover risks, strengthen defenses,
                            and protect what matters.
                        </p>
                        <div class="hero-actions">
                            <Button as="a" href="#contact" label="Talk to our team"
                                :class="['primary-button', isDark ? 'text-black!' : 'text-white!']">
                                <template #icon>
                                    <IconArrowRight :size="17" aria-hidden="true" />
                                </template>
                            </Button>
                            <Button as="a" href="#services" label="See our services" outlined
                                class="secondary-button dark:text-black!" />
                        </div>
                        <div class="hero-trust">
                            <IconShield class="trust-icon" :size="18" aria-hidden="true" />
                            <span>Know your risk. Test your defenses. Protect what matters.</span>
                        </div>
                    </div>

                    <div class="hero-visual reveal-on-load">
                        <div class="hero-orbit orbit-one" aria-hidden="true"></div>
                        <div class="hero-orbit orbit-two" aria-hidden="true"></div>
                        <div class="assessment-card">
                            <div class="assessment-heading">
                                <div>
                                    <p class="card-kicker">
                                        <span class="status-indicator"></span>
                                        EXTERNAL RISK SNAPSHOT
                                    </p>
                                    <h2>Digital exposure review</h2>
                                </div>
                                <span class="sample-badge">Sample</span>
                            </div>

                            <div class="finding-list">
                                <div class="finding-row">
                                    <IconAlertCircle class="finding-icon critical" :size="17" aria-hidden="true" />
                                    <span class="finding-name">Exposed executive credential</span>
                                    <Tag value="Critical" severity="danger" />
                                </div>
                                <div class="finding-row">
                                    <IconInfoCircle class="finding-icon medium" :size="17" aria-hidden="true" />
                                    <span class="finding-name">Lookalike domain detected</span>
                                    <Tag value="Medium" severity="warn" />
                                </div>
                                <div class="finding-row">
                                    <IconCircleCheck class="finding-icon pass" :size="17" aria-hidden="true" />
                                    <span class="finding-name">Executive profile protected</span>
                                    <Tag value="Pass" severity="success" />
                                </div>
                            </div>

                            <div class="progress-heading">
                                <span>Priority risks addressed</span>
                                <strong>72%</strong>
                            </div>
                            <ProgressBar :value="72" :show-value="false" class="remediation-progress"
                                aria-label="Remediation progress" />
                            <p class="progress-note">Illustrative sample of validated findings</p>
                        </div>
                        <p class="visual-caption">
                            <span class="caption-line"></span>
                            Know your risk. Protect what matters.
                            <span class="caption-line"></span>
                        </p>
                    </div>
                </div>
            </section>

            <section class="pillars-section" aria-label="Our impact">
                <div class="section-container pillars-grid">
                    <article class="pillar reveal-on-scroll">
                        <IconShield class="pillar-icon" :size="22" aria-hidden="true" />
                        <div>
                            <h2>Strategic leadership</h2>
                            <p>Make security a business priority with CISO-level guidance.</p>
                        </div>
                    </article>
                    <article class="pillar reveal-on-scroll">
                        <IconSettings class="pillar-icon" :size="22" aria-hidden="true" />
                        <div>
                            <h2>Adversary-led testing</h2>
                            <p>Test people, technology, and processes like an attacker would.</p>
                        </div>
                    </article>
                    <article class="pillar reveal-on-scroll">
                        <IconChartBar class="pillar-icon" :size="22" aria-hidden="true" />
                        <div>
                            <h2>Digital risk protection</h2>
                            <p>Find and act on exposure beyond your organization’s perimeter.</p>
                        </div>
                    </article>
                </div>
            </section>

            <section id="services" class="services-section">
                <div class="section-container">
                    <div class="services-heading">
                        <div class="section-heading services-heading-copy">
                            <p class="eyebrow"><span></span> How we protect what matters</p>
                            <h2>Security built for the risks beyond your perimeter</h2>
                            <p>
                                From cybersecurity leadership and adversary-led testing to
                                executive protection and team readiness, Our five integrated
                                capabilities help you see risk clearly and act with confidence.
                            </p>
                        </div>
                        <div class="laptop-shield-art" aria-hidden="true">
                            <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="services-art-halo" cx="101" cy="75" r="68" />
                                <circle class="services-art-orbit" cx="101" cy="75" r="63" />
                                <g class="services-laptop-float">
                                    <rect x="31" y="17" width="126" height="88" rx="10" fill="#F3F6FD" stroke="#9DB8EE"
                                        stroke-width="2" />
                                    <rect x="39" y="25" width="110" height="72" rx="5" fill="#E5EEFF" />
                                    <path
                                        d="M19 110.5C19 107.462 21.4624 105 24.5 105H163.5C166.538 105 169 107.462 169 110.5V112C169 118.075 164.075 123 158 123H30C23.9249 123 19 118.075 19 112V110.5Z"
                                        fill="#C9D9F8" stroke="#7E9FD9" stroke-width="2" />
                                    <path d="M84 111H104" stroke="#8AA5D4" stroke-width="3" stroke-linecap="round" />
                                    <g class="services-shield-float">
                                        <path
                                            d="M94 37L119 46V64C119 79.5 108.5 88.5 94 94C79.5 88.5 69 79.5 69 64V46L94 37Z"
                                            fill="#2563EB" />
                                        <path d="M83 64L91 72L106 56" stroke="white" stroke-width="4"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <g class="services-badge-float">
                                        <circle cx="165" cy="32" r="16" fill="#DBEAFE" />
                                        <path
                                            d="M165 23L174 26.5V33C174 38.5 170.2 41.7 165 44C159.8 41.7 156 38.5 156 33V26.5L165 23Z"
                                            fill="#2563EB" />
                                        <path d="M161.5 32.5L164 35L168.5 30" stroke="white" stroke-width="1.8"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                </g>
                                <circle class="services-art-spark spark-one" cx="27" cy="43" r="3" fill="#60A5FA" />
                                <circle class="services-art-spark spark-two" cx="174" cy="77" r="2.5" fill="#93C5FD" />
                                <path class="services-art-cross" d="M24 70H32M28 66V74" stroke="#60A5FA"
                                    stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>
                    </div>

                    <div class="services-grid">
                        <article v-for="service in services" :key="service.number"
                            class="service-item reveal-on-scroll">
                            <div class="service-card-heading">
                                <div class="service-icon-box">
                                    <component :is="service.icon" class="service-icon" :size="20" aria-hidden="true" />
                                </div>
                                <span class="service-number">{{ service.number }}</span>
                            </div>
                            <p class="service-kicker">{{ service.title }}</p>
                            <h3>{{ service.headline }}</h3>
                            <p class="service-description">{{ service.summary }}</p>
                            <a class="service-explore" :href="`/services/${service.slug}`">
                                Explore service
                                <IconArrowRight :size="16" aria-hidden="true" />
                            </a>
                        </article>
                    </div>

                    <aside class="services-commitment">
                        <p class="eyebrow"><span></span> Security is a team sport</p>
                        <h3>One security partner. Five layers of protection.</h3>
                        <p>
                            Technology can detect a threat. Intelligence can identify and
                            contextualize it. Leadership can make the decision. When a situation
                            changes in real time, people must know how to work together. OT9 Labs
                            bridges cybersecurity, intelligence, leadership, and action—helping
                            organizations anticipate threats, expose weaknesses, protect people,
                            and respond effectively when it matters most.
                        </p>
                        <p class="services-commitment-close">
                            We don’t wait for the breach. We identify exposure, challenge
                            assumptions, test defenses, protect people, and prepare teams—because
                            your adversary is already looking for weaknesses. We help you find them
                            first.
                        </p>
                    </aside>
                </div>
            </section>

            <section id="approach" class="approach-section">
                <div class="section-container">
                    <div class="section-heading approach-heading">
                        <div>
                            <p class="eyebrow"><span></span> From insight to action</p>
                            <h2>Know the risk. Make the next move.</h2>
                        </div>
                        <svg class="approach-art" viewBox="0 0 260 210" aria-hidden="true" focusable="false">
                            <defs>
                                <linearGradient id="laptop-screen" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stop-color="#12264c" />
                                    <stop offset="1" stop-color="#09152e" />
                                </linearGradient>
                                <linearGradient id="shield-fill" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stop-color="#60a5fa" />
                                    <stop offset="1" stop-color="#2563eb" />
                                </linearGradient>
                                <filter id="shield-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feDropShadow dx="0" dy="5" stdDeviation="5" flood-color="#2563eb"
                                        flood-opacity=".32" />
                                </filter>
                            </defs>
                            <circle class="art-halo" cx="137" cy="101" r="85" />
                            <circle class="art-orbit" cx="137" cy="101" r="75" />
                            <g class="laptop-float">
                                <rect x="49" y="33" width="157" height="111" rx="10" fill="#dbeafe" stroke="#8eb7f9"
                                    stroke-width="2" />
                                <rect x="57" y="41" width="141" height="95" rx="5" fill="url(#laptop-screen)" />
                                <path d="M43 146h169l13 16c1 2-.4 4-3 4H32c-2.6 0-4-2-3-4l14-16Z" fill="#a9c7f5"
                                    stroke="#7ca8ea" stroke-width="2" />
                                <path d="M43 146h169" stroke="#eef6ff" stroke-width="2" stroke-linecap="round" />
                                <rect x="103" y="152" width="54" height="4" rx="2" fill="#7ca8ea" />
                                <circle cx="127.5" cy="37" r="1.4" fill="#6ea5fa" />
                                <path d="M69 59h38M69 67h22" stroke="#35527e" stroke-width="3" stroke-linecap="round" />
                                <circle cx="183" cy="59" r="4" fill="#34d399" />
                                <g class="shield-float" filter="url(#shield-shadow)">
                                    <path d="M128 66 155 76v22c0 20-12 33-27 41-15-8-27-21-27-41V76l27-10Z"
                                        fill="url(#shield-fill)" stroke="#bfdbfe" stroke-width="2" />
                                    <path d="m116 98 8 8 17-19" fill="none" stroke="#fff" stroke-width="5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                            </g>
                            <circle class="art-spark spark-one" cx="49" cy="57" r="4" />
                            <circle class="art-spark spark-two" cx="213" cy="118" r="3" />
                            <path class="art-spark spark-cross" d="M213 48v12m-6-6h12" />
                        </svg>
                        <p class="approach-intro">
                            We work with your team to uncover the risks that matter and turn clear
                            findings into practical next steps.
                        </p>
                    </div>

                    <div class="steps-grid">
                        <article v-for="(step, index) in steps" :key="step.title" class="step-item reveal-on-scroll">
                            <div class="step-meta">
                                <div class="step-number">{{ String(index + 1).padStart(2, "0") }}</div>
                                <span>Step {{ String(index + 1).padStart(2, "0") }}</span>
                            </div>
                            <h3>{{ step.title }}</h3>
                            <p>{{ step.description }}</p>
                        </article>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact-section">
                <div class="section-container contact-grid">
                    <div class="contact-copy">
                        <p class="eyebrow eyebrow-light"><span></span> Start a conversation</p>
                        <h2>Tell us what you need to protect</h2>
                        <p>
                            Tell us a little about your priorities. We’ll get back to you within one
                            business day with a clear next step.
                        </p>
                        <a href="mailto:mac@ot9labs.com" class="contact-email">
                            mac@ot9labs.com
                            <IconArrowUpRight :size="16" aria-hidden="true" />
                        </a>
                        <div class="contact-assurance">
                            <IconLock :size="15" aria-hidden="true" />
                            Your information stays confidential.
                        </div>
                    </div>

                    <form class="contact-form" novalidate @submit.prevent="submitContact">
                        <div class="form-heading">
                            <h3>How can we help?</h3>
                            <p>Share a few details and our team will be in touch.</p>
                        </div>

                        <div class="form-field">
                            <label for="contact-name">Name</label>
                            <InputText id="contact-name" v-model="form.name" autocomplete="name"
                                placeholder="Your name" />
                        </div>
                        <div class="form-field">
                            <label for="contact-email">Work email</label>
                            <InputText id="contact-email" v-model="form.email" type="email" autocomplete="email"
                                placeholder="you@company.com" />
                        </div>
                        <div class="form-field">
                            <label for="contact-service">What do you need help with?</label>
                            <Select input-id="contact-service" v-model="form.service" :options="serviceOptions"
                                placeholder="Select a service" append-to="self">
                                <template #dropdownicon>
                                    <IconChevronDown :size="16" aria-hidden="true" />
                                </template>
                            </Select>
                        </div>
                        <div class="form-field">
                            <label for="contact-message">Message</label>
                            <Textarea id="contact-message" v-model="form.message" rows="4"
                                placeholder="Tell us a little about what you need." />
                        </div>
                        <div class="form-actions">
                            <Button type="submit" label="Continue with email" class="form-submit">
                                <template #icon>
                                    <IconMail :size="17" aria-hidden="true" />
                                </template>
                            </Button>
                        </div>
                        <p class="form-privacy">
                            <IconLock :size="13" aria-hidden="true" />
                            Email opens in your mail app. Review and send it to submit your enquiry.
                        </p>
                    </form>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <div class="section-container footer-inner">
                <a class="wordmark footer-wordmark" href="#" aria-label="OT9 Labs home">
                    <span class="wordmark-main">OT<span>9</span></span>
                    <span class="wordmark-sub">LABS</span>
                </a>
                <p>© {{ currentYear }} OT9 Labs. All rights reserved.</p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Menubar from 'primevue/menubar'
import ProgressBar from 'primevue/progressbar'
import Select from 'primevue/select'
import Tag from 'primevue/tag'
import Textarea from 'primevue/textarea'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import {
    IconAlertCircle,
    IconArrowRight,
    IconArrowUpRight,
    IconChartBar,
    IconChevronDown,
    IconCircleCheck,
    IconInfoCircle,
    IconLock,
    IconMail,
    IconMenu2,
    IconMoon,
    IconSettings,
    IconShield,
    IconSun,
    IconX,
} from '@tabler/icons-vue'
import { services } from '@/data/homepageServices'

const toast = useToast()
const activeSection = ref('home')
const isDark = ref(
    typeof window !== 'undefined' &&
    (window.localStorage.getItem('ot9-theme') === 'dark' ||
        (!window.localStorage.getItem('ot9-theme') &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)),
)
const currentYear = new Date().getFullYear()
let revealObserver
let sectionObserver
const navigation = computed(() =>
    [
        { label: 'Home', url: '#home', id: 'home' },
        { label: 'Services', url: '#services', id: 'services' },
        { label: 'Approach', url: '#approach', id: 'approach' },
        { label: 'Contact', url: '#contact', id: 'contact' },
    ].map((item) => ({
        ...item,
        class: activeSection.value === item.id ? 'is-current' : '',
    })),
)
const steps = [
    {
        title: 'Understand',
        description: 'We learn your priorities, environment, and the people and assets you need to protect.',
    },
    {
        title: 'Identify',
        description: 'We examine your security program and test how an adversary could reach your objectives.',
    },
    {
        title: 'Prioritize',
        description: 'We validate findings and explain their real-world impact in plain language.',
    },
    {
        title: 'Respond',
        description: 'We help you choose practical next steps and strengthen readiness where it matters.',
    },
]
const serviceOptions = [
    'CISO as a service',
    'Red team operations',
    'Digital risk protection',
    'VIP protection',
    'Operational readiness & small unit tactics',
    'Something else',
]
const form = reactive({
    name: '',
    email: '',
    service: null,
    message: '',
})
const missingFields = computed(() =>
    [
        ['name', 'name'],
        ['email', 'work email'],
        ['service', 'service'],
        ['message', 'message'],
    ]
        .filter(([key]) => !String(form[key] ?? '').trim())
        .map(([, label]) => label),
)

function toggleTheme() {
    isDark.value = !isDark.value
    window.localStorage.setItem('ot9-theme', isDark.value ? 'dark' : 'light')
}

function validateContact() {
    const missing = missingFields.value
    if (missing.length) {
        toast.add({
            severity: 'warn',
            summary: 'Please complete the form',
            detail: `Missing: ${missing.join(', ')}`,
            life: 4000,
        })
        return false
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        toast.add({
            severity: 'warn',
            summary: 'Please check your email',
            detail: 'Enter a valid email address so we can get back to you.',
            life: 4000,
        })
        return false
    }

    return true
}

function getContactContents() {
    return [
        'New OT9 Labs enquiry',
        '',
        `Name: ${form.name.trim()}`,
        `Work email: ${form.email.trim()}`,
        `Service: ${form.service}`,
        '',
        'Message:',
        form.message.trim(),
    ].join('\n')
}

function submitContact() {
    if (!validateContact()) return

    const subject = encodeURIComponent(`OT9 Labs enquiry: ${form.service}`)
    const body = encodeURIComponent(getContactContents())
    window.location.href = `mailto:mac@ot9labs.com?subject=${subject}&body=${body}`

    toast.add({
        severity: 'info',
        summary: 'Email draft prepared',
        detail: 'Review the message in your email app, then send it to complete your enquiry.',
        life: 6000,
    })
}

onMounted(() => {
    const revealElements = document.querySelectorAll('.site-shell .reveal-on-scroll')
    const supportsIntersectionObserver = 'IntersectionObserver' in window

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !supportsIntersectionObserver) {
        revealElements.forEach((element) => element.classList.add('is-visible'))
    } else {
        revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -35px 0px' },
        )
        revealElements.forEach((element) => revealObserver.observe(element))
    }

    if (supportsIntersectionObserver) {
        const sectionOrder = ['home', 'services', 'approach', 'contact']
        const intersectingSections = new Set()
        sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        intersectingSections.add(entry.target.id)
                    } else {
                        intersectingSections.delete(entry.target.id)
                    }
                })

                activeSection.value = ''
                sectionOrder.forEach((sectionId) => {
                    if (intersectingSections.has(sectionId)) activeSection.value = sectionId
                })
            },
            { threshold: 0, rootMargin: '-15% 0px -70% 0px' },
        )
        document.querySelectorAll('#home, #services, #approach, #contact').forEach((section) => {
            sectionObserver.observe(section)
        })
    }
})

onBeforeUnmount(() => {
    revealObserver?.disconnect()
    sectionObserver?.disconnect()
})
</script>

<style scoped>
.site-shell {
    --ink: #0a1a45;
    --brand: #2563eb;
    --mist: #f3f6fd;
    --page: #ffffff;
    --soft-text: #69758b;
    --line: #e6ebf3;
    color: var(--ink);
    font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
    overflow: clip;
    background: var(--page);
    transition: color 220ms ease, background-color 220ms ease;
}

.site-shell.is-dark {
    --ink: #e8eefb;
    --mist: #111d35;
    --page: #0b1428;
    --soft-text: #aab6ce;
    --line: #25324a;
    color-scheme: dark;
}

.site-shell :deep(.p-toast) {
    font-family: 'Montserrat', ui-sans-serif, system-ui, sans-serif;
}

.section-container {
    width: min(100% - 3rem, 1280px);
    margin-inline: auto;
}

.site-header {
    position: sticky;
    z-index: 20;
    top: 0;
    background: rgb(255 255 255 / 90%);
    border-bottom: 1px solid #e8edf6;
    backdrop-filter: blur(16px);
}

.header-inner {
    width: min(100% - 3rem, 1280px);
    min-height: 78px;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 2rem;
}

.header-actions {
    display: flex;
    justify-self: end;
    align-items: center;
    gap: 0.5rem;
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

.site-menubar {
    border: 0;
    padding: 0;
    background: transparent;
}

.site-menubar :deep(.p-menubar-root-list) {
    gap: 0.2rem;
}

.site-menubar :deep(.p-menubar-item-link) {
    padding: 0.7rem 0.9rem;
    border-radius: 8px;
    color: #42506c;
    font-size: 0.84rem;
    font-weight: 600;
}

.site-menubar :deep(.p-menubar-item-link:hover) {
    color: var(--brand);
    background: #f3f6fd;
}

.site-menubar :deep(.p-menubar-item.is-current .p-menubar-item-link) {
    position: relative;
    color: var(--brand);
    background: #e8f0ff;
    font-weight: 800;
}

.site-menubar :deep(.p-menubar-item.is-current .p-menubar-item-link)::after {
    position: absolute;
    right: 0.9rem;
    bottom: 0.32rem;
    left: 0.9rem;
    height: 3px;
    border-radius: 2px;
    background: currentColor;
    content: '';
}

.theme-toggle {
    width: 42px;
    height: 42px;
    color: var(--ink);
    border-radius: 50%;
}

.theme-toggle:hover {
    background: rgb(37 99 235 / 9%);
}

.header-cta {
    border-radius: 8px;
    font-size: 0.84rem;
    font-weight: 700;
}

.hero-section {
    position: relative;
    isolation: isolate;
    padding: 6.6rem 0 5rem;
    background: linear-gradient(180deg, #e8eefb 0%, #f5f7fc 100%);
    transition: background 220ms ease;
}

.hero-grid-art {
    position: absolute;
    z-index: -1;
    inset: 0;
    pointer-events: none;
    opacity: 0.62;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M48 0H0V48' fill='none' stroke='%2396a9cc' stroke-opacity='.28' stroke-width='1'/%3E%3C/svg%3E");
    background-position: center top;
    background-size: 48px 48px;
    mask-image: linear-gradient(90deg, transparent 0%, #000 18%, #000 82%, transparent 100%);
}

.hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.96fr) minmax(0, 0.84fr);
    align-items: center;
    gap: clamp(3rem, 8vw, 8rem);
}

.hero-copy {
    max-width: 630px;
}

.eyebrow {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin: 0 0 1.2rem;
    color: var(--brand);
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.eyebrow>span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: currentColor;
}

.hero-copy h1,
.section-heading h2,
.contact-copy h2 {
    margin: 0;
    color: var(--ink);
    font-size: clamp(2.8rem, 5.2vw, 4.6rem);
    font-weight: 800;
    letter-spacing: -0.075em;
    line-height: 1.06;
}

.hero-highlight {
    color: var(--brand);
}

.hero-eyebrow {
    width: fit-content;
    padding: 0.5rem 0.78rem;
    border: 1px solid rgb(37 99 235 / 16%);
    border-radius: 999px;
    background: rgb(255 255 255 / 72%);
    letter-spacing: 0.1em;
}

.eyebrow-dot,
.status-indicator {
    position: relative;
    width: 7px;
    height: 7px;
    flex: none;
    border-radius: 50%;
    background: #2dbb7f;
}

.eyebrow-dot::after,
.status-indicator::after {
    position: absolute;
    inset: -4px;
    border: 1px solid currentColor;
    border-radius: inherit;
    color: #2dbb7f;
    content: '';
    animation: status-pulse 2s ease-out infinite;
}

.hero-description {
    max-width: 560px;
    margin: 1.5rem 0 0;
    color: #57647d;
    font-size: 1.04rem;
    line-height: 1.85;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
    margin-top: 2rem;
}

.hero-actions :deep(.p-button) {
    min-height: 48px;
    border-radius: 8px;
    padding-inline: 1.2rem;
    font-size: 0.88rem;
    font-weight: 700;
}

.hero-actions :deep(.secondary-button) {
    color: var(--ink);
    border-color: #cbd4e4;
    background: #fff;
}

.hero-actions :deep(.secondary-button:hover) {
    color: var(--brand);
    border-color: var(--brand);
    background: #fff;
}

.hero-trust {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    margin-top: 2rem;
    color: #6e7a91;
    font-size: 0.77rem;
    font-weight: 600;
}

.trust-icon {
    color: var(--brand);
}

.hero-visual {
    position: relative;
    isolation: isolate;
    max-width: 540px;
    margin-inline: auto;
    padding: 1rem 0.5rem 0;
}

.hero-orbit {
    position: absolute;
    z-index: -1;
    top: calc(50% - 0.6rem);
    left: 50%;
    border: 1px solid rgb(37 99 235 / 16%);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
}

.orbit-one {
    width: 490px;
    height: 490px;
}

.orbit-two {
    width: 590px;
    height: 590px;
    border-style: dashed;
    animation: orbit-turn 48s linear infinite;
}

.assessment-card {
    position: relative;
    z-index: 1;
    padding: 1.65rem;
    border: 1px solid #253963;
    border-radius: 18px;
    color: #fff;
    background: var(--ink);
    box-shadow: 0 24px 64px rgb(10 26 69 / 16%);
    animation: card-float 5s ease-in-out 900ms infinite;
}

.assessment-heading {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1.4rem;
    border-bottom: 1px solid rgb(255 255 255 / 12%);
}

.card-kicker {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0 0.5rem;
    color: #8ea4d3;
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.16em;
}

.assessment-heading h2 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: -0.03em;
}

.sample-badge {
    padding: 0.35rem 0.62rem;
    border: 1px solid rgb(160 182 226 / 36%);
    border-radius: 999px;
    color: #c4d4f5;
    font-size: 0.65rem;
    font-weight: 700;
}

.finding-list {
    display: grid;
    gap: 0.15rem;
    padding: 0.65rem 0;
}

.finding-row {
    min-height: 54px;
    display: grid;
    grid-template-columns: 1rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.65rem;
    border-bottom: 1px solid rgb(255 255 255 / 8%);
}

.finding-row:last-child {
    border-bottom: 0;
}

.finding-icon {
    flex: none;
}

.finding-icon.critical {
    color: #ff8585;
}

.finding-icon.medium {
    color: #ffc966;
}

.finding-icon.pass {
    color: #66d8a2;
}

.finding-name {
    min-width: 0;
    color: #e3e9f7;
    font-size: 0.76rem;
    font-weight: 500;
}

.finding-row :deep(.p-tag) {
    padding: 0.25rem 0.48rem;
    font-size: 0.63rem;
    font-weight: 700;
}

.progress-heading {
    display: flex;
    justify-content: space-between;
    margin: 1.05rem 0 0.65rem;
    color: #c4cee2;
    font-size: 0.73rem;
}

.progress-heading strong {
    color: #fff;
    font-size: 0.77rem;
}

.remediation-progress {
    overflow: hidden;
    height: 7px;
    border-radius: 99px;
    background: #26385f;
}

.remediation-progress :deep(.p-progressbar-value) {
    position: relative;
    overflow: hidden;
    border-radius: inherit;
    background: #4f8aff;
    transform-origin: left center;
    animation: progress-fill 1.6s cubic-bezier(0.2, 0.75, 0.25, 1) 500ms both;
}

.remediation-progress :deep(.p-progressbar-value::after) {
    position: absolute;
    inset: 0 auto 0 -55%;
    width: 45%;
    background: linear-gradient(90deg, transparent, rgb(255 255 255 / 68%), transparent);
    content: '';
    animation: progress-shimmer 2.1s ease-in-out 1.4s infinite;
}

.progress-note {
    margin: 0.55rem 0 0;
    color: #91a1c3;
    font-size: 0.65rem;
}

.visual-caption {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin: 1.1rem 0 0;
    color: #77839a;
    font-size: 0.68rem;
    font-weight: 600;
}

.caption-line {
    width: 24px;
    height: 1px;
    background: #d3dbe9;
}

.pillars-section {
    border-top: 1px solid #e6ebf3;
    border-bottom: 1px solid #e6ebf3;
}

.pillars-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding-block: 1.65rem;
}

.pillar {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 0.6rem 2rem;
}

.pillar:first-child {
    padding-left: 0;
}

.pillar+.pillar {
    border-left: 1px solid #e2e7f0;
}

.pillar-icon {
    flex: none;
    margin-top: 0.1rem;
    color: var(--brand);
}

.pillar h2 {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: -0.025em;
}

.pillar p {
    margin: 0.4rem 0 0;
    color: #69758b;
    font-size: 0.75rem;
    line-height: 1.6;
}

.services-section,
.approach-section {
    padding-block: 6.5rem;
}

.section-heading {
    max-width: 700px;
}

.services-heading {
    display: flex;
    max-width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.laptop-shield-art {
    flex: 0 0 230px;
    width: 230px;
    color: var(--brand);
}

.laptop-shield-art svg {
    display: block;
    width: 100%;
    height: auto;
    overflow: visible;
}

.services-art-halo {
    fill: #dbeafe;
    opacity: 0.7;
}

.site-shell.is-dark .services-art-halo {
    fill: #1b3155;
}

.services-art-orbit {
    fill: none;
    stroke: #93c5fd;
    stroke-width: 1.3;
    stroke-dasharray: 3 6;
    transform-box: view-box;
    transform-origin: 101px 75px;
    animation: orbit-rotate 24s linear infinite;
}

.services-laptop-float {
    transform-box: fill-box;
    transform-origin: center;
    animation: laptop-hover 4.8s ease-in-out infinite;
}

.services-shield-float {
    transform-box: fill-box;
    transform-origin: center;
    animation: shield-hover 3.2s ease-in-out infinite;
}

.services-badge-float {
    transform-box: fill-box;
    transform-origin: center;
    animation: shield-hover 3.2s ease-in-out 0.4s infinite;
}

.services-art-spark,
.services-art-cross {
    transform-box: fill-box;
    transform-origin: center;
    animation: spark-pulse 2.4s ease-in-out infinite;
}

.services-art-spark.spark-two {
    animation-delay: 0.8s;
}

.services-art-cross {
    animation-delay: 1.2s;
}

.services-heading-copy {
    flex: 1;
}

.section-heading h2 {
    font-size: clamp(2.1rem, 4vw, 3.25rem);
    letter-spacing: -0.065em;
}

.section-heading>p:last-child {
    margin: 1rem 0 0;
    color: #69758b;
    font-size: 0.94rem;
    line-height: 1.7;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    column-gap: 2.2rem;
    row-gap: 2.8rem;
    margin-top: 3rem;
}

.services-commitment {
    margin-top: 3.5rem;
    padding: 2rem 2.2rem;
    border: 1px solid var(--line);
    border-left: 3px solid var(--brand);
    border-radius: 10px;
    background: var(--mist);
}

.services-commitment .eyebrow {
    margin: 0;
}

.services-commitment h3 {
    margin: 0.75rem 0 0;
    font-size: clamp(1.35rem, 2.5vw, 1.9rem);
    font-weight: 800;
    letter-spacing: -0.045em;
}

.services-commitment>p:not(.eyebrow) {
    max-width: 900px;
    margin: 0.8rem 0 0;
    color: var(--soft-text);
    font-size: 0.84rem;
    line-height: 1.8;
}

.services-commitment-close {
    color: var(--ink) !important;
    font-weight: 800;
}

.service-item {
    position: relative;
    overflow: hidden;
    display: flex;
    min-height: 250px;
    height: 100%;
    flex-direction: column;
    padding: 1.35rem 1.25rem 1.25rem;
    border: 1px solid #e3e9f3;
    border-top: 2px solid var(--ink);
    border-radius: 10px;
    background: var(--page);
    box-shadow: 0 4px 12px rgb(10 26 69 / 3%);
    transition: transform 260ms cubic-bezier(0.2, 0.75, 0.25, 1), border-color 260ms ease, box-shadow 260ms ease, background-color 220ms ease;
}

.service-item:hover {
    z-index: 1;
    transform: translateY(-7px) scale(1.05);
    border-color: #b9cdf4;
    border-top-color: var(--brand);
    box-shadow: 0 22px 42px rgb(10 26 69 / 15%);
}

.service-card-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.service-number {
    color: #9aabc9;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.12em;
}

.service-kicker {
    margin: 0.15rem 0 0.55rem !important;
    color: var(--brand) !important;
    font-size: 0.64rem !important;
    font-weight: 800;
    letter-spacing: 0.13em;
}

.service-item h3 {
    max-width: none;
    font-size: 1.2rem;
    line-height: 1.3;
}

.service-description {
    max-width: none;
    margin-top: 0.7rem;
    color: var(--soft-text);
    font-size: 0.76rem;
    line-height: 1.75;
}

.service-explore {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-top: auto;
    padding-top: 1.2rem;
    color: var(--brand);
    font-size: 0.76rem;
    font-weight: 800;
    text-decoration: none;
}

.service-explore svg {
    transition: transform 180ms ease;
}

.service-explore:hover svg {
    transform: translateX(4px);
}

.service-explore:focus-visible {
    border-radius: 3px;
    outline: 3px solid #60a5fa;
    outline-offset: 4px;
}

.service-icon-box {
    display: inline-flex;
    flex: none;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(37 99 235 / 12%);
    border-radius: 9px;
    color: var(--brand);
    background: #f0f5ff;
    transition: transform 260ms cubic-bezier(0.2, 0.75, 0.25, 1), color 260ms ease, background-color 260ms ease;
}

.service-icon {
    display: block;
    width: 20px;
    height: 20px;
}

.service-item:hover .service-icon-box {
    transform: translateY(-2px) scale(1.12);
    color: #fff;
    background: var(--brand);
}

.service-item h3,
.step-item h3 {
    margin: 0;
    color: var(--ink);
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: -0.035em;
}

.service-item p,
.step-item p {
    max-width: 350px;
    margin: 0.65rem 0 0;
    color: #69758b;
    font-size: 0.82rem;
    line-height: 1.8;
}

.approach-section {
    background: var(--mist);
}

.approach-section .section-heading {
    max-width: 100%;
}

.approach-heading {
    position: relative;
    min-height: 190px;
    padding-right: 250px;
}

.approach-art {
    position: absolute;
    top: -1.25rem;
    right: 0.5rem;
    width: 225px;
    height: auto;
    overflow: visible;
}

.art-halo {
    fill: #dbeafe;
    opacity: 0.7;
}

.site-shell.is-dark .art-halo {
    fill: #1b3155;
}

.art-orbit {
    fill: none;
    stroke: #93c5fd;
    stroke-width: 1.5;
    stroke-dasharray: 3 7;
    transform-origin: 137px 101px;
    animation: orbit-rotate 24s linear infinite;
}

.laptop-float {
    transform-origin: 130px 105px;
    animation: laptop-hover 4.8s ease-in-out infinite;
}

.shield-float {
    transform-origin: 128px 98px;
    animation: shield-hover 3.2s ease-in-out infinite;
}

.art-spark {
    fill: #38bdf8;
    animation: spark-pulse 2.4s ease-in-out infinite;
}

.spark-two {
    animation-delay: 0.8s;
}

.spark-cross {
    fill: none;
    stroke: #60a5fa;
    stroke-width: 2;
    stroke-linecap: round;
    animation: spark-pulse 2.4s ease-in-out 1.2s infinite;
}

.approach-intro {
    max-width: 600px;
    margin: 1rem 0 0;
    color: #69758b;
    font-size: 0.9rem;
    line-height: 1.75;
}

.steps-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1.15rem;
    margin-top: 3.1rem;
}

.step-item {
    min-height: 220px;
    padding: 1.4rem;
    border: 1px solid #e0e7f2;
    border-top: 2px solid transparent;
    border-radius: 12px;
    background: var(--page);
    box-shadow: 0 8px 24px rgb(10 26 69 / 4%);
    transition: transform 240ms cubic-bezier(0.2, 0.75, 0.25, 1), border-color 240ms ease, box-shadow 240ms ease;
}

.step-item:hover {
    transform: translateY(-5px);
    border-top-color: var(--brand);
    box-shadow: 0 18px 34px rgb(10 26 69 / 10%);
}

.step-meta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
}

.step-meta>span {
    color: #8794aa;
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
}

.step-number {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    flex: none;
    border: 1px solid #dce7fc;
    border-radius: 12px;
    color: var(--brand);
    background: #edf3ff;
    font-size: 0.78rem;
    font-weight: 800;
}

.contact-section {
    padding-block: 6.5rem;
    color: #fff;
    background: var(--ink);
}

.contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(360px, 0.72fr);
    align-items: center;
    gap: clamp(3rem, 10vw, 9rem);
}

.eyebrow-light {
    color: #8eb4ff;
}

.contact-copy h2 {
    max-width: 550px;
    color: #fff;
    font-size: clamp(2.5rem, 4.5vw, 4rem);
}

.contact-copy>p:not(.eyebrow) {
    max-width: 480px;
    margin: 1.35rem 0 0;
    color: #c2cce0;
    font-size: 0.95rem;
    line-height: 1.85;
}

.contact-email {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 1.6rem;
    color: #a9c8ff;
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
}

.contact-email:hover {
    color: #fff;
}

.contact-email span {
    font-size: 0.75rem;
}

.contact-assurance {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    margin-top: 3.2rem;
    color: #9facc5;
    font-size: 0.74rem;
}

.contact-assurance svg {
    color: #7da7f7;
}

.contact-assurance svg,
.form-privacy svg {
    flex: none;
}

.contact-form {
    padding: 2rem;
    border: 1px solid #e8edf6;
    border-radius: 18px;
    color: var(--ink);
    background: #fff;
    box-shadow: 0 28px 70px rgb(0 0 0 / 16%);
}

.form-heading {
    margin-bottom: 1.5rem;
}

.form-heading h3 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: -0.045em;
}

.form-heading p {
    margin: 0.4rem 0 0;
    color: #748097;
    font-size: 0.76rem;
}

.form-field {
    display: grid;
    gap: 0.45rem;
    margin-top: 1rem;
}

.form-field label {
    color: #273554;
    font-size: 0.72rem;
    font-weight: 700;
}

.form-field :deep(.p-inputtext),
.form-field :deep(.p-select),
.form-field :deep(.p-textarea) {
    width: 100%;
    min-height: 44px;
    border-radius: 8px;
    border-color: #dce3ef;
    color: var(--ink);
    font-family: inherit;
    font-size: 0.78rem;
}

.form-field :deep(.p-inputtext),
.form-field :deep(.p-textarea) {
    padding: 0.72rem 0.8rem;
}

.form-field :deep(.p-textarea) {
    min-height: 100px;
    resize: vertical;
}

.form-field :deep(.p-select-label) {
    padding: 0.72rem 0.8rem;
    font-size: 0.78rem;
}

.form-field :deep(.p-inputtext::placeholder),
.form-field :deep(.p-textarea::placeholder),
.form-field :deep(.p-select-label.p-placeholder) {
    color: #9aa5b8;
}

.form-field :deep(.p-inputtext:focus),
.form-field :deep(.p-textarea:focus),
.form-field :deep(.p-select.p-focus) {
    border-color: var(--brand);
    box-shadow: 0 0 0 3px rgb(37 99 235 / 15%);
}

.form-actions {
    display: block;
    margin-top: 1.25rem;
}

.form-submit {
    width: 100%;
    min-height: 46px;
    border-radius: 8px;
    font-size: 0.82rem;
    font-weight: 700;
}

.form-privacy {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    margin: 0.85rem 0 0;
    color: #8893a7;
    font-size: 0.63rem;
}

.site-footer {
    background: #fff;
}

.footer-inner {
    min-height: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.footer-wordmark .wordmark-main {
    font-size: 1.35rem;
}

.footer-inner>p {
    margin: 0;
    color: #808ba0;
    font-size: 0.7rem;
}

:global(html) {
    scroll-padding-top: 90px;
    scroll-behavior: smooth;
}

:global(body) {
    margin: 0;
}

:global(:focus-visible) {
    outline: 3px solid #60a5fa;
    outline-offset: 3px;
}

.reveal-on-load {
    animation: rise-in 750ms cubic-bezier(0.2, 0.75, 0.25, 1) both;
}

.hero-visual.reveal-on-load {
    animation-delay: 120ms;
}

.assessment-card {
    transition: transform 350ms cubic-bezier(0.2, 0.75, 0.25, 1), box-shadow 350ms ease, border-color 350ms ease;
}

.assessment-card:hover,
.assessment-card:focus-within {
    transform: translateY(-8px) scale(1.015);
    border-color: #5688ed;
    box-shadow: 0 32px 78px rgb(10 26 69 / 28%);
}

.reveal-on-scroll {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 650ms ease, transform 650ms cubic-bezier(0.2, 0.75, 0.25, 1);
}

.reveal-on-scroll.is-visible {
    opacity: 1;
    transform: translateY(0);
}

.pillar:nth-child(2),
.service-item:nth-child(3n + 2),
.step-item:nth-child(2) {
    transition-delay: 90ms;
}

.pillar:nth-child(3),
.service-item:nth-child(3n),
.step-item:nth-child(3) {
    transition-delay: 180ms;
}

.step-item:nth-child(4) {
    transition-delay: 270ms;
}

@keyframes rise-in {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes card-float {

    0%,
    100% {
        translate: 0 0;
    }

    50% {
        translate: 0 -8px;
    }
}

@keyframes laptop-hover {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-5px);
    }
}

@keyframes shield-hover {

    0%,
    100% {
        transform: translateY(0) scale(1);
    }

    50% {
        transform: translateY(-4px) scale(1.035);
    }
}

@keyframes spark-pulse {

    0%,
    100% {
        opacity: 0.55;
        transform: scale(0.85);
    }

    50% {
        opacity: 1;
        transform: scale(1.15);
    }
}

@keyframes orbit-rotate {
    to {
        transform: rotate(360deg);
    }
}

@keyframes progress-fill {
    from {
        transform: scaleX(0);
    }

    to {
        transform: scaleX(1);
    }
}

@keyframes progress-shimmer {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(340%);
    }
}

@keyframes status-pulse {
    0% {
        opacity: 0.75;
        transform: scale(0.7);
    }

    100% {
        opacity: 0;
        transform: scale(1.7);
    }
}

@keyframes orbit-turn {
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

.site-shell.is-dark .site-header {
    border-color: #26334b;
    background: rgb(11 20 40 / 90%);
}

.site-shell.is-dark .site-menubar,
.site-shell.is-dark .site-menubar :deep(.p-menubar-root-list) {
    background: transparent;
}

.site-shell.is-dark .site-menubar :deep(.p-menubar-item-link) {
    color: #c1cbe0;
}

.site-shell.is-dark .site-menubar :deep(.p-menubar-item-link:hover),
.site-shell.is-dark .site-menubar :deep(.p-menubar-button:hover) {
    color: #fff;
    background: #1a2b4c;
}

.site-shell.is-dark .site-menubar :deep(.p-menubar-item.is-current .p-menubar-item-link) {
    color: #9fc0ff;
    background: #1a2e52;
}

.site-shell.is-dark .hero-section {
    background: linear-gradient(180deg, #111d35 0%, #0b1428 100%);
}

.site-shell.is-dark .hero-grid-art {
    opacity: 0.52;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M48 0H0V48' fill='none' stroke='%237f9ac9' stroke-opacity='.32' stroke-width='1'/%3E%3C/svg%3E");
}

.site-shell.is-dark .hero-eyebrow {
    border-color: rgb(142 180 255 / 24%);
    background: rgb(17 29 53 / 76%);
}

.site-shell.is-dark .hero-orbit {
    border-color: rgb(120 161 239 / 24%);
}

.site-shell.is-dark .hero-description,
.site-shell.is-dark .section-heading>p:last-child,
.site-shell.is-dark .service-item p,
.site-shell.is-dark .step-item p,
.site-shell.is-dark .pillar p {
    color: var(--soft-text);
}

.site-shell.is-dark .hero-trust,
.site-shell.is-dark .visual-caption {
    color: #aab6ce;
}

.site-shell.is-dark .pillars-section {
    border-color: var(--line);
}

.site-shell.is-dark .pillar+.pillar,
.site-shell.is-dark .pillar+.pillar::before {
    border-color: #29364d;
}

.site-shell.is-dark .service-item {
    border-color: #2b3b57;
    border-top-color: #7184ad;
    background: #101b30;
    box-shadow: 0 4px 14px rgb(0 0 0 / 12%);
}

.site-shell.is-dark .service-item:hover {
    border-color: #496ba9;
    border-top-color: #77a4ff;
    background: #14223b;
    box-shadow: 0 18px 36px rgb(0 0 0 / 28%);
}

.site-shell.is-dark .service-number {
    color: #8194b7;
}

.site-shell.is-dark .service-icon-box {
    border-color: #263c63;
    background: #17294a;
}

.site-shell.is-dark .service-item:hover .service-icon-box {
    border-color: #2563eb;
    color: #fff;
    background: #2563eb;
}

.site-shell.is-dark .services-commitment {
    background: #111d35;
}

.site-shell.is-dark .approach-section {
    background: #111d35;
}

.site-shell.is-dark .approach-intro {
    color: var(--soft-text);
}

.site-shell.is-dark .step-item {
    border-color: #293b5b;
    border-top-color: transparent;
    background: #172640;
    box-shadow: 0 8px 24px rgb(0 0 0 / 12%);
}

.site-shell.is-dark .step-item:hover {
    border-top-color: #77a4ff;
    box-shadow: 0 18px 34px rgb(0 0 0 / 25%);
}

.site-shell.is-dark .step-meta>span {
    color: #9aaaca;
}

.site-shell.is-dark .step-number {
    border-color: #314c79;
    color: #a9c6ff;
    background: #20375c;
}

.site-shell.is-dark .contact-section {
    background: #070f20;
}

.site-shell.is-dark .contact-form {
    border-color: #29364d;
    color: #e8eefb;
    background: #121f37;
}

.site-shell.is-dark .form-heading h3,
.site-shell.is-dark .form-field label {
    color: #e8eefb;
}

.site-shell.is-dark .form-heading p {
    color: #aab6ce;
}

.site-shell.is-dark .form-field :deep(.p-inputtext),
.site-shell.is-dark .form-field :deep(.p-select),
.site-shell.is-dark .form-field :deep(.p-textarea) {
    border-color: #354460;
    color: #e8eefb;
    background: #0b1428;
}

.site-shell.is-dark .form-field :deep(.p-select-overlay) {
    border-color: #354460;
    color: #e8eefb;
    background: #121f37;
}

.site-shell.is-dark .form-field :deep(.p-select-option:not(.p-select-option-selected):not(.p-disabled).p-focus) {
    color: #fff;
    background: #1b2a47;
}

.site-shell.is-dark .form-field :deep(.p-select-option-selected) {
    color: #fff;
    background: #1e3a70;
}

.site-shell.is-dark .form-privacy {
    color: #aab6ce;
}

.site-shell.is-dark .site-footer {
    background: #0b1428;
}

.site-shell.is-dark .footer-inner>p {
    color: #aab6ce;
}

.site-shell.is-dark .sample-badge {
    color: #c4d4f5;
}

.site-shell.is-dark .assessment-card {
    border-color: #35496f;
    background: #101e3c;
}

.site-shell.is-dark .assessment-card:hover,
.site-shell.is-dark .assessment-card:focus-within {
    border-color: #6f9eff;
    box-shadow: 0 32px 78px rgb(0 0 0 / 46%);
}

@media (max-width: 960px) {
    .header-inner {
        grid-template-columns: 1fr auto;
        gap: 1rem;
    }

    .site-menubar {
        width: 100%;
        grid-column: 1 / -1;
        grid-row: 2;
        justify-self: stretch;
        margin-top: -0.3rem;
    }

    .header-cta {
        grid-column: auto;
        grid-row: 1;
    }

    .header-actions {
        grid-column: 2;
        grid-row: 1;
    }

    .hero-section {
        padding-top: 5rem;
    }

    .hero-grid {
        grid-template-columns: 1fr 0.9fr;
        gap: 2.5rem;
    }

    .hero-copy h1 {
        font-size: clamp(2.8rem, 6.5vw, 4rem);
    }

    .pillar {
        padding-inline: 1rem;
    }

    .contact-grid {
        gap: 3rem;
    }
}

@media (max-width: 680px) {

    .section-container,
    .header-inner {
        width: min(100% - 2rem, 1280px);
    }

    .header-inner {
        min-height: 68px;
        gap: 0.5rem;
    }

    .wordmark-main {
        font-size: 1.4rem;
    }

    .wordmark-sub {
        font-size: 0.5rem;
    }

    .header-cta {
        padding: 0.55rem 0.7rem;
        font-size: 0.76rem;
    }

    .site-menubar {
        width: 100%;
        grid-column: 1 / -1;
        justify-self: stretch;
        margin: 0 0 0.55rem;
    }

    .hero-section {
        padding: 4.25rem 0 3.5rem;
    }

    .hero-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    .hero-copy h1 {
        max-width: 560px;
        font-size: clamp(2.8rem, 12vw, 4rem);
    }

    .hero-description {
        font-size: 0.95rem;
    }

    .hero-visual {
        width: 100%;
        max-width: 520px;
        padding-top: 0.3rem;
    }

    .assessment-card {
        padding: 1.25rem;
    }

    .finding-name {
        font-size: 0.71rem;
    }

    .pillars-grid {
        grid-template-columns: 1fr;
        padding-block: 0.6rem;
    }

    .pillar,
    .pillar:first-child {
        padding: 1rem 0;
    }

    .pillar+.pillar {
        border-top: 1px solid #e2e7f0;
        border-left: 0;
    }

    .services-section,
    .approach-section,
    .contact-section {
        padding-block: 4.5rem;
    }

    .section-heading h2 {
        font-size: clamp(2rem, 9vw, 2.8rem);
    }

    .services-heading {
        flex-direction: column;
        align-items: stretch;
        gap: 0;
    }

    .laptop-shield-art {
        flex-basis: 180px;
        width: 180px;
        margin: 0.8rem 0 0 auto;
    }

    .services-grid {
        grid-template-columns: 1fr;
        gap: 1.75rem;
    }

    .steps-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 2.3rem;
    }

    .approach-intro {
        max-width: 480px;
    }

    .approach-heading {
        min-height: 0;
        padding-right: 0;
    }

    .approach-art {
        position: relative;
        display: block;
        top: auto;
        right: auto;
        width: min(180px, 55vw);
        margin: 1.5rem 0 -0.5rem auto;
    }

    .step-item {
        display: grid;
        grid-template-columns: 46px 1fr;
        column-gap: 1rem;
        align-items: start;
        min-height: 0;
        padding: 1.1rem;
    }

    .step-meta {
        grid-row: span 2;
        display: block;
        margin: 0;
    }

    .step-number {
        margin: 0;
    }

    .step-meta>span {
        display: none;
    }

    .step-item p {
        margin-top: 0.3rem;
    }

    .contact-grid {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }

    .contact-copy h2 {
        font-size: clamp(2.5rem, 11vw, 3.6rem);
    }

    .contact-assurance {
        margin-top: 1.5rem;
    }

    .contact-form {
        padding: 1.35rem;
    }

    .footer-inner {
        min-height: 78px;
    }

    .footer-inner>p {
        text-align: right;
        font-size: 0.62rem;
    }
}

@media (max-width: 380px) {
    .hero-actions {
        flex-direction: column;
    }

    .hero-actions :deep(.p-button) {
        justify-content: center;
        width: 100%;
    }

    .finding-row {
        grid-template-columns: 0.9rem minmax(0, 1fr) auto;
        gap: 0.45rem;
    }

    .finding-row :deep(.p-tag) {
        padding-inline: 0.35rem;
        font-size: 0.57rem;
    }

    .footer-wordmark .wordmark-sub {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    :global(html) {
        scroll-behavior: auto;
    }

    .reveal-on-load,
    .hero-orbit,
    .eyebrow-dot::after,
    .status-indicator::after,
    .remediation-progress :deep(.p-progressbar-value),
    .remediation-progress :deep(.p-progressbar-value::after) {
        animation: none;
    }

    .assessment-card {
        animation: none;
    }

    .laptop-shield-art *,
    .approach-art *,
    .approach-art {
        animation: none;
    }

    .assessment-card {
        transition: none;
    }

    .assessment-card:hover,
    .assessment-card:focus-within {
        transform: none;
    }

    .service-item,
    .service-icon-box,
    .step-item {
        transition: none;
    }

    .service-item:hover {
        transform: none;
    }

    .service-item:hover .service-icon-box {
        transform: none;
    }

    .step-item:hover {
        transform: none;
    }

    .remediation-progress :deep(.p-progressbar-value) {
        transform: none;
    }

    .reveal-on-scroll {
        opacity: 1;
        transform: none;
        transition: none;
    }
}
</style>
