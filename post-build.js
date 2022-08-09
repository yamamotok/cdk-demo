const path = require('path');
const shell = require('shelljs');

const buildDir = path.join(__dirname, './build');

const packageJson = {
  source: path.join(__dirname, './package.json'),
  copy: path.join(buildDir, './package.json'),
};
const packageLockJson = {
  source: path.join(__dirname, './package-lock.json'),
  copy: path.join(buildDir, './package-lock.json'),
};

if (!shell.test('-d', buildDir)) {
  shell.echo('"build" directory does not exist');
  process.exit(1);
}

shell.cp(packageJson.source, packageJson.copy);
shell.cp(packageLockJson.source, packageLockJson.copy);

shell.cd(buildDir);
shell.exec('npm ci --only=prod --no-optional');

shell.echo('post-build done');
