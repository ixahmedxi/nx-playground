{
  "name": "<%= name %>",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "sourceRoot": "packages/<%= name %>/src",
  "projectType": "library",
  "targets": {
    "build": {
      "executor": "@nrwl/vite:build",
      "outputs": ["{options.outputPath}"],
      "options": {
        "outputPath": "dist/packages/<%= name %>"
      }
    },
    "test": {
      "executor": "@nrwl/vite:test",
      "outputs": ["coverage/packages/<%= name %>"],
      "options": {
        "passWithNoTests": true,
        "reportsDirectory": "../../coverage/packages/<%= name %>"
      }
    },
    "lint": {
      "executor": "@nrwl/linter:eslint",
      "outputs": ["{options.outputFile}"],
      "options": {
        "lintFilePatterns": ["packages/<%= name %>/**/*.ts"]
      }
    }
  },
  "tags": []
}
