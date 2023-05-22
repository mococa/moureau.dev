import { NullstackNode, NullstackPlugin, NullstackPluginNode } from 'nullstack';

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

const not_found_page_plugin: NullstackPlugin = {
  transform({ instances, router: { url }, page }) {
    type Application = {
      _scope?: {
        virtualDom?: {
          type: string | boolean;
        };
      };
    };

    const { _scope: scope } = instances.application as Application;

    if (!scope && !scope?.virtualDom) return;

    if (scope.virtualDom?.type !== 'div') return;

    const route_page = Object.values(instances).find(
      ({ _attributes: attrs }) => {
        return attrs.route === url;
      },
    );

    if (!route_page && page.status !== 404 && url !== '/') {
      page.status = 404;
    }
  },
  load() {},
  client: true,
  server: true,
};

export const plugins = [fix_boolean_plugin, not_found_page_plugin];
