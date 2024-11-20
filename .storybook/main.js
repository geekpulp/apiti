/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [ "@storybook/addon-essentials", "@chromatic-com/storybook" ],
    framework: {
        name: "@storybook/web-components-vite",
        options: {},
    },
    core: {
        builder: '@storybook/builder-vite',
        options: {
            viteConfigPath: './vite.config.js',
        },
    },
    docs: {
        //👇 See the table below for the list of supported options
        defaultName: 'Documentation',
        toc: true,
    },
    async viteFinal( config ) {
        // Merge custom configuration into the default config
        const { mergeConfig } = await import( 'vite' );

        return mergeConfig( config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: [ 'storybook-dark-mode' ],
            },
        } );
    },
};
export default config;
