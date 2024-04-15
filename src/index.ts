import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the semi-formal-sidecar extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'semi-formal-sidecar:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension semi-formal-sidecar is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('semi-formal-sidecar settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for semi-formal-sidecar.', reason);
        });
    }
  }
};

export default plugin;
