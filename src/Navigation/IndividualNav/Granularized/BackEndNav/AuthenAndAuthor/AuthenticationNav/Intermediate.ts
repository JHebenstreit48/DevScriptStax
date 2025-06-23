import { Subpage } from '@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes';

const AuthenticationIntermediate: Subpage = {
  name: 'Intermediate',
  subpages: [
    {
      name: 'OAuth / OIDC',
      subpages: [
        {
          name: 'Grant Types',
          path: '/auth/intermediate/oauth/grants'
        },
        {
          name: 'PKCE',
          path: '/auth/intermediate/oauth/pkce'
        },
        {
          name: 'OIDC',
          path: '/auth/intermediate/oauth/oidc'
        },
        {
          name: 'OAuth in React',
          path: '/auth/intermediate/oauth/react-nextjs'
        },
        {
          name: 'Server Setup',
          path: '/auth/intermediate/oauth/server-setup'
        }
      ]
    },
    {
      name: 'Modern Methods',
      subpages: [
        {
          name: 'Social Logins',
          path: '/auth/intermediate/methods/social-logins'
        },
        {
          name: 'WebAuthn',
          path: '/auth/intermediate/methods/webauthn'
        }
      ]
    }
  ]
};

export default AuthenticationIntermediate;
