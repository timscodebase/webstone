import type { WebstoneToolbox } from "../../../extensions/web";

import { GluegunCommand } from "gluegun";

const command: GluegunCommand = {
  alias: ["d"],
  description: "Deploy the web service",
  // @ts-ignore: WebstoneToolbox extends GluegunToolbox, ignore TS error.
  run: async (toolbox: WebstoneToolbox) => {
    const { parameters, print, system, web } = toolbox;

    if (!web.configure.deployment.isAnyAdapterInstalled()) {
      print.warning(
        "No deployment adapter configured. Please run `pnpm webstone web configure deployment` to fix this before you deploy the application."
      );
      return;
    }

    const buildSpinner = print.spin(`Building the web service...`);
    await system.run(`pnpm build --filter ./services/web`);
    buildSpinner.succeed();

    if (parameters.options.preview) {
      print.info(`Previewing the web service...`);
      await system.exec(`pnpm preview --filter ./services/web`, {
        stdout: "inherit",
      });
    } else {
      const installedAdapter = web.configure.deployment.getInstalledAdapter();
      print.highlight(
        `Your web service is ready to be deployed. Please follow the instructions at https://github.com/WebstoneHQ/webstone/tree/main/docs/deployment#${installedAdapter.identifier.substring(
          "adapter-".length
        )} to deploy to ${installedAdapter.name}`
      );
    }
  },
};

module.exports = command;
