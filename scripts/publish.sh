#!/usr/bin/env bash

#  pnpm login --registry https://registry.npmjs.org
pnpm publish --filter ./packages/* --access public
