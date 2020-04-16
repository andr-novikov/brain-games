#!/usr/bin/env node

import { greeting, gameplay } from '../index.js';
import calcGame from '../games/calcGame.js';

greeting();
gameplay(calcGame);
