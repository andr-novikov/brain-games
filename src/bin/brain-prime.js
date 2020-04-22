#!/usr/bin/env node

import { getUserName, playGame } from '../index.js';
import primeGame from '../games/primeGame.js';

getUserName();
playGame(primeGame);
