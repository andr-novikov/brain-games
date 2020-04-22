#!/usr/bin/env node

import { getUserName, playGame } from '../index.js';
import evenGame from '../games/evenGame.js';

getUserName();
playGame(evenGame);
