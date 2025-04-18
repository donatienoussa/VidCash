const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
    if (IS_DEV) {
        return 'com.dholmesodb.VidCash.dev';
    }

    if (IS_PREVIEW) {
        return 'com.dholmesodb.VidCash.preview';
    }

    return 'com.dholmesodb.VidCash';
};

const getAppName = () => {
    if (IS_DEV) {
        return 'VidCash (Dev)';
    }

    if (IS_PREVIEW) {
        return 'VidCash (Preview)';
    }

    return 'VidCash';
};


export default ({ config }) => ({
    ...config,
    name: getAppName(),
    ios: {
        ...config.ios, 
        bundleIdentifier: getUniqueIdentifier()
    },
    android: {
        ...config.android, 
        package: getUniqueIdentifier()
    }
});