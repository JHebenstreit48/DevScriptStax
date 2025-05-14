import { Subpage } from "@/Navigation/CombinedNav/CombinedNavAndTypes/NavigationTypes";

const AuthenticationNavigation: Subpage = {
  name: "Authentication",
  subpages: [
    {
      name: "Authentication Basics",
      subpages: [
        { name: "What is Authentication?", path: "/auth/basics/whatis" },
        { name: "Session vs Token Authentication", path: "/auth/basics/session-vs-token" },
        { name: "Stateful vs Stateless Auth", path: "/auth/basics/stateful-vs-stateless" },
        { name: "Multi-Factor Authentication (MFA)", path: "/auth/basics/mfa" },
        { name: "Password Hashing & Storage", path: "/auth/basics/passwords" },
      ],
    },
    {
      name: "Web Authentication Methods",
      subpages: [
        { name: "Session-Based Auth (Cookies)", path: "/auth/methods/sessions" },
        { name: "JWT & Token-Based Auth", path: "/auth/methods/jwt" },
        { name: "OAuth & OpenID Connect", path: "/auth/methods/oauth-oidc" },
        { name: "Social Logins (Google, GitHub)", path: "/auth/methods/social-logins" },
        { name: "API Key Authentication", path: "/auth/methods/api-keys" },
        { name: "WebAuthn (Passkeys & Biometrics)", path: "/auth/methods/webauthn" },
      ],
    },
    {
      name: "OAuth & OpenID Connect",
      subpages: [
        { name: "OAuth 2.0 Grant Types", path: "/auth/oauth/grants" },
        { name: "PKCE for SPAs", path: "/auth/oauth/pkce" },
        { name: "OpenID Connect (OIDC)", path: "/auth/oauth/oidc" },
        { name: "OAuth with React & Next.js", path: "/auth/oauth/react-nextjs" },
        { name: "OAuth Server Setup", path: "/auth/oauth/server-setup" },
      ],
    },
    {
      name: "Authentication in Web Frameworks",
      subpages: [
        { name: "Auth in Express & Node.js", path: "/auth/frameworks/node-express" },
        { name: "Auth in Next.js & React", path: "/auth/frameworks/nextjs-react" },
        { name: "Auth in Django & Flask", path: "/auth/frameworks/django-flask" },
        { name: "Auth in Laravel & PHP", path: "/auth/frameworks/laravel-php" },
        { name: "Auth in ASP.NET", path: "/auth/frameworks/aspnet" },
      ],
    },
    {
      name: "Authentication Security & Best Practices",
      subpages: [
        { name: "Brute Force & Rate Limiting", path: "/auth/security/bruteforce" },
        { name: "Session Hijacking & CSRF", path: "/auth/security/hijacking-csrf" },
        { name: "Credential Stuffing Protection", path: "/auth/security/credentialstuffing" },
        { name: "Secure Passwordless Auth", path: "/auth/security/passwordless" },
        { name: "Zero Trust & Access Control", path: "/auth/security/zerotrust" },
      ],
    },
  ],
};

export default AuthenticationNavigation;
