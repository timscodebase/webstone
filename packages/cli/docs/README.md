# Webstone CLI

Webstone provides a `pnpm webstone` (or `pnpm ws` for short) CLI, making interacting with your full-stack application simpler and more streamlined.

- [Webstone CLI](#webstone-cli)
  - [Extend the CLI](#extend-the-cli)
  - [Commands](#commands)
    - [webstone dev](#webstone-dev)
    - [webstone web api create](#webstone-web-api-create)
    - [webstone web api delete](#webstone-web-api-delete)
    - [webstone web deployment configure](#webstone-web-deployment-configure)
    - [webstone web deployment deploy](#webstone-web-deployment-deploy)
    - [webstone web dev](#webstone-web-dev)
    - [webstone web page create](#webstone-web-page-create)
    - [webstone web page delete](#webstone-web-page-delete)
    - [webstone web svelte-add](#webstone-web-svelte-add)

## Extend the CLI

To extend the Webstone CLI with your own commands, please refer to [the Plugins documentation](./plugins.md).

## Commands

<!-- Command template
### webstone xyz

Describe the command

**Usage**

```bash
webstone xyz
```

* `<name>` - Describe the mandatory positional argument
* `[name]` - Describe the optional positional argument
* `--flag` - Describe the flag
-->

### webstone dev

Starts the development servers.

**Usage**

```bash
webstone dev [service]
```

- `[service]` - An optional service to start, e.g. `web`. The list of available services can be found in your Webstone project's `services/` directory. Any of the directory name can be used for the `[service]` argument. If no service name is provided, all services will start in development mode.

### webstone web api create

Creates new API **C**reate, **R**ead, **U**pdate, **D**elete (CRUD) endpoints in your `web` service. E.g.`/api/users`.

**Usage**

```bash
webstone web api create [api-path]
```

- `[api-path]` - The URL path of the API endpoints to create. For example, `/api/users` generates CRUD endpoints in `services/web/src/routes/api/users/`. If no API path is provided, you will be prompted to provide one interactively.

### webstone web api delete

Deletes an API endpoint in your `web` service. E.g.`/api/users`.

**Usage**

```bash
webstone web api delete [api-path]
```

- `[api-path]` - The URL path of the API endpoints to delete. For example, `/api/users` deletes all endpoints in `services/web/src/routes/api/users/`. If no API path is provided, you will be prompted to provide one interactively.

### webstone web deployment configure

Add a deployment adapter for the `web` service. Please refer to SvelteKit's ["Adapters"](https://kit.svelte.dev/docs#adapters) documentation if you are not familiar with that concept.

If you deploy to a [supported environment](https://kit.svelte.dev/docs#adapters-supported-environments), no configuration is necessary and your web application deploys automatically once you set it up with the supported hosting provider.

**Note**: Once the command completes, please make sure you read the console output and follow the link(s) provided to complete the adapter configuration.

**Usage**

```bash
webstone web deployment configure
```

### webstone web deployment deploy

Deploys the `web` service based on a configured deployment adapter.

If you deploy to a [supported environment](https://kit.svelte.dev/docs#adapters-supported-environments), no configuration is necessary and your web application deploys automatically once you set it up with the supported hosting provider.

**Note**: This command only works after you configured a deployment adapter. See [`webstone web configure deployment`](#webstone-web-configure-deployment).

**Usage**

```bash
webstone web deployment deploy [--preview]
```

- `[--preview]` - Preview your application in production mode before you deploy it. Equivalent to [`svelte-kit preview`](https://kit.svelte.dev/docs#command-line-interface-svelte-kit-build).

### webstone web dev

Starts the `web` service. This is an alias for `webstone dev web`.

**Usage**

```bash
webstone web dev
```

### webstone web page create

Creates a new page in your `web` service. E.g.`/about-us`.

**Usage**

```bash
webstone web page create [name]
```

- `[name]` - The name of the page to create. This can be `about-us` or `"About Us"`. If no name is provided, the CLI will prompt you interactively.

### webstone web page delete

Deletes a page in your `web` service. E.g.`/about-us`.

**Usage**

```bash
webstone web page delete [name]
```

- `[name]` - The name of the page to delete. This can be `about-us` or `"About Us"`. If no name is provided, the CLI will prompt you interactively.

### webstone web svelte-add

This is a convenience wrapper around `svelte-add` (https://github.com/svelte-add/svelte-add) to add things like Tailwind CSS, mdsvex, etc.

**Usage**

```bash
webstone web svelte-add <integration>
```

- `<integration>` - Mandatory, the name of the integration to add, e.g. `tailwindcss` or `mdsvex`. Please refer to [the `svelte-add` docs](https://github.com/svelte-add/svelte-add) for a list of available integrations.
