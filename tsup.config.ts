import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/**/*.ts'],
	target: 'es2020',
	format: 'cjs',
	dts: true,
	clean: true,
	minify: true,
});
