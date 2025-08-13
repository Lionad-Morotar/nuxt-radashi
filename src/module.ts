import { addImports, defineNuxtModule } from "@nuxt/kit";
import * as radashi from "radashi";

export interface ModuleOptions {
  /**
   * Prefix to be added before every radashi function
   *
   * `false` to disable uppercasing
   *
   * @defaultValue `use`
   */
  prefix: false | string;
  /**
   * Functions that starts with this keywords will be skipped by prefix
   *
   * `false` to disable uppercasing
   *
   * @defaultValue 'is'
   */
  prefixSkip: string | string[] | false;
  /**
   * Iterable of string pairs to alias each function
   *
   * @defaultValue []
   */
  alias: Iterable<[string, string]>;
  /**
   * Upper case first letter after prefix
   *
   * `false` to disable uppercasing
   *
   * @defaultValue true
   */
  upperAfterPrefix: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-radashi",
    configKey: "radashi",
    compatibility: {
      nuxt: "^4.0.0",
    },
  },
  defaults: {
    prefix: "use",
    prefixSkip: "is",
    alias: [],
    upperAfterPrefix: true,
  },
  setup(options, nuxt) {
    const aliasMap = new Map<string, string>(options.alias);
    const prefixSkip = options.prefixSkip
      ? Array.isArray(options.prefixSkip)
        ? options.prefixSkip
        : [options.prefixSkip]
      : [];
    for (const name of Object.keys(radashi)) {
      const alias = aliasMap.has(name) ? aliasMap.get(name)! : name;
      const prefix =
        (!prefixSkip.some((key) => alias.startsWith(key)) && options.prefix) ||
        "";
      const as = prefix
        ? prefix + (options.upperAfterPrefix ? radashi.pascal(alias) : alias)
        : alias;
      addImports({ name, as, from: "radashi" });
    }
  },
});
