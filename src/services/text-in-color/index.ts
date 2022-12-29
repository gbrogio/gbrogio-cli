import chalk from 'chalk';
/**
 * @param color is a hexadecimal color `e.g. #FFFFFF`
 * @param text is the text that you want to color
 * @example console.log(textInHexColor('#FFFFFF', 'Hello World!')
 */
export function textInHexColor(color: string, text: string) {
  return chalk.hex(color)(text);
}

/**
 * @param color is a hexadecimal color `e.g. #FFFFFF`
 * @param options.lines (Optional) provides how much lines you separator have default is 1
 */
export function textSeparator(color: string, options?: { lines?: number }) {
  if (color === 'hidden')
    return Array({ length: options?.lines || 1 })
      .fill('\n')
      .join('');

  if (!color.startsWith('#')) throw new Error('Color must be a hexadecimal color.');

  return Array({ length: options?.lines || 1 })
    .fill(textInHexColor(color, '#-----------------------------------------------#'))
    .join('\n');
}
