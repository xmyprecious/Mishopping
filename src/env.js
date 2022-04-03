let baseURL;


switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://development-mall-pre.spingboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.spingboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.spingboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.spingboot.cn/api';
        break;

}

export default {
    baseURL: {

    }
}