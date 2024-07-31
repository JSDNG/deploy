"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Prescription extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Prescription.belongsTo(models.MedicalStaff, { foreignKey: "doctorId" });
            Prescription.belongsTo(models.MedicalRecord, { foreignKey: "recordId" });
            Prescription.belongsToMany(models.Medication, {
                through: models.PrescriptionDetail,
                foreignKey: "prescriptionId",
            });
        }
    }
    Prescription.init(
        {
            doctorId: DataTypes.INTEGER,
            recordId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Prescription",
        }
    );
    return Prescription;
};
