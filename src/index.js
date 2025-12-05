import express from 'express';
import staticRoutes from './static.js';
import config from './config.js';


const app = express();

// Middleware to set status code for non-asset requests
app.use((req, res, next) => {
  const firstSeg = (req.path || req.url || '').split('/').filter(Boolean)[0];
  if (!['cork-service-down-splash-assets'].includes(firstSeg)) {
    res.status(config.statusCode);
    if ( config.retryAfter ) {
      res.set('Retry-After', String(config.retryAfter));
    }
  }
  next();
});
staticRoutes(app);

app.listen(config.containerPort, () => {
  console.log(`Cork Service Down Splash running on port ${config.containerPort}`);
});