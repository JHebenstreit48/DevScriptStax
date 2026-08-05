import type { Subpage } from '@/types/navigation/Subpage';

export type TopicKey =
  | 'frontEnd'
  | 'backEnd'
  | 'cloudAndDeployment'
  | 'testing'
  | 'tools'
  | 'languages'
  | 'graphQLAndApollo'
  | 'stacks';

export const topicButtons: Array<{ key: TopicKey; name: string }> =
[
  { key: 'frontEnd',           name: 'Front End' },
  { key: 'backEnd',            name: 'Back End' },
  { key: 'cloudAndDeployment', name: 'Cloud & Deploy' },
  { key: 'testing',            name: 'Testing' },
  { key: 'tools',              name: 'Tools' },
  { key: 'languages',          name: 'Languages' },
  { key: 'graphQLAndApollo',   name: 'GraphQL & Apollo' },
  { key: 'stacks',             name: 'Stacks' }
];

export async function loadTopic(key: TopicKey): Promise<Subpage>
{
  switch (key)
  {
    case 'frontEnd':
      return (await import('@/navigation/combined/topics/frontEnd')).default;
    case 'backEnd':
      return (await import('@/navigation/combined/topics/backEnd')).default;
    case 'cloudAndDeployment':
      return (await import('@/navigation/combined/topics/cloudAndDeployment')).default;
    case 'testing':
      return (await import('@/navigation/combined/topics/toolsAndTesting/testing')).default;
    case 'tools':
      return (await import('@/navigation/combined/topics/toolsAndTesting/tools')).default;
    case 'languages':
      return (await import('@/navigation/combined/topics/languages')).default;
    case 'graphQLAndApollo':
      return (await import('@/navigation/individual/topics/BackEnd/graphQLAndApollo')).default;
    case 'stacks':
      return (await import('@/navigation/individual/topics/BackEnd/stacks')).default;
    default:
      throw new Error(`Unknown topic key: ${key as string}`);
  }
}