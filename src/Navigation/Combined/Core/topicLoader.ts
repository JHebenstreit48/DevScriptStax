import type { Subpage } from '@/Navigation/Combined/Core/NavigationTypes';

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
      return (await import('@/Navigation/Combined/Topics/frontEnd')).default;
    case 'backEnd':
      return (await import('@/Navigation/Combined/Topics/backEnd')).default;
    case 'cloudAndDeployment':
      return (await import('@/Navigation/Combined/Topics/cloudAndDeployment')).default;
    case 'testing':
      return (await import('@/Navigation/Combined/Topics/testing')).default;
    case 'tools':
      return (await import('@/Navigation/Combined/Topics/tools')).default;
    case 'languages':
      return (await import('@/Navigation/Combined/Topics/languages')).default;
    case 'graphQLAndApollo':
      return (await import('@/Navigation/Combined/Topics/graphQLAndApollo')).default;
    case 'stacks':
      return (await import('@/Navigation/Combined/Topics/stacks')).default;
    default:
      throw new Error(`Unknown topic key: ${key as string}`);
  }
}