#! /bin/bash

###
# Does all the setup required for local development
###

set -e
CMDS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
source "$CMDS_DIR/config.sh"

VERSION=$1
if [ -z "$VERSION" ]; then
  VERSION="main"
fi

cd $CMDS_DIR

echo "Building local-dev docker image..."
./build-local-dev.sh $VERSION
echo "Local-dev docker image built."

if [ ! -f "$LOCAL_DEV_DIR/.env" ]; then
  touch "$LOCAL_DEV_DIR/.env"
fi