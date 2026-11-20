# Security Policy

## Supported versions

Security fixes are applied to the latest code on the `main` branch. Older snapshots and forks are not maintained.

| Version | Supported |
| --- | --- |
| `main` | Yes |
| Older commits | No |

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

Report vulnerabilities privately through GitHub:

1. Open the repository's [Security tab](https://github.com/ismailbentabett/trp-project/security).
2. Select **Report a vulnerability** to open a private advisory ([direct link](https://github.com/ismailbentabett/trp-project/security/advisories/new)).
3. Include as much detail as you can:
   - the affected area (admin panel, storefront, API route, social integration, deployment scripts)
   - steps to reproduce or a proof of concept
   - the potential impact
   - any suggested fix

If private reporting is unavailable, contact the maintainer through the [GitHub profile](https://github.com/ismailbentabett) and ask for a private channel. Do not include exploit details in public messages.

## What to expect

- An acknowledgement of your report as soon as practical, usually within a few business days.
- An assessment of severity and a plan for a fix.
- Credit in the advisory once the issue is resolved, unless you prefer to remain anonymous.

## Scope

In scope:

- Application code in `app/`, `routes/`, `config/`, `database/` and `resources/js/`
- Docker, Sail and AWS Elastic Beanstalk configuration in `docker/`, `.platform/` and `.ebextensions/`

Out of scope:

- Vulnerabilities in third-party packages that are already publicly disclosed (please report them upstream)
- Issues that require a compromised server, `.env` file or administrator account
- Denial of service through excessive traffic

## Hardening notes for deployers

- Never commit `.env`. Use `.env.example` as the template and keep real values in your hosting provider's secret store.
- Set `APP_ENV=production` and `APP_DEBUG=false` in production.
- Restrict access to Laravel Telescope (`/telescope`) and the Filament admin panel (`/admin`) to trusted roles.
- Any variable prefixed with `VITE_` is compiled into the public JavaScript bundle. Only use search-only or public keys there.
- Rotate API keys (OpenAI, Algolia, Cloudinary, AWS, Meta, LinkedIn, Google) if you suspect they were exposed.
