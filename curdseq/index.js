import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './config/db.js';
import employeeRoutes from './routes/employeeRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(employeeRoutes);

sequelize.sync()
    .then(() => {
        console.log('Models synchronized with database.');
    })
    .catch(err => {
        console.error('Unable to synchronize models with database:', err);
    });

    
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
