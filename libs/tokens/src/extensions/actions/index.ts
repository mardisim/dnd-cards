import { CustomActionsBuilder, ExtensionContext } from '@nxkit/style-dictionary/extensions';
import { Dictionary, Platform } from 'style-dictionary';
import { copyFilesAction } from './copy_files_action';

const customActionsBuilder: CustomActionsBuilder = (extensionContext: ExtensionContext) => {
  return {
    copy_assets_files: copyFilesAction(extensionContext),
    my_custom_action: {
      /** The action in the form of a function. */
      do: (dictionary: Dictionary, config: Platform) => {
        console.log('do my_custom_action');
      },

      /** A function that undoes the action. */
      undo: (dictionary: Dictionary, config: Platform) => {
        console.log('undo my_custom_action');
      },
    },
  };
};

export default customActionsBuilder;
