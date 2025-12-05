#! /bin/bash
set -e
CMDS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
ROOT_DIR="$(cd "$CMDS_DIR/../.." && pwd)"
SRC_DIR="$(cd "$ROOT_DIR/src" && pwd)"
COMPOSE_DIR="$(cd "$ROOT_DIR/devops/compose" && pwd)"
PROJECT_NAME="cork-service-down-splash"
LOCAL_DEV_DIR="$(cd "$ROOT_DIR/devops/compose/$PROJECT_NAME-local-dev" && pwd)"
