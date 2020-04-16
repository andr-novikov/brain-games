#!/usr/bin/env node

import { greeting, gameplay } from '../index.js';
import gcdGames from '../games/gcdGame.js';

greeting();
gameplay(gcdGames);
