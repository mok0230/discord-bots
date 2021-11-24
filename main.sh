#!/bin/bash

cd bots || exit 1
bots=(*)
printf 'Bots found: %s\n' "${bots[@]}"

trap "exit" INT TERM ERR
trap "kill 0" EXIT
