import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },
  alias: {
    // this will match a file
    // 'my-file': 'path/to/my-file.js',

    // this will match a directory and its contents
    // (`my-directory/x` resolves to `path/to/my-directory/x`)
    // 'my-directory': 'path/to/my-directory',

    // an alias ending /* will only match
    // the contents of a directory, not the directory itself
    // 'my-directory/*': 'path/to/my-directory/*',
  },
}

export default config
