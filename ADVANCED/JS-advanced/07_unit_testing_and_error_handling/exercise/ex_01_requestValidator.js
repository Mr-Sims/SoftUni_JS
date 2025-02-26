function validator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT']
    const validVersion =  ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    const uriRegex = /(^[\w.]+$)/;
    const messageRegex = /([<>\\&'"])/;


    if (!obj.method || !validMethods.includes(obj.method) ){
        throw new Error('Invalid request header: Invalid Method');
    };
    if (!obj.uri || obj.uri == '' || !uriRegex.test(obj.uri)) {
        throw new Error('Invalid request header: Invalid URI');
    };
    if (!obj.version || !validVersion.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    };
    if (obj.message == undefined || messageRegex.test(obj.message)) {
        throw new Error('Invalid request header: Invalid Message')
    };

    return obj;
};

//valid request
validator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

//invalid method
validator({
method: 'OPTIONS',
uri: 'git.master',
version: 'HTTP/1.1',
message: '-recursive'
});


//invalid version
validator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});