let _import = (file: string) => () => import('/@/pages/' + file + '.vue');

export default _import;
