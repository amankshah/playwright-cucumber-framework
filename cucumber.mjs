
// Cucumber configuration -cucumber.mjs
import path from 'path';


export default {
    default: {
        requireModule: ['ts-node/register'], // Ensure TypeScript files are processed
        require: [
            path.resolve('./tests/support/cucumber.ts'),
            path.resolve('./tests/steps/**/*.ts')
        ],
        paths: [path.resolve('./tests/features/**/*.feature')],
        format: ['progress'],
        publishQuiet: true,
    }
};
