#!/usr/bin/env node

import { greeting, gameplay } from '../index.js';
import evenGame from '../games/evenGame.js';

greeting();
gameplay(evenGame);
