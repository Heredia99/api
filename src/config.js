import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

export default (app) => {
    app.disable('x-powered-by');
    app.set('env', process.env.NODE_ENV);

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('combined'));

    app.use(cors());
};
