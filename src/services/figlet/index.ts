import figletLib, { fontsSync, type Fonts } from 'figlet';

const fonts = fontsSync();

/**
 * @param text Is the text to convert in a figlet
 * @description returns the figlet with the primary font `Big Money-nw`
 */
export function figletPrimary(text: string) {
  return figletLib.textSync(text, { font: fonts[40] });
}

/**
 * @param text Is the text to convert in a figlet
 * @param font Select the font to show the figlet default is `1Row`
 */
export function figlet(text: string, font?: Fonts) {
  return figletLib.textSync(text, { font: font || '1Row' });
}
