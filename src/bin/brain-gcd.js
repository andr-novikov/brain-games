#!/usr/bin/env node

import { getUserName, playGame } from '../index.js';
import gcdGames from '../games/gcdGame.js';

getUserName();
playGame(gcdGames);
