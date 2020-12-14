import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// 此处一定要开启注册，以便dva将当前model注入到redux空间中
app.model(require('./models/mainModel').default);
app.model(require('./models/productModel').default);
app.model(require('./models/aslogModel').default)

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
