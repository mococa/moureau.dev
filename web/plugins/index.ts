import { NullstackPlugin, NullstackPluginNode } from 'nullstack';

const fix_boolean = ({ attributes, children }: NullstackPluginNode) => {
  for (const attribute in attributes) {
    if (typeof attributes[attribute] === 'boolean') {
      attributes[attribute] = String(attributes[attribute]);
    }
  }

  for (const child of Array(children)) {
    if (!child) continue;

    const child_node = child as unknown as NullstackPluginNode;

    const { attributes: child_attributes } = child_node;

    if (child_attributes) fix_boolean(child_node);
  }
};

const fix_boolean_plugin: NullstackPlugin = {
  transform({ node }) {
    fix_boolean(node);
  },
  load() {},
  client: true,
  server: true,
};

export const plugins = [fix_boolean_plugin];
