import { ExtensionContext } from '@nxkit/style-dictionary/extensions';
import * as fs from 'fs-extra';
import * as path from 'path';
import { Action, Dictionary, Platform } from 'style-dictionary';

export function copyFilesAction(extensionContext: ExtensionContext): Action {
  const assetsPath = path.join(extensionContext.options.sourceRoot, 'assets');
  return {
    do: (dictionary: Dictionary, config: Platform) => {
      console.log('Copying assets directory to ' + config.buildPath);
      fs.copySync(assetsPath, config.buildPath);
    },
    undo: (dictionary: Dictionary, config: Platform) => {
      console.log('Removing assets directory from ' + config.buildPath);
      fs.removeSync(config.buildPath);
    },
  };
}
