#!/usr/bin/env node

import { greeting, gameplay } from '../index.js';
import primeGame from '../games/calcGame.js';

greeting();
gameplay(primeGame);
