import { getCollection, type CollectionEntry } from 'astro:content';

/** All projects, sorted by their `order` field (1 first) */
export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Only projects that have a case study page (not drafts) */
export async function getPublishedProjects(): Promise<
  CollectionEntry<'projects'>[]
> {
  const projects = await getProjects();
  return projects.filter((project) => !project.data.draft);
}
