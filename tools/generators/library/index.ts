import {
  formatFiles,
  generateFiles,
  installPackagesTask,
  joinPathFragments,
  Tree,
  updateJson,
} from '@nrwl/devkit';

type Schema = {
  name: string;
};

export function getRootTsConfigPathInTree(tree: Tree): string {
  for (const path of ['tsconfig.base.json', 'tsconfig.json']) {
    if (tree.exists(path)) {
      return path;
    }
  }

  return 'tsconfig.base.json';
}

function updateRootTsConfig(host: Tree, options: Schema) {
  updateJson(host, getRootTsConfigPathInTree(host), (json) => {
    const c = json.compilerOptions;
    c.paths = c.paths || {};
    delete c.paths[options.name];

    if (c.paths['@acme/' + options.name]) {
      throw new Error(
        `You already have a library with the name ${options.name} in your workspace.`,
      );
    }

    c.paths['@acme/' + options.name] = [
      joinPathFragments('packages/' + options.name, './src', 'index.ts'),
    ];

    return json;
  });
}

export default async function (tree: Tree, schema: Schema) {
  const lib = 'packages/' + schema.name;
  generateFiles(tree, joinPathFragments(__dirname, './files'), 'packages/' + schema.name, schema);
  tree.rename(`${lib}/vite.config.md`, `${lib}/vite.config.ts`);
  tree.rename(`${lib}/src/index.md`, `${lib}/src/index.ts`);
  tree.rename(`${lib}/project.json.md`, `${lib}/project.json`);
  updateRootTsConfig(tree, schema);
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
