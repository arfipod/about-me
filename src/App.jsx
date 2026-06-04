import { useEffect, useMemo, useState } from 'react';
import { profile } from './data/profile.js';
import { categories } from './data/projects.js';
import { copy } from './data/i18n.js';
import { buildFallbackProjects, fetchPublicRepositories, mergeGithubRepositories } from './utils/github.js';

const categoryMap = new Map(categories.map((category) => [category.id, category]));
const baseUrl = import.meta.env.BASE_URL;

function App() {
  const [language, setLanguage] = useState(() => window.localStorage.getItem('portfolio-language') || 'es');
  const [projects, setProjects] = useState(() => buildFallbackProjects());
  const [source, setSource] = useState('local');
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [featuredOnly, setFeaturedOnly] = useState(false);

  const t = useMemo(() => makeTranslator(language), [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = `${profile.name} | Portfolio`;
    window.localStorage.setItem('portfolio-language', language);
  }, [language]);

  useEffect(() => {
    let mounted = true;

    fetchPublicRepositories(profile.githubUser)
      .then((repositories) => {
        if (!mounted) return;
        setProjects(mergeGithubRepositories(repositories));
        setSource('live');
      })
      .catch(() => {
        if (!mounted) return;
        setSource('local');
      });

    return () => {
      mounted = false;
    };
  }, []);

  const stats = useMemo(() => buildStats(projects, source, language, t), [projects, source, language, t]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory = activeCategory === 'all' || project.category === activeCategory;
      const matchesFeatured = !featuredOnly || project.featured;
      const searchable = [
        project.name,
        project.displayName,
        project.language,
        localize(project.description, language),
        categoryMap.get(project.category)?.label?.[language],
        ...project.tags
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery);
      return matchesCategory && matchesFeatured && matchesQuery;
    });
  }, [activeCategory, featuredOnly, language, projects, query]);

  const categoryCounts = useMemo(() => {
    const counts = new Map(categories.map((category) => [category.id, 0]));
    projects.forEach((project) => counts.set(project.category, (counts.get(project.category) ?? 0) + 1));
    return counts;
  }, [projects]);

  const clearFilters = () => {
    setQuery('');
    setActiveCategory('all');
    setFeaturedOnly(false);
  };

  return (
    <div className="app-shell">
      <Header language={language} setLanguage={setLanguage} t={t} />

      <main>
        <section className="hero" id="top">
          <div className="hero__content">
            <p className="eyebrow">{t('hero.eyebrow')}</p>
            <h1>
              {t('hero.titlePrefix')} <span>{profile.name}</span>
            </h1>
            <p className="hero__role">{localize(profile.role, language)}</p>
            <p className="hero__summary">{localize(profile.summary, language)}</p>
            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                {t('hero.projectsButton')}
              </a>
              <a className="button" href={`${baseUrl}${profile.cv.file}`} target="_blank" rel="noreferrer">
                {t('hero.cvButton')}
              </a>
              <a className="button button--ghost" href={profile.github} target="_blank" rel="noreferrer">
                {t('hero.githubButton')}
              </a>
            </div>
            <p className="sync-note">{t('hero.availability')}</p>
          </div>

          <aside className="hero-card" aria-label="Professional highlights">
            <div className="avatar" aria-hidden="true">AR</div>
            <h2>{profile.shortName}</h2>
            <p>{profile.location}</p>
            <div className="highlight-grid">
              {profile.highlights.map((item) => (
                <div className="highlight" key={item.value + item.label.en}>
                  <strong>{item.value}</strong>
                  <span>{localize(item.label, language)}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="stats" aria-label="Portfolio statistics">
          {stats.map((stat) => (
            <article className="stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </section>

        <SectionIntro id="areas" title={t('sections.areasTitle')} text={t('sections.areasText')} />
        <section className="areas-grid">
          {categories.map((category) => (
            <button
              className={`area-card ${activeCategory === category.id ? 'is-active' : ''}`}
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="area-card__count">{categoryCounts.get(category.id) ?? 0}</span>
              <strong>{localize(category.label, language)}</strong>
              <span>{localize(category.description, language)}</span>
            </button>
          ))}
        </section>

        <SectionIntro id="projects" title={t('sections.projectsTitle')} text={t('sections.projectsText')} />
        <section className="project-toolbar" aria-label="Project filters">
          <div className="search-box">
            <label className="sr-only" htmlFor="project-search">{t('filters.searchPlaceholder')}</label>
            <input
              id="project-search"
              type="search"
              value={query}
              placeholder={t('filters.searchPlaceholder')}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="filter-row" role="list" aria-label="Category filters">
            <button
              type="button"
              className={`chip ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              {t('filters.all')} <span>{projects.length}</span>
            </button>
            {categories.map((category) => (
              <button
                type="button"
                className={`chip ${activeCategory === category.id ? 'is-active' : ''}`}
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {localize(category.label, language)} <span>{categoryCounts.get(category.id) ?? 0}</span>
              </button>
            ))}
          </div>
          <div className="toolbar-actions">
            <label className="toggle">
              <input
                type="checkbox"
                checked={featuredOnly}
                onChange={(event) => setFeaturedOnly(event.target.checked)}
              />
              <span>{t('filters.featuredOnly')}</span>
            </label>
            <button className="button button--small" type="button" onClick={clearFilters}>
              {t('filters.clear')}
            </button>
            <span className={`source-pill source-pill--${source}`}>{source === 'live' ? t('project.live') : t('project.local')}</span>
          </div>
        </section>

        <section className="projects-grid" aria-live="polite">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.name} project={project} language={language} t={t} />
          ))}
        </section>

        {filteredProjects.length === 0 && (
          <div className="empty-state">
            <p>{t('project.noResults')}</p>
            <button className="button button--small" type="button" onClick={clearFilters}>
              {t('filters.clear')}
            </button>
          </div>
        )}

        <section className="cv-section" id="cv">
          <div>
            <p className="eyebrow">{profile.cv.label} · {profile.cv.language}</p>
            <h2>{t('sections.cvTitle')}</h2>
            <p>{t('sections.cvText')}</p>
            <p className="muted">{t('cv.note')}</p>
            <a className="button button--primary" href={`${baseUrl}${profile.cv.file}`} target="_blank" rel="noreferrer">
              {t('cv.open')}
            </a>
          </div>
          <div className="skills-card">
            <h3>{t('sections.skillsTitle')}</h3>
            <div className="skills-list">
              {profile.competencies.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">{t('sections.contactTitle')}</p>
            <h2>{profile.email}</h2>
            <p>{t('sections.contactText')}</p>
          </div>
          <div className="contact__links">
            <a className="button" href={`mailto:${profile.email}`}>Email</a>
            <a className="button" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="button" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>{t('footer.built')}</p>
        <p>{t('footer.publicOnly')}</p>
      </footer>
    </div>
  );
}

function Header({ language, setLanguage, t }) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Go to top">
        <span>AR</span>
        <strong>about-me</strong>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        <a href="#areas">{t('nav.areas')}</a>
        <a href="#projects">{t('nav.projects')}</a>
        <a href="#cv">{t('nav.cv')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
      <div className="language-switch" aria-label="Language switcher">
        <button className={language === 'es' ? 'is-active' : ''} type="button" onClick={() => setLanguage('es')}>ES</button>
        <button className={language === 'en' ? 'is-active' : ''} type="button" onClick={() => setLanguage('en')}>EN</button>
      </div>
    </header>
  );
}

function SectionIntro({ id, title, text }) {
  return (
    <div className="section-intro" id={id}>
      <p className="eyebrow">{id}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ProjectCard({ project, language, t }) {
  const category = categoryMap.get(project.category);
  const maturityLabel = t(`project.maturity.${project.maturity}`);

  return (
    <article className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__topline">
        <span>{category ? localize(category.label, language) : project.category}</span>
        {project.featured && <strong>{t('project.featured')}</strong>}
      </div>
      <h3>{project.displayName}</h3>
      <p>{localize(project.description, language)}</p>
      <div className="meta-row">
        <span>{project.language}</span>
        <span>{maturityLabel}</span>
        {project.license && <span>{project.license}</span>}
      </div>
      <div className="tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-card__footer">
        <small>{t('project.updated')}: {formatDate(project.updatedAt, language)}</small>
        <small>{project.stars} {t('project.stars')} · {project.forks} {t('project.forks')}</small>
      </div>
      <div className="project-card__actions">
        <a className="button button--small button--primary" href={project.url} target="_blank" rel="noreferrer">
          {t('project.openRepo')}
        </a>
        {project.homepage && (
          <a className="button button--small" href={project.homepage} target="_blank" rel="noreferrer">
            {t('project.openDemo')}
          </a>
        )}
      </div>
    </article>
  );
}

function buildStats(projects, source, language, t) {
  const languages = new Set(projects.map((project) => project.language).filter(Boolean));
  const areas = new Set(projects.map((project) => project.category).filter(Boolean));

  return [
    { value: projects.length, label: t('stats.projects') },
    { value: areas.size, label: t('stats.areas') },
    { value: languages.size, label: t('stats.languages') },
    { value: source === 'live' ? 'Live' : 'Local', label: source === 'live' ? t('stats.sourceLive') : t('stats.sourceLocal') }
  ];
}

function makeTranslator(language) {
  return (path) => {
    const value = path.split('.').reduce((current, part) => current?.[part], copy[language]);
    return value ?? path;
  };
}

function localize(value, language) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[language] ?? value.en ?? value.es ?? '';
}

function formatDate(value, language) {
  if (!value) return '—';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(language === 'es' ? 'es-ES' : 'en-GB', {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(date);
}

export default App;
