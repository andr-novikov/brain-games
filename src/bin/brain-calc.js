#!/usr/bin/env node

import { getUserName, playGame } from '../index.js';
import calcGame from '../games/calcGame.js';

getUserName();
playGame(calcGame);
