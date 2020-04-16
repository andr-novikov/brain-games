#!/usr/bin/env node

import { greeting, gameplay } from '../index.js';
import progressionGame from '../games/progressionGame.js';

greeting();
gameplay(progressionGame);
