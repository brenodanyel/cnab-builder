import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['builders/cnab-400/index.ts'],
	format: ['cjs', 'esm'],
	dts: true,
	splitting: false,
	sourcemap: true,
	clean: true,
});
