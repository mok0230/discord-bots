#!/bin/bash

set -x

cd bots || exit 1
bots=(*)
printf 'Deploying %s bots: %s\n' "${#bots[@]}" "${bots[@]}"

trap "exit" INT TERM ERR
trap "kill 0" EXIT

for  i in "${!bots[@]}"; do
  node "${bots[$i]}" &
done

wait