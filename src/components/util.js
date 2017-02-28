class Errors {
    constructor() {
        this.errors = {}
    }

    // 对应区域是否有errors
    has(field) {
        return this.errors.hasOwnProperty(field)
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    // 找回某个区域的error信息
    get(field) {
        if (this.errors[field]) {
            return this.errors[field]
        }
    }

    // 记录新错误信息
    record(errors) {
        // 使用assign({})就行了，是不能在原对象上?会没有getter和setter属性
        this.errors = Object.assign({}, this.errors, errors)
    }

    clear(field) {
        if (field) {
            delete this.errors[field];

            return;
        } 

        this.errors = {};
    }
}

class Form {
    constructor(data, rules) {
        this.originalData = data;
        this.rules = rules || '';

        for (let field in data) {
            this[field] = data[field]
        }

        this.error = new Errors();
    }

    // 只能把触发方式写死
    // 验证有问题
    validate(field) {
        let rules = this.rules[field],
            data = this[field],
            error = this.error;

        if (rules) {
            rules.forEach((rule) => {
                if (rule.validator(data)) {
                    error.record({ [field]: rule.message })
                }
            })
        }
    }

    data() {
        // 获取所有值
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property]
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] ="";
        }

        this.error.clear();
    }

    onValidate() {
        let data = this.data()

        for(var key in data) {
            this.validate(key)
        }

        return this.error.any()
    }

    // post(url) {
    //     return this.submit('post', url)
    // }

    // put(url) {
    //     return this.submit('patch', url)
    // }

    // delete(url) {
    //     return this.submit('delete', url);
    // }

    // submit(requestType, url, fn) {
    //     // 验证移到前端
    //     // onSubmit -> check front rules -> success send/record errors -> record response

    //     return new Promise((resolve, reject) => {
    //         axios[requestType](url, this.data())
    //             .then(response => {
    //                 this.onSuccess(response.data);

    //                 resolve(response.data)
    //             })
    //             .catch(error => {
    //                 this.onFail(error.response.data)

    //                 reject(error.response.data)
    //             })
    //     })
    // }

    onSuccess(data) {
        alert(data.message)

        this.reset()
    }

    // 错误时后台定义的
    onFail(errors) {
        this.error.record(errors)
    }
}

export { Form }