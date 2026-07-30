import type { Subpage } from '@/types/navigation';

const Intermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'OAuth / OIDC',
      subpages: [
        {
          name: 'Grant Types',
          path: '/authentication/intermediate/oauth-oidc/grant-types'
        },
        {
          name: 'PKCE',
          path: '/authentication/intermediate/oauth-oidc/pkce'
        },
        {
          name: 'OIDC',
          path: '/authentication/intermediate/oauth-oidc/oidc'
        },
        {
          name: 'OAuth in React',
          path: '/authentication/intermediate/oauth-oidc/oauth-react'
        },
        {
          name: 'Server Setup',
          path: '/authentication/intermediate/oauth-oidc/server-setup'
        }
      ]
    },
    {
      name: 'Modern Methods',
      subpages: [
        {
          name: 'Social Logins',
          path: '/authentication/intermediate/methods/social-logins'
        },
        {
          name: 'WebAuthn',
          path: '/authentication/intermediate/methods/webauthn'
        }
      ]
    }
  ]
};

export default Intermediate;
