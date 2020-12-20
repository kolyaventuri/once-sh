import app from '../app';
import {server as debug} from '../src/lib/debug';

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  debug(`Server listening on port ${PORT}`);
});
