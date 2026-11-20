# Contributing to TRP Modular CMS

Thanks for your interest in improving the project. This guide explains how to set up a development environment, the conventions the codebase follows, and how to get a change merged.

## Code of conduct

By participating you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## Ways to contribute

- **Report bugs** using the [bug report form](https://github.com/ismailbentabett/trp-project/issues/new/choose).
- **Suggest features** using the feature request form. Check the roadmap in the [README](README.md#-roadmap) first.
- **Improve documentation**: typos, clearer setup steps and missing configuration notes are always welcome.
- **Submit code**: fix an open issue or implement an agreed feature.

Security issues must not be reported publicly. See [SECURITY.md](SECURITY.md).

## Development setup

The fastest path is Laravel Sail (Docker). Full instructions live in the [README Quick start](README.md#-quick-start). In short:

```bash
cp .env.example .env          # then fill in the values described in the README
composer install
./vendor/bin/sail up -d
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate --seed
./vendor/bin/sail npm install
./vendor/bin/sail npm run dev
```

## Branching and commits

1. Fork the repository and create a branch from `main`:
   - `feat/<short-description>` for features
   - `fix/<short-description>` for bug fixes
   - `docs/<short-description>` for documentation
2. Write commits in the [Conventional Commits](https://www.conventionalcommits.org/) style, for example `feat(cart): support quantity limits` or `fix(admin): correct order status filter`.
3. Keep pull requests focused. One logical change per pull request is easier to review.

## Coding standards

| Area | Tooling | Command |
| --- | --- | --- |
| PHP | [Laravel Pint](https://laravel.com/docs/pint) | `./vendor/bin/pint` |
| JavaScript / Vue | ESLint + Prettier | `npm run lint` and `npm run format` |
| Tests | PHPUnit | `php artisan test` |

Project conventions:

- **Admin features** belong in `app/Filament` (Resources, Pages, Widgets). Prefer Filament form and table builders over custom Blade.
- **Storefront pages** are Vue 3 single-file components in `resources/js/Pages`, rendered through Inertia from controllers in `app/Http/Controllers`.
- **Shared UI** goes in `resources/js/Components`; shared state in `resources/js/stores` (Pinia).
- **Database changes** require a migration in `database/migrations`. Update seeders when new reference data is needed.
- **Configuration** must be read through `config()` files backed by `env()`. Never hard-code credentials, and add any new key to `.env.example` with an empty value.
- **Translations**: the default locale is French. Add strings to both `lang/fr` and `lang/en` when you introduce user-facing text.

## Pull request checklist

Before opening a pull request:

- [ ] The branch is up to date with `main`.
- [ ] `php artisan test` passes.
- [ ] `./vendor/bin/pint --test` reports no issues.
- [ ] `npm run build` completes without errors.
- [ ] No `.env` files, credentials or personal data are included.
- [ ] Documentation and `.env.example` are updated when behaviour or configuration changes.

Fill in the pull request template. A maintainer will review it, may request changes, and will merge once it is ready.

## License

By contributing, you agree that your contributions are licensed under the [MIT License](LICENSE).
