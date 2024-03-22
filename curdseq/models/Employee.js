import db from '../config/db.js';
import { DataTypes } from 'sequelize';

const Employee = db.define('Employee', {
    employeeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    }
});

export default Employee;
