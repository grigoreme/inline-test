const decorators = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  cancel: '\x1b[0m',
};

export function colorful(DECORATE, text) {
  const decorate = DECORATE.toLowerCase();
  if (!decorators[decorate]) {
    return;
  }
  return `${decorators[decorate]}${text}${decorators.cancel}`;
}

export function easyColorful(DECORATE) {
  const decorate = DECORATE.toLowerCase();
  if (!decorators[decorate]) {
    return;
  }
  return (text: any) => `${decorators[decorate]}${text}${decorators.cancel}`;
}
