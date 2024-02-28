type RouteCallback = (errorElement?: HTMLElement) => void;

interface RouteConfig {
  path: string;
  element: RouteCallback;
  errorElement?: RouteCallback;
  children?: RouteConfig[];
  params?: Record<string, string>;
}

export class TSRouter {
  private routes: RouteConfig[] = [];

  constructor(routes: RouteConfig[]) {
    this.routes = routes;
    window.addEventListener('popstate', this.handlePopState.bind(this));
    this.handlePopState(); // Initial handling of current state
  }

  private handlePopState() {
    const currentPath = window.location.pathname;
    const matchingRoute = this.findMatchingRoute(currentPath, this.routes);

    if (matchingRoute) {
      const errorElement = document.createElement('div');
      matchingRoute.element(errorElement);

      if (matchingRoute.children) {
        const nestedPath = currentPath.slice(matchingRoute.path.length);
        const childElement = errorElement.querySelector('#child') as HTMLDivElement;
        if (childElement) {
          this.renderChildren(matchingRoute.children, nestedPath, childElement);
        }
      }
    } else {
      const notFoundRoute = this.findMatchingRoute('*', this.routes);
      if (notFoundRoute) {
        const errorElement = document.createElement('div');
        notFoundRoute.element(errorElement);
      }
    }
  }

  private renderChildren(children: RouteConfig[], nestedPath: string, parentElement: HTMLElement) {
    const matchingChild = this.findMatchingRoute(nestedPath, children);
    if (matchingChild) {
      const childElement = document.createElement('div');
      matchingChild.element(childElement);
      parentElement.appendChild(childElement);

      if (matchingChild.children) {
        const nextNestedPath = nestedPath.slice(matchingChild.path.length);
        this.renderChildren(matchingChild.children, nextNestedPath, childElement);
      }
    }
  }

  private findMatchingRoute(path: string, routes: RouteConfig[]): RouteConfig | undefined {
    for (const route of routes) {
      const routePath = route.path;
      const isDefaultRoute = routePath === '*';

      if (!isDefaultRoute) {
        const paramNames: string[] = [];
        const regexPattern = routePath.replace(/:[^\s/]+/g, (match) => {
          paramNames.push(match.substring(1));
          return '([^\\s/]+)';
        });

        const regex = new RegExp(`^${regexPattern}(?:/|$)`);
        const match = path.match(regex);

        if (match) {
          const params: Record<string, string> = {};
          paramNames.forEach((name, index) => {
            params[name] = match[index + 1];
          });

          if (route.children) {
            const nestedPath = path.slice(match[0].length);
            const matchingChild = this.findMatchingRoute(nestedPath, route.children);
            if (matchingChild) {
              matchingChild.params = params;
              return matchingChild;
            }
          }

          return { ...route, params };
        }
      } else {
        return route;
      }
    }

    return undefined;
  }

  navigate(path: string) {
    history.pushState(null, '', path); 
    this.handlePopState(); 
  }
}
