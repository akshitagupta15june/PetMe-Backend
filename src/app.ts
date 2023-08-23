import * as express from 'express';
import * as cors from 'cors';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    this.app.get('/', (_req, res) => {
      res.send({ ok: true });
    });

    this.routes();
  }

  private config(): void {
    const acessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      this.app.use(cors());
      next();
    };

    this.app.use(acessControl);
    this.app.use(express.json());
  }

  private routes(): void {
    this.app.use(router);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  }
}

export default App;
