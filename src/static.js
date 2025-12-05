import path from 'path';
import { fileURLToPath } from 'url';
import spaMiddleware from '@ucd-lib/spa-router-middleware';
import config from './config.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default (app) => {
  let assetsDir = path.join(__dirname, './public');

  let bundleVersion = (new Date()).toISOString();
  let jsEnvPath = 'dev';

  if ( !config.isDevEnv ) {
    jsEnvPath = 'dist';

    // todo: update bundleVersion to pull from cork-app-build manifest
  }

  spaMiddleware({
    app,
    htmlFile : path.join(__dirname, './index.html'),
    isRoot : true,
    allRoutes: true,
    static : {
      dir : assetsDir
    },
    enable404 : false,

    getConfig : async (req, res, next) => {
      next({
        title: config.pageTitle,
        headerText: config.headerText,
        hideHeader: config.hideHeader,
        explanationText: config.explanationText,
        hideExplanation: config.hideExplanation,
        additionalText: config.additionalText,
        belowImageContent: config.belowImageContent
      });
    },

    template : (req, res, next) => {
      const bundle = `<script src='/cork-service-down-splash-assets/js/${jsEnvPath}/cork-service-down-splash.js?v=${bundleVersion}'></script>`;
      const siteIcon = `<link rel="icon" href="/cork-service-down-splash-assets/img/site-icon.png">`;
      next({
        title: config.pageTitle,
        bundle,
        siteIcon
      });
    }
  });
};
