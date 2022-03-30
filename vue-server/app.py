from flask import Flask
from flask_cors import * # 解决ajax 跨域问题请求

app = Flask(__name__)


# r'/*' 是通配符，让本服务器所有的URL 都允许跨域请求
# CORS(app, resources=r'/*',supports_credentials=True) # supports_credentials=True 多加会报错，暂时不知道原因
CORS(app, resources=r'/*')

@app.route('/')
def hello_world():
    return 'Hello World!'


if __name__ == '__main__':
    app.run(debug=True)
