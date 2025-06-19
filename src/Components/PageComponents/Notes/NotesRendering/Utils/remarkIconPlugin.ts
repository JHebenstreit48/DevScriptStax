import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Parent, Literal } from 'unist';

export const remarkIconPlugin: Plugin = () => {
  return (tree) => {
    visit(tree, 'text', (node: Literal, index, parent) => {
      if (
        !parent ||
        typeof index !== 'number' ||
        node.type !== 'text' ||
        typeof node.value !== 'string' ||
        !('children' in parent)
      ) {
        return;
      }

      const segments = node.value.split('[icon:wrench]');
      if (segments.length < 2) return;

      const newNodes: Literal[] = [];

      segments.forEach((textPart, i) => {
        if (textPart) {
          newNodes.push({ type: 'text', value: textPart });
        }

        if (i < segments.length - 1) {
          newNodes.push({
            type: 'html',
            value: '<span data-icon="wrench"></span>',
          });
        }
      });

      (parent as Parent).children.splice(index, 1, ...newNodes);
    });
  };
};
