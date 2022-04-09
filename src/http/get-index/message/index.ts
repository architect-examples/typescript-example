import whatev from 'whatev';
import copy from './copy';

export default function (): string {
  return `${copy()}; and here's a string from a npm dep: ${whatev.string}!`;
}
