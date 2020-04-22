#!/usr/bin/env node

import { getUserName, playGame } from '../index.js';
import progressionGame from '../games/progressionGame.js';

getUserName();
playGame(progressionGame);
