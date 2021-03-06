interface Options {
  extra: string | undefined;
}

interface ClassToggles {
  [K: string]: boolean;
}

const scopedClassMarker = (prefix: string) =>
  (name: string | ClassToggles, options?: Options) =>
    Object.entries(typeof name === 'string' ? {[name]: name} : name)
      .filter(kv => kv[1] !== false).map(kv => kv[0])
      .map(name => [prefix, name].filter(Boolean).join('-'))
      .concat(options && options.extra || [])
      .join(' ');

export {scopedClassMarker};