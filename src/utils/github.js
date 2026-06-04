import { curatedProjects, excludedRepos } from '../data/projects.js';

const GITHUB_API = 'https://api.github.com';
const owner = 'arfipod';
const curatedByName = new Map(curatedProjects.map((project) => [project.name.toLowerCase(), project]));

export function buildFallbackProjects() {
  return curatedProjects.map((project) => normalizeProject(project));
}

export async function fetchPublicRepositories(username) {
  const response = await fetch(`${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated&direction=desc&type=owner`, {
    headers: {
      Accept: 'application/vnd.github+json'
    }
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  const repos = await response.json();
  return repos.filter((repo) => !repo.fork && !repo.private && !excludedRepos.includes(repo.name));
}

export function mergeGithubRepositories(repositories) {
  const merged = repositories.map((repo) => {
    const curated = curatedByName.get(repo.name.toLowerCase());
    return normalizeProject({
      ...curated,
      id: repo.id,
      name: repo.name,
      displayName: curated?.displayName,
      category: curated?.category ?? inferCategory(repo),
      description: curated?.description ?? fallbackDescription(repo),
      tags: curated?.tags ?? inferTags(repo),
      languageFallback: repo.language ?? curated?.languageFallback,
      license: repo.license?.spdx_id ?? curated?.license ?? '',
      updatedAt: repo.updated_at ?? curated?.updatedAt,
      featured: curated?.featured ?? false,
      maturity: curated?.maturity ?? 'lab',
      stars: repo.stargazers_count ?? 0,
      forks: repo.forks_count ?? 0,
      url: repo.html_url,
      homepage: repo.homepage || curated?.homepage || '',
      source: 'github'
    });
  });

  return merged.sort(sortProjects);
}

function normalizeProject(project) {
  return {
    id: project.id ?? project.name,
    name: project.name,
    displayName: project.displayName ?? prettifyName(project.name),
    category: project.category ?? 'misc',
    description: project.description ?? fallbackDescription(project),
    tags: project.tags ?? [],
    language: project.languageFallback ?? project.language ?? 'N/A',
    license: project.license ?? '',
    updatedAt: project.updatedAt ?? '',
    featured: Boolean(project.featured),
    maturity: project.maturity ?? 'lab',
    stars: project.stars ?? 0,
    forks: project.forks ?? 0,
    url: project.url ?? `https://github.com/${owner}/${project.name}`,
    homepage: project.homepage ?? '',
    source: project.source ?? 'local'
  };
}

function sortProjects(a, b) {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  return new Date(b.updatedAt || 0) - new Date(a.updatedAt || 0);
}

function fallbackDescription(repo) {
  const language = repo.language ?? repo.languageFallback ?? 'GitHub';
  const description = repo.description;

  return {
    es: description || `Proyecto público en ${language} pendiente de una descripción extendida de portfolio.`,
    en: description || `Public ${language} project awaiting an extended portfolio description.`
  };
}

function prettifyName(name) {
  return name
    .replace(/[_-]+/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/Ios\b/g, 'iOS')
    .replace(/M5stickc/gi, 'M5StickC')
    .replace(/Esp32/gi, 'ESP32')
    .replace(/Gba/gi, 'GBA')
    .replace(/Gb\b/gi, 'GB');
}

function inferTags(repo) {
  const tags = new Set();
  if (repo.language) tags.add(repo.language);
  const category = inferCategory(repo);
  tags.add(category);
  return Array.from(tags);
}

function inferCategory(repo) {
  const name = repo.name.toLowerCase();
  const language = (repo.language ?? '').toLowerCase();

  if (/fund|tikr|fintab|invest/.test(name)) return 'finance';
  if (/wear|tile|wrist/.test(name)) return 'wearables';
  if (/gba|game|nds|ncurse|retro|gb-/.test(name)) return 'games';
  if (/m5|esp32|arduino|idot|matrix|joycon/.test(name)) return 'iot';
  if (/tool|scraper|classifier|epub|energy|manager/.test(name)) return 'tools';
  if (['typescript', 'javascript', 'kotlin'].includes(language)) return 'web';
  if (['c++', 'c'].includes(language)) return 'embedded';
  return 'misc';
}
