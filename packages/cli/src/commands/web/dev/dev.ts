import { GluegunCommand } from "gluegun";

const command: GluegunCommand = {
  alias: ["d"],
  description: "Start the web dev server",
  run: async (toolbox) => {
    const { print, system } = toolbox;

    print.info(`Starting web service...`);
    await system.exec(`pnpm run dev --filter ./services/web`, {
      stdout: "inherit",
    });
  },
};

module.exports = command;
