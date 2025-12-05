# Service Down Splash Page

Application that displays a styled splash page for when a service is down.

![Service Down Splash screenshot](cork-service-down-splash-screenshot.png)

## Usage 

Use the prebuilt image and map to your host port:
```yaml
app:
  image: us-west1-docker.pkg.dev/digital-ucdavis-edu/pub/cork-service-down-splash:v1.0.0
  ports:
    - 3000:3000
```

### Configuration
The `APP_CONFIG_PATH` environmental variable maps to a configuration file in the container. Bind a volume to this location to control the look and behavior of the splash page.
```yml
  splash:
    environment:
      APP_CONFIG_PATH: /cork-service-down-splash/config.js
    volumes:
      - ./cork-app-down-splash-config.js:/cork-service-down-splash/config.js
```
Your js config file should export (default) an object with any of the following properties:

| Property | Description |
| -------- | ----------- |
| pageTitle | The `<title>` text |
| headerText | The `<h1>` text |
| hideHeader | Hides the `<h1>` element |
| explanationText | The paragraph text below the `h1`. Accepts html. |
| hideExplanation | Hides the explanationText |
| additionalText | Optional text to add below the explanation text, such as a link to more information. Accepts html. |
| belowImageContent | Optional text to add below the image/main content area. Accepts html. |
| statusCode | Status code to return. Defaults to `503` |
| retryAfter | The [Retry-After response header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Retry-After). Does not get set by default. | 

![Service Down Splash areas](cork-service-down-splash-areas.png)

## Local Development

- Build image - `./devops/cmds/init-local-dev.sh`
- Bring up container - `cd ./devops/compose/cork-service-down-splash-local-dev && docker compose up -d`
- Start server - `./devops/cmds/start.sh`
- Start watch process -`./devops/cmds/watch.sh`