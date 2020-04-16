#!/usr/bin/env node

import { greeting, gameplay } from '../index.js';
import primeGame from '../games/primeGame.js';

greeting();
gameplay(primeGame);
